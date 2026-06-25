---
layout: about
title: About
title_ko: 소개
permalink: /
lang: en
ref: about
subtitle: Backend / DevOps / Cloud Infrastructure Engineer

profile:
  align: right
  image: main_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
   

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
  scrollable: false
  limit: 3
---

Hi, I'm **Jihyeon Jeong (정지현)** — I **design and operate backend and cloud infrastructure that stays reliable under real-world failures**: observable, reproducible, and recoverable by design.

My focus is **Linux · Kubernetes · AWS · CI/CD**, working across backend and infrastructure. I'm early in my career, and I run a self-hosted 3-node home lab as a production-like environment where I own reliability, observability, and failure recovery end to end.

It isn't large-scale traffic, but even at home-lab scale I keep an operational track record. The storage node has run **~255 days** since its last maintenance, its disks are still **SMART-clean after 5+ years** of power-on time, and the compute node has stayed up **~254 days** through real outages on UPS protection. (As of 2026-06-15)

I'm also considering graduate study, with research interests in **(1) distributed systems & ML infrastructure (MLOps / LLM serving)** and **(2) Hardware acceleration**.

#### Currently focused on

<div class="tags">
  <span class="tag">Linux</span>
  <span class="tag">Virtualization</span>
  <span class="tag">Kubernetes</span>
  <span class="tag">AWS</span>
  <span class="tag">CI/CD</span>
  <span class="tag">IaC</span>
  <span class="tag">SRE</span>
  <span class="tag">Networking</span>
  <span class="tag">Backend</span>
  <span class="tag">Observability</span>
</div>

#### Selected work

- **Home Lab** — a [3-node on-prem cluster]({{ '/projects/Home%20Server%20Overview/' | relative_url }}) (Xen + ESXi) hosting backend services, JupyterHub, NAS, and VPN gateways. UPS-protected, with email alerting for admin logins, UPS events, and backup results.
- **TACTIX** — RAG-based aircraft maintenance support system for air-gapped military networks.
- **Moisam** — Dormitory group-purchasing platform (OAuth, real-time chat).

For more, see the [Projects]({{ '/projects/' | relative_url }}) page or the [CV]({{ '/cv/' | relative_url }}).
