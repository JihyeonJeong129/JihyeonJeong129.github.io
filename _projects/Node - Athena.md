---
layout: page
title: Node - Athena
description: Compute / AI / VM Host node built on a Lenovo System X3650 server
img: assets/img/lenovo_x3650_2gpu.jpg
importance: 2
category: "Infrastructure & DevOps"
lang: en
ref: node-athena
server_photos:
  - /assets/img/Athena - photo1.jpg
  - /assets/img/Athena - photo2.jpg
---

<p>
<img alt="Lenovo X3650" src="https://img.shields.io/badge/Lenovo%20System%20X3650-E2231A?style=flat&logo=lenovo&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E5--2630%20v4-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Tesla P100" src="https://img.shields.io/badge/NVIDIA%20Tesla%20P100-76B900?style=flat&logo=nvidia&logoColor=white">
<img alt="XCP-ng" src="https://img.shields.io/badge/XCP--ng%20%28Xen%29-EE0000?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="JupyterHub" src="https://img.shields.io/badge/JupyterHub-F37626?style=flat&logo=jupyter&logoColor=white">
<img alt="APC UPS" src="https://img.shields.io/badge/APC%20UPS%20SMC1000-FF6600?style=flat">
</p>

<style>
.home-server-table {
  width: 100%;
  max-width: 100%;
  margin: 1.2rem 0;
  border-collapse: separate !important;
  border-spacing: 0 !important;
}

.home-server-table th,
.home-server-table td {
  text-align: left;
  vertical-align: middle;
  white-space: normal;
  word-break: keep-all;
  overflow-wrap: anywhere;
  line-height: 1.55;
}

.home-server-spaced-table {
  border-spacing: 0 5pt !important;
}

.post article hr {
  margin-top: calc(1rem + 5pt);
  margin-bottom: calc(1rem + 5pt);
}

.home-server-overview-image {
  display: block;
  width: 85%;
  max-width: 100%;
  height: auto;
  margin: 1.2rem auto;
}

.athena-project-table {
  table-layout: fixed;
}

.athena-project-table th:nth-child(1),
.athena-project-table td:nth-child(1) {
  width: 14%;
}

.athena-project-table th:nth-child(2),
.athena-project-table td:nth-child(2) {
  width: 40%;
}

.athena-project-table th:nth-child(3),
.athena-project-table td:nth-child(3) {
  width: 25%;
  white-space: nowrap;
}

.athena-project-table th:nth-child(4),
.athena-project-table td:nth-child(4) {
  width: 21%;
}

.athena-server-carousel {
  max-width: 850px;
  margin: 1.2rem auto 2rem;
}

