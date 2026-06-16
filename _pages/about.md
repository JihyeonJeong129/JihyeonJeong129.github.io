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

Hi, I'm **Jihyeon Jeong (정지현)** — I build and operate the kind of **production-ready systems** I want to work on professionally.

My focus is **Linux · Kubernetes · AWS · CI/CD**, working across backend and infrastructure with an interest in systems that are *observable, reproducible, and recoverable*. I don't have professional experience yet, but I treat my self-hosted 3-node home lab as a small production-like environment — practicing how to design and take responsibility for reliability, observability, and failure recovery.

It isn't large-scale traffic, but even at a personal-lab scale I try to leave operational evidence: the storage node has run **~255 days** since its last maintenance, its disks are still **SMART-clean after 5+ years** of power-on time, and the compute node has stayed up **~254 days** through real outages on UPS protection. More than scale, I want to show the discipline of owning failure, backup, and security end to end.

I'm also considering graduate study, with research interests in **(1) distributed systems & ML infrastructure (MLOps / LLM serving)** and **(2) FPGA/PCIe-based hardware acceleration**.

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
- **Moida** — Dormitory group-purchasing platform (OAuth, real-time chat, escrow payments).

For more, see the [Projects]({{ '/projects/' | relative_url }}) page or the [CV]({{ '/cv/' | relative_url }}).
