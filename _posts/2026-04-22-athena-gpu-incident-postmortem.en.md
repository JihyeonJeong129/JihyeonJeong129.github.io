---
layout: post
title: "[Incident] Athena Node GPU Disappeared — 30 Minutes Without a Tesla P100"
date: 2026-04-22 02:14:00 +0900
description: A user report that "GPU is gone" on JupyterHub. Full timeline from symptom to root-cause hypothesis to mitigation.
tags: home-lab incident postmortem nvidia gpu xen jupyterhub
categories: home-lab
lang: en
ref: athena-gpu-incident
permalink: /blog/2026/athena-gpu-postmortem/
giscus_comments: true
related_posts: false
search_exclude: true
toc:
  beginning: true
---

> **This post is a work in progress (placeholder).** Treated as the canonical post-mortem template — every future incident on the home lab will be recorded in this format.

## TL;DR

- **Impact**: 4 JupyterHub users on the [Athena]({{ '/projects/node---athena/' | relative_url }}) node lost GPU access for ~28 minutes.
- **Hypothesized cause**: One of the PCI-passthrough Tesla P100 cards detached due to an IOMMU group conflict inside Xen DomU.
- **Recovery**: VM reboot + DomU kernel module reload restored both GPUs.
- **Prevention**: A boot-time `nvidia-smi` health check via systemd unit + Discord alert on failure.

## Timeline (KST)

| Time | Event |
|---|---|
| 01:42 | User A reports `torch.cuda.is_available()` returning False on JupyterHub |
| 01:46 | SSH in → `nvidia-smi` shows only GPU 0; GPU 1 missing |
| 01:50 | `dmesg` reveals `NVRM: GPU at 0000:af:00.0 has fallen off the bus` |
| 01:55 | Dom0 → DomU detach/attach attempts fail |
| 02:05 | Force-rebooted the affected DomU |
| 02:10 | Both GPUs back in `nvidia-smi` |
| 02:14 | JupyterHub sessions restored, ticket closed |

## 5 Whys (lightweight RCA)

1. **Why did the GPU disappear?** → Kernel logs show the PCIe link dropped instantly.
2. **Why did the link drop?** → Likely a timing issue during IOMMU group reassignment.
3. **Why was the IOMMU group disturbed?** → Another DomU was booting simultaneously and briefly held a passthrough device.
4. **Why did that cause a conflict?** → No explicit serialization on PCI passthrough in the Xen config.
5. **Why no serialization?** → Initial config assumed single-GPU VMs; multi-GPU scenarios were never validated.

## Action Items

- [ ] Make Xen DomU boot ordering explicit (`xl create` dependency definition)
- [ ] systemd timer running `nvidia-smi` health check every minute → Discord webhook on failure
- [ ] Document the PCI-passthrough device ↔ DomU mapping (and add a diagram on the [Athena page]({{ '/projects/node---athena/' | relative_url }}))
- [ ] Decide policy: auto-reboot DomU vs. manual intervention on recurrence
- [ ] **Adopt this post-mortem format as the standard for all future home-lab incidents**

## Retrospective

> The phrase *"incident response experience"* on job postings, I am realizing, is just the cumulative weight of events like this one.
> A 28-minute outage may sound trivial, but **writing the timeline at minute resolution makes the next incident dramatically faster to resolve.**
