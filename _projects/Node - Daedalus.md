---
layout: page
title: Node - Daedalus
description: Dedicated node for hardware testing (FPGA / PCIe / NIC)
img: assets/img/samsung_desktop.jpg
importance: 5
category: "Infrastructure & DevOps"
lang: en
ref: node-daedalus
server_photos:
  - /assets/img/Daedalus - FPGA1.png
  - /assets/img/Daedalus - FPGA2.jpg
---

<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="Intel Core i5" src="https://img.shields.io/badge/Intel%20Core%20i5--4670-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Xilinx ZYNQ-7000" src="https://img.shields.io/badge/Xilinx%20ZYNQ--7000-FFCC00?style=flat">
<img alt="Xilinx Kintex UltraScale+" src="https://img.shields.io/badge/Xilinx%20Kintex%20UltraScale%2B-FFCC00?style=flat">
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Xilinx%20Vivado-EE0000?style=flat">
</p>

<style>
.home-server-table {
  width: auto;
  max-width: 100%;
  margin: 1.2rem auto;
  border-collapse: separate !important;
  border-spacing: 0 !important;
}

.home-server-table th,
.home-server-table td {
  text-align: center;
  vertical-align: middle;
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
  width: 70%;
  max-width: 100%;
  height: auto;
  margin: 1.2rem auto;
}

.daedalus-server-carousel {
  max-width: 850px;
  margin: 1.2rem auto 2rem;
}

.daedalus-server-carousel .carousel-inner {
  height: 500px;
  background: #111;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.daedalus-server-carousel .carousel-item,
.daedalus-server-carousel .carousel-item img {
  width: 100%;
  height: 100%;
}

.daedalus-server-carousel .carousel-item img {
  object-fit: contain;
}

@media (max-width: 767px) {
  .daedalus-server-carousel .carousel-inner {
    height: 55vw;
  }
}
</style>

> For the full cluster architecture, see the [Home Server Infrastructure Overview]({{ '/projects/Home%20Server%20Overview/' | relative_url }}).

## At a Glance

| Item | Value |
| --- | --- |
| Role | Hardware Test (FPGA · PCIe · NIC) |
| Hardware | Custom PC, Intel Core i5-4670, 8 GB RAM, 2 TB HDD |
| Attached devices | Xilinx ZYNQ-7000 FPGA & Xilinx Kintex UltraScale+ FPGA boards |
| OS / Hypervisor | Ubuntu (bare metal, no hypervisor) |
| Public ports | None |
| In service since | 2025 onward |
| Current status | Running (powered on per experiment) |
{: .home-server-table .home-server-spaced-table}

One-line summary: **Daedalus is a bare-metal node kept separate so that physical gear like FPGA and PCIe is never mixed with other workloads.**

---

## What Runs Here

Daedalus is *not an always-on service node; it is the node used for hardware testing*.

**Attached devices / tools**

| Area | Setup |
| --- | --- |
| FPGA boards | Xilinx ZYNQ-7000 series (USB-JTAG), Xilinx Kintex UltraScale+ FPGA (JTAG) |
| Host OS | Ubuntu 18.04 LTS |
| Network | WireGuard client to reach the Hades / Athena internal networks |
{: .home-server-table .home-server-spaced-table}

**Workflow**

<img class="home-server-overview-image" src="{{ '/assets/img/Daedalus - devflow.png' | relative_url }}" alt="FPGA build sequence image">

---

## Key Decisions

#### - Why bare-metal Ubuntu (no hypervisor)
Unlike Athena and Hades, Daedalus intentionally has no hypervisor.

- **Avoiding USB-JTAG / PCIe passthrough complexity.** A hypervisor adds another step to hand USB/PCIe devices precisely to a guest, and vendor tools often assume *devices visible directly on the host*, which makes debugging harder.
- **Daedalus's value ≠ availability.** It does not need to be always-on, so the benefits of VM isolation/migration are small.

#### - Why Ubuntu
Xilinx Vivado and the ZYNQ board drivers run most stably on Ubuntu LTS, and most vendor docs and community resources are written against Ubuntu. CentOS/RHEL are officially supported too, but for a personal environment Ubuntu's resource accessibility made it the better fit.

---

## Operations & Incidents

**Routine operations**
- Boot only when running an experiment; otherwise powered off (less power/noise)
- Copy outputs (`.bit`, logs, waveform captures) to the NAS backup path when an experiment ends

**Incident — a kernel-version issue prevented NIC detection**

Situation: Ubuntu 18.04 LTS's 4.x kernel did not match the kernel features required by the NIC/`cndm` driver, causing compatibility issues during NIC detection and kernel-module builds.

How I noticed: while tracing the build failure, I found a compatibility problem between the running kernel version and the device driver / kernel headers.

Response:
1. **Kernel update.** Updated the Ubuntu 18.04 LTS kernel from 4.x to `5.4.0-150`.
2. **Reboot and version check.** Rebooted the system remotely, then reconnected over SSH to confirm it booted into the new kernel.
3. **Device and build-environment check.** Confirmed the NIC enumerated correctly on the 5.4 kernel, installed the matching kernel headers, and retried the `cndm` module build to produce `cndm.ko` successfully.

Lesson: when building hardware drivers or kernel modules, you have to align not only the OS version but the *running kernel, the kernel headers, and the device driver* together.

---

## Limitations & Next Steps

**What's missing now**
- With no hypervisor, the experiment environment is tied directly to the host OS — touching drivers/kernel affects the whole host (weak per-experiment isolation)
- The kernel/driver environment is not recorded in a reproducible way — the setup process, as in the NIC incident, is not documented
- USB-JTAG/PCIe setup depends on physical connections — devices cannot be swapped/reconnected remotely

**What I'll improve next**
- Pin the Vivado/driver build environment to an **image/script** so the "kernel 5.4 + specific headers + driver" combination becomes *reproducible*
- Keep an experiment notebook of device connections, kernel parameters, and build steps so the *next test* can reproduce the same state

---

## Photo

<div id="daedalusServerCarousel" class="carousel slide daedalus-server-carousel" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for photo in page.server_photos %}
    <li data-target="#daedalusServerCarousel" data-slide-to="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}"></li>
    {% endfor %}
  </ol>

  <div class="carousel-inner">
    {% for photo in page.server_photos %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <img src="{{ photo | relative_url }}" alt="Daedalus server photo {{ forloop.index }}">
    </div>
    {% endfor %}
  </div>

  <a class="carousel-control-prev" href="#daedalusServerCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#daedalusServerCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<p class="text-muted small mt-4">
  Korean version: <a href="{{ '/ko/projects/node-daedalus/' | relative_url }}">Node - Daedalus</a>
</p>
