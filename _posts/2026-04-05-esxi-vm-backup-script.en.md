---
layout: post
title: "Writing My Own ESXi VM Backup Script — From ghettoVCB to Custom Tooling"
date: 2026-04-05 21:30:00 +0900
description: A retrospective on building a scheduled backup pipeline for VMs running on Hades (VMware ESXi) — including the RPO/RTO targets I had to define along the way.
tags: home-lab esxi backup disaster-recovery shell-script devops
categories: home-lab
lang: en
ref: esxi-vm-backup
permalink: /blog/2026/esxi-vm-backup-script/
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

> **This post is a work in progress (placeholder).** Actual script source and the first DR (disaster recovery) drill report will be added once executed.

## Starting Point — "There is a backup, but I have never restored from it"

The [Hades](/projects/node---hades/) node runs about 8 VMs on VMware ESXi: personal services, sandboxes, Mattermost, PhotoPrism, etc. What passed for "backup" was:

1. A manual `cp` of the ESXi datastore to a NAS HDD (roughly once per quarter)
2. Quarterly copies of critical VMDKs onto an external HDD

The problem: **I had never actually tried a restore**. The phrase "experience defining and operating with RPO/RTO targets", which appears in nearly every infrastructure job posting, applied to me at exactly zero.

## Defining RPO / RTO

| VM Class | Examples | RPO | RTO |
|---|---|---|---|
| Critical | Mattermost, NAS metadata DB | 24h | 2h |
| Important | PhotoPrism, JupyterHub | 7d | 8h |
| Sandbox | Test VMs | best-effort | best-effort |

Just writing this table forced me to decide *where my time should actually go*.

## Tooling Survey

- **ghettoVCB** — the standard, but ESXi 8.x compatibility and notification story are thin
- **Veeam Community** — free but socket-limited, and learning value is low
- **Custom shell script** ✅ — best fit for learning and customization

## Design (planned)

```bash
# pseudo
for vm in $(target_list); do
  vim-cmd snapshot.create $vm "auto-backup"
  ovftool ... "$vm" "$NAS_PATH/$(date +%F)/$vm.ova"
  vim-cmd snapshot.removeall $vm
  log_to_loki "$vm" "$status"
done
prune_older_than 30d
notify_discord "$summary"
```

## TODO

- [ ] OVF-based backups have no native incremental → evaluate rsync + thin-disk strategy
- [ ] Forward backup logs into Loki (ties into my [monitoring stack post](/blog/2026/home-lab-monitoring-stack/))
- [ ] **DR drill: real restore on a separate node → measure actual RTO**
- [ ] Automated integrity check (sha256 + boot test of restored VM)
- [ ] Alert rule for "backup failed"

## Lesson (so far)

> *Having a backup is not the same as being able to restore.* Run one drill, and you will rewrite half of your backup script.