.athena-server-carousel .carousel-inner {
  height: 500px;
  background: #111;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.athena-server-carousel .carousel-item,
.athena-server-carousel .carousel-item img {
  width: 100%;
  height: 100%;
}

.athena-server-carousel .carousel-item img {
  object-fit: contain;
}

@media (max-width: 767px) {
  .athena-server-carousel .carousel-inner {
    height: 55vw;
  }
}

</style>

> For the full cluster architecture, see the [Home Server Infrastructure Overview]({{ '/projects/Home%20Server%20Overview/' | relative_url }}).

## At a Glance

| Item | Value |
| --- | --- |
| Role | Compute / AI · LLM / VM Host |
| Hardware | Lenovo System X3650, dual Xeon E5-2630 v4 (20 cores / 40 threads total), 272 GB RAM (16 GB × 17) |
| GPU | NVIDIA Tesla P100 × 2 |
| Storage (local) | Local VM disk (NVMe 1 TB) + Hades NAS mount |
| OS / Hypervisor | XCP-ng (Xen) |
| Network (IP) range | `192.168.200.X` |
| Public ports | 1 WireGuard port |
| Power protection | APC UPS SMC1000 (1000 VA) — holds 10+ min at a typical 400 W peak; the VPN VM detects and propagates power loss |
| In service since | 2024 onward |
| Current status | Running (compute node) — **~254 days of continuous uptime** since the UPS was added (booted 2025-10-04) |
{: .home-server-table .home-server-spaced-table}

One-line summary: **Athena is the compute-only node that runs per-project VMs and GPU workloads side by side on a single machine.**

---

## What Runs Here

Athena's base unit is "one VM per project → dependency isolation with Docker inside the VM." It is designed so a package conflict or runtime problem in one project never affects another.

| Type | Purpose | Resources |
| --- | --- | --- |
| JupyterHub VM | Notebook environment for data analysis / model experiments | vCPU 8, RAM 32 GB, 1× P100 passthrough |
| LLM / AI experiment VM | Local LLM inference (Ollama) and fine-tuning experiments | vCPU 8, RAM 32 GB, 1× P100 passthrough |
| Infrastructure VM | WireGuard VPN endpoint (incl. outage detection/propagation), XOA for XCP-ng management | vCPU 4, RAM 4 GB |
{: .home-server-table .home-server-spaced-table}

**Past project VMs**

| Project | Description | Period | Resources |
| --- | --- | --- | --- |
| Frontier | Ontology service collecting/storing data from multiple channels (Slack, Notion, Discord, etc.), hosting PostgreSQL, Neo4j, Qdrant | 2025.12 ~ 2026.04 | vCPU 8, RAM 32 GB |
| Communicare | Backend prototype server for an international-student community platform, hosting PostgreSQL | 2025.10 ~ 2025.12 | vCPU 4, RAM 8 GB |
| TACTIX | RAG system for an air-gapped environment | 2025.05 ~ 2025.06 | vCPU 8, RAM 32 GB, GPU P100 |
| Moisam | Moisam backend prototype server, hosting MySQL | 2025.04 ~ 2025.05 | vCPU 4, RAM 8 GB |
{: .home-server-table .home-server-spaced-table .athena-project-table}

**Deployment pipeline (for service VMs)**

<img class="home-server-overview-image" src="{{ '/assets/img/Athena - deploy.png' | relative_url }}" alt="Athena node project deploy overview">

A GitHub Actions self-hosted runner sits inside an Athena VM, so commit → build → container swap happens automatically without opening any build port externally.

**Storage usage**
- VM OS disks: local to Athena
- Project data / models / datasets: mounted from the Hades NAS (over WireGuard)
- Container data: regenerable data is excluded from backup; only long-term data is copied to the NAS backup path

---

## Key Decisions

#### - Why XCP-ng (Xen)
Athena is a 20-core machine, which exceeds the free ESXi license's 8-vCPU limit. I evaluated **Proxmox** and **XCP-ng** as alternatives and, since Hades already ran ESXi, chose XCP-ng because its *management model is closer to ESXi*. Keeping both nodes' operations (snapshots, console access, VM migration) similar reduces operational overhead.

- **Trade-off considered:** Proxmox is KVM-based with strong ZFS integration and plenty of Korean resources, but I preferred unifying on XCP-ng over paying the cognitive cost of moving away from the ESXi-style workflow.

#### - Why Docker on top of VMs (instead of Docker alone)
Docker alone already isolates dependencies. The reason for wrapping it in a VM as well:

- **Guaranteed resource limits:** vCPU/RAM/disk caps are set at the VM level so one project's OOM or runaway disk usage cannot affect the whole host.
- **GPU passthrough:** dedicating a Tesla P100 *per VM* (rather than container sharing) is easier for managing driver/CUDA version conflicts.

In return, I accept some inefficiency from double virtualization (hypervisor + Docker). As services grow, *moving to a single plane such as VM consolidation / Kubernetes* is planned as the next step.

#### - Why JupyterHub
Analysis/experiment workflows are often notebook-based, and I did not want to copy notebooks back and forth between laptop and server. JupyterHub lets Athena's GPU resources be used directly from the notebook environment — that is the core reason.

---

## Operations & Incidents

**Routine operations**
- Take per-VM snapshots manually, before and after major changes
- Keep project data on the NAS mount path, included in Hades's daily backup
- WireGuard keys are separated per node — Athena exposes only 1 external WireGuard port
- The VPN VM monitors UPS (APC SMC1000) status and, on power loss, propagates the alert to the other VMs

**Power protection (UPS)**

- **Device:** APC UPS SMC1000, **1000 VA** output
- **Load basis:** the Lenovo X3650's hardware can draw up to ~1.8 kW at peak, but a UPS that sustains that level is too expensive to be practical. Instead I sized for the *real-world peak of a normal workload, ~400 W*, rather than the extreme of GPUs at full load. The UPS's goal is not *uninterrupted operation* but *securing enough time to shut down safely*.
- **Target protection window:** configured to hold **10+ minutes** at 400 W → a window to *save in-progress work and shut down safely* on power loss (the window shrinks under full GPU load, so on an outage signal, training jobs are stopped first)
- **Detection & propagation:** the UPS is connected over USB to Athena's **WireGuard / VPN VM**. When the UPS raises an external-power-cut alert, the VPN VM receives it and propagates it to Hades, Daedalus, and the other nodes → the whole cluster enters a coordinated safe-shutdown

**Incident — forced shutdown from an outage & GPU kernel corruption (the reason the UPS was added)**

Situation: a power outage in the area around Athena forced a **hard shutdown**. External power was restored about **45 minutes** later.

How I noticed: the boot after power was restored looked fine, but as a GPU workload came up, `nvidia-smi` failed to recognize the device and CUDA calls failed. Tracing the kernel log, I found the NVIDIA driver's kernel module was corrupted.

Response:
1. Removed and **reinstalled** the NVIDIA driver at the same version, rebuilt the kernel module, and GPU workloads recovered.
2. Concluding that the *forced shutdown itself had to be prevented*, I **added a UPS** — installing the APC SMC1000 (1000 VA).
3. Attached the UPS to the VPN VM over USB and built the **outage → VPN-VM detection → propagation to other nodes** structure.
4. Organized per-VM shutdown commands to *gracefully stop* GPU workloads and training jobs on outage detection.

Lesson: *power is the essential foundation that makes the whole system operable*. Separately from data backup, **a "sudden outage" itself can leave state damage on accelerators like GPUs**. And a single node's outage response is only meaningful when it propagates across the whole cluster.

Result: the same failure has not recurred since the UPS was added, and the node has run **without a reboot for ~254 days (~8 months) since the 2025-10-04 boot**. There were a few brief outages in that span, but the UPS absorbed them and the system stayed up. (Based on the current `uptime` reading, with no time-series logging.)

**Incident — environment drift**

Over long-running operation, unused Docker images and old VM snapshots accumulated and the disk filled up. After that I added "clean up once every two months" to the operational routine.

---

## Limitations & Next Steps

**What's missing now**
- No GPU scheduler, so allocation relies on manual agreement
- Weak self-hosted-runner isolation — worked around by a policy of not accepting external PR builds
- No monitoring/alerting → VM state is checked by a person directly

**What I'll change next**
- Visualize GPU/memory usage with Prometheus + node_exporter + nvidia_gpu_exporter
- Strengthen isolation by running the self-hosted runner as a single-use container
- Evaluate a lightweight scheduler (Slurm or Ray, etc.) for queuing heavy training jobs

---

## Photo

<div id="athenaServerCarousel" class="carousel slide athena-server-carousel" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for photo in page.server_photos %}
    <li data-target="#athenaServerCarousel" data-slide-to="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}"></li>
    {% endfor %}
  </ol>

  <div class="carousel-inner">
    {% for photo in page.server_photos %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <img src="{{ photo | relative_url }}" alt="Athena server photo {{ forloop.index }}">
    </div>
    {% endfor %}
  </div>

  <a class="carousel-control-prev" href="#athenaServerCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#athenaServerCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<p class="text-muted small mt-4">
  Korean version: <a href="{{ '/ko/projects/node-athena/' | relative_url }}">Node - Athena</a>
</p>
