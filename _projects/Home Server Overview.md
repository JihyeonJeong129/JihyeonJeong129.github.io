---
layout: page
title: Home Server Infrastructure Overview
description: Overview of the personal distributed server cluster (Athena, Hades, Daedalus)
img: assets/img/homelab-overview.png
importance: 0
category: "Infrastructure & DevOps"
lang: en
ref: home-server-overview
---

<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="VMware ESXi" src="https://img.shields.io/badge/VMware%20ESXi-607078?style=flat&logo=vmware&logoColor=white">
<img alt="Xen" src="https://img.shields.io/badge/Xen%20Hypervisor-EE0000?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
<img alt="NAS" src="https://img.shields.io/badge/NAS-455A64?style=flat">
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

.home-server-overview-image {
  display: block;
  width: 70%;
  max-width: 100%;
  height: auto;
  margin: 1.2rem auto;
}

.post article hr {
  margin-top: calc(1rem + 5pt);
  margin-bottom: calc(1rem + 5pt);
}
</style>

## Overview

MyAwesomeHomeLab is my personal on-premise infrastructure, running on three nodes: Athena, Hades, and Daedalus. I built it to host service deployments, AI / Local LLM experiments, NAS workflows, and FPGA / PCIe hardware tests.

It started with every role on a single Hades box, but as the compute I needed grew, I rebuilt it into the current layout that *physically separates* **compute / storage / hardware testing**. Each node uses its own IP range, and inter-node access is connected only through WireGuard VPN.

<img class="home-server-overview-image" src="{{ '/assets/img/homelab-overview.png' | relative_url }}" alt="MyAwesomeHomeLab infrastructure overview">

---

## Node Architecture

| Node | Role | IP range | OS | Details |
| --- | --- | --- | --- | --- |
| **Athena** | Compute / AI / VM Host | `192.168.200.X` | XCP-ng (Xen) | [View details]({{ '/projects/Node%20-%20Athena/' | relative_url }}) |
| **Hades** | Storage / NAS / Core Service | `192.168.100.X` | VMware ESXi | [View details]({{ '/projects/Node%20-%20Hades/' | relative_url }}) |
| **Daedalus** | Hardware Test / FPGA / PCIe | — | Ubuntu (bare metal) | [View details]({{ '/projects/Node%20-%20Daedalus/' | relative_url }}) |
| **RaspberryPi** *(retired)* | Early NAS experiment | — | Raspberry Pi OS | [View details]({{ '/projects/Node%20-%20RaspberryPi%28past%29/' | relative_url }}) |
{: .home-server-table .home-server-spaced-table}

Each node's hosted workloads, decisions, and operational incidents are covered on the node pages above.

---

## Why Separate Roles

My earlier web projects were tested almost entirely on `localhost`, so I never got to experience the networking, auth, DB, and deployment problems that show up once a real external user connects. A commercial cloud could cover some of that, but the monthly cost was a burden — and since I work across a Windows desktop and a MacBook, I needed a central file store anyway. On top of that, hardware experiments like FPGA and PCIe are effectively impossible in a cloud environment.

Initially I put NAS, services, VPN, and the experiment environment all on a single Hades box, but the MicroServer's limited memory expansion meant it hit a wall quickly. So I split compute out to Athena, refocused Hades on Storage/Core, and added Daedalus as a separate node for hardware experiments — the current structure.

---

## Network & Security

**IP range per node**
- Hades: `192.168.100.X`
- Athena: `192.168.200.X`

**VPN topology**
- One VM on each of Hades / Athena runs WireGuard as the VPN endpoint
- Daedalus runs a WireGuard client on Ubuntu to reach both nodes' internal networks
- `AllowedIPs` routes only management traffic through the VPN, keeping ordinary internet traffic separate

**Public ports (minimized)**
- Hades: NAS service + WireGuard ports only
- Athena: WireGuard port only
- Daedalus: no direct exposure (VPN-only access)

**Security policy**
- SSH is never exposed directly to the public internet — administration happens only over the internal network after connecting via VPN
- Root account login is disabled
- Fail2ban is applied to public NAS services (5 password failures within 24 h → 24 h ban)
- The real incident behind these policies is covered in [Hades · Operations & Incidents]({{ '/projects/Node%20-%20Hades/' | relative_url }}#operations--incidents).

---

## Operational Snapshot

| Item | Current status |
| --- | --- |
| Active nodes | 3 (Hades / Athena / Daedalus) |
| NAS main / backup capacity | 4 TB Main · 6 TB Backup |
| Backup method / frequency | `rsync` Main → Backup, once daily |
| Public port count | Hades 2 / Athena 1 / Daedalus 0 |
| Inter-node communication | WireGuard VPN only |
{: .home-server-table .home-server-spaced-table}

The disks consist of a 4 TB Main Storage used for primary NAS data and a 6 TB Backup Storage for the `rsync` backup.

> Node-level metrics — uptime, number of hosted VMs/containers, latest backup result — are in the "At a Glance" section of each node page.

---

## Technology Choices

| Technology | Reason (summary) |
| --- | --- |
| **VMware ESXi** | Hades (HPE MicroServer, 4-core) has an official HPE image and runs on the free license → [Hades · Key Decisions]({{ '/projects/Node%20-%20Hades/' | relative_url }}#key-decisions) |
| **XCP-ng / Xen** | Athena (20-core) exceeds the free ESXi license range. After evaluating Proxmox, I chose XCP-ng for its ESXi-like operating model → [Athena · Key Decisions]({{ '/projects/Node%20-%20Athena/' | relative_url }}#key-decisions) |
| **OpenMediaVault + ext4** | Built the NAS quickly while reusing existing ext4 disks. The trade-offs vs. ZFS are on the Hades page → [Hades · Key Decisions]({{ '/projects/Node%20-%20Hades/' | relative_url }}#key-decisions) |
| **Docker on VM** | VMs isolate per project, Docker separates runtime dependencies. The deployment pipeline is on the Athena page → [Athena · What Runs Here]({{ '/projects/Node%20-%20Athena/' | relative_url }}#what-runs-here) |
| **WireGuard VPN** | Simpler to configure than OpenVPN, and `AllowedIPs` makes selective routing easy — a good fit for isolating the management network |
| **Ubuntu (Daedalus)** | Most stable compatibility with FPGA vendor tools (Vivado, etc.) and board drivers → [Daedalus · Key Decisions]({{ '/projects/Node%20-%20Daedalus/' | relative_url }}#key-decisions) |
{: .home-server-table .home-server-spaced-table .home-server-choice-table}

---

## Future Plans

The current infrastructure mixes manual setup with partial automation. I keep only the high-priority improvements here and leave the rest in each node page's "Limitations & Next Steps".

- **Monitoring/alerting** — visualize node/service state and backup results with Prometheus + Grafana
- **Recovery-test automation** — periodically verify that a backup is a *restorable* backup
- **IaC for server setup** — fix the node-rebuild procedure as code with Ansible
- **Stronger network separation** — separate NAS / management / experiment traffic more clearly with VLAN / firewall policy

> Per-node improvement items (GPU resource scheduling, ZFS review, FPGA environment upgrades, etc.) are covered on the individual node pages.

---

<p class="text-muted small mt-4">
  Korean version: <a href="{{ '/ko/projects/home-server-overview/' | relative_url }}">홈 서버 인프라 개요</a>
</p>
