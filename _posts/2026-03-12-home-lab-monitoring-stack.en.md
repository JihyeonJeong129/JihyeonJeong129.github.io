---
layout: post
title: "Building a Home Lab Monitoring Stack — Prometheus + Grafana + Loki"
date: 2026-03-12 22:00:00 +0900
description: A retrospective on introducing an observability stack to my 3-node home lab (Athena / Hades / Daedalus) — design decisions and lessons learned along the way.
tags: home-lab monitoring prometheus grafana loki devops
categories: home-lab
lang: en
ref: home-lab-monitoring-stack
permalink: /blog/2026/home-lab-monitoring-stack/
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

> **This post is a work in progress (placeholder).** It will be expanded with real operational data — screenshots, alerting rules, and incident examples — as the stack matures.

## Background

Running a 3-node home lab ([Athena](/projects/node---athena/), [Hades](/projects/node---hades/), [Daedalus](/projects/node---daedalus/)) surfaced recurring problems:

- A guest VM would die and I would only notice the next day when SSH failed
- ZFS pool usage crossed thresholds and stayed there, unnoticed, for days
- Transient GPU temperature spikes left no persistent trace

If I wanted to honestly call this *operated infrastructure*, **observability had to come first**. So I committed to a proper monitoring stack.

## Choosing the Stack

| Candidate | Decision | Reason |
|---|---|---|
| Zabbix | ❌ | Steep UI, not container-native |
| Netdata | △ | Great per-node dashboards, weak long-term retention and unified alerting |
| **Prometheus + Grafana + Loki** | ✅ | De facto standard, matches what most production teams use |
| Datadog / New Relic | ❌ | Cost, and runs against my self-learning goal |

## Architecture (planned)

```
[node_exporter / cadvisor / nvidia_smi_exporter]  ─┐
                                                   ├─→ Prometheus (Hades)
[promtail (each node)] ──→ Loki (Hades) ──────────┘
                                                   ↓
                                                Grafana (Hades)
                                                   ↓
                                          Alertmanager → Discord webhook
```

## TODO (future posts)

- [ ] node_exporter installation and systemd unit
- [ ] NVIDIA Tesla P100 metrics via `nvidia_gpu_exporter`
- [ ] ZFS pool usage thresholds (warning 70% / critical 85%)
- [ ] Forwarding ESXi syslog into Loki
- [ ] Alertmanager → Discord webhook integration
- [ ] First-month false-positive review and rule tuning
- [ ] First real incident the stack actually caught — full retro

## Note

> Monitoring is not about *adding* signals — it is about *removing* noise. After one week of alerts, 90% will be junk; the real work is filtering them out.
