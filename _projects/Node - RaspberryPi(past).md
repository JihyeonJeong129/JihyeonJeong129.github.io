---
layout: page
title: Node - RaspberryPi (retired)
description: An early Raspberry Pi NAS experiment. Retired when Node - Hades came online.
img: assets/img/raspberrypi.jpg
importance: 7
category: "Infrastructure & DevOps"
lang: en
ref: node-raspberrypi
---

<p>
<img alt="Raspberry Pi" src="https://img.shields.io/badge/Raspberry%20Pi%203B%2B%20%2F%204-A22846?style=flat&logo=raspberrypi&logoColor=white">
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="OpenMediaVault" src="https://img.shields.io/badge/OpenMediaVault-5DACDF?style=flat">
<img alt="NAS" src="https://img.shields.io/badge/NAS%204TB-0085CA?style=flat">
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
</style>

> For the full cluster architecture, see the [Home Server Infrastructure Overview]({{ '/projects/Home%20Server%20Overview/' | relative_url }}). The NAS role is now handled by [Node - Hades]({{ '/projects/Node%20-%20Hades/' | relative_url }}).

## At a Glance

| Item | Value |
| --- | --- |
| Role (at the time) | Early NAS / low-power file server |
| Hardware | Raspberry Pi 3 B+ → Raspberry Pi 4 (8 GB) |
| Storage | USB external docking station + 4 TB HDD |
| OS / Software | Raspberry Pi OS, OpenMediaVault, SMB/NFS |
| In service | 1st-generation lab (before Hades) |
| Current status | **Retired — role moved to Hades** |
{: .home-server-table .home-server-spaced-table}

One-line summary: **The 1st-generation node where I ran a NAS hands-on to test, on the cheapest possible hardware, what it could actually be used for.**

---

## What I Tried

The primary goal was to verify whether a low-power, low-cost board could make a *usable NAS*.

- **Installed OpenMediaVault** — put OMV on Raspberry Pi OS and configured SMB/NFS shares.
- **Mounted a USB external HDD** — connected a 4 TB HDD over USB and mapped shared directories in OMV.
- **Separated users/permissions** — organized an account/permission model assuming concurrent use from Windows and MacBook.
- **Compared two boards** — started on the Raspberry Pi 3 B+, then upgraded to the Raspberry Pi 4 (8 GB) to compare I/O characteristics and network speed. The Pi 3 B+ had USB 2.0 / 100 Mbps Ethernet, while the Pi 4 had USB 3.0 / 1 Gbps Ethernet, allowing transfers at the HDD's maximum supported speed.

---

## What Broke / What I Learned

It worked from the start, but the limits for *24/365 operation* were clear.

- **I/O limits of USB-attached storage.** Throughput was inconsistent on large file transfers, and the USB controller occasionally produced a temporary disconnect.
- **Long-term stability.** Minor faults accumulated more in the USB/power/external-HDD combination than in the board itself. The pattern was: *once "running fine" passed a week, the next week it would wobble at least once.*
- **No backup.** A single disk with no backup path → a structure where one disk failure could wipe out all data.

Key lesson: I learned firsthand that **for network storage, reliability and a recovery plan matter more than capacity**, and this became the foundation for the next node (Hades).

---

## Why It Was Retired

I decided to run the same NAS role on hardware *worth keeping always on*.

- Judged it **risky to depend on a USB external HDD for a year-round workload** — a machine with proper SATA bays was needed.
- Needed a node that could **also host other workloads like VPN and internal services** → a machine capable of virtualization.
- Moved the role to the [HPE MicroServer Gen10 Plus → Hades]({{ '/projects/Node%20-%20Hades/' | relative_url }}), which supports the **free VMware ESXi license range + an official HPE image + 4-bay hot-swap** together.

At the transition, data was migrated from the USB external HDD to a new internal 4 TB HDD (ext4), using a strategy that *kept the ext4 disk as-is*.

---

## What Carried Over

The 1st-generation Raspberry Pi node retired, but the following still live on in the current home lab.

- **The OpenMediaVault operating model** — Hades runs the same OMV on a VM. The permission/share design experience was reused directly.
- **"single disk = no backup"** — the direct motivation for building the Main (4 TB) + Backup (6 TB) + daily `rsync` structure on Hades. The detailed backup policy and its limits are covered in [Hades · Operations & Incidents]({{ '/projects/Node%20-%20Hades/' | relative_url }}#operations--incidents).

---

<p class="text-muted small mt-4">
  Korean version: <a href="{{ '/ko/projects/node-raspberrypi/' | relative_url }}">Node - RaspberryPi</a>
</p>
