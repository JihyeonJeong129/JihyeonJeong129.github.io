---
layout: page
title: Home Server Infrastructure Overview
description: Overview of the personal distributed server cluster (Athena, Hades, Daedalus)
img: assets/img/main_pic.jpg
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
<img alt="OpenVPN" src="https://img.shields.io/badge/OpenVPN-EA7E20?style=flat&logo=openvpn&logoColor=white">
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
<img alt="NAS" src="https://img.shields.io/badge/NAS-0085CA?style=flat">
</p>

## Overview

This project is my personal on-premise infrastructure, built as a small distributed environment for backend deployment, AI experimentation, storage, and hardware testing.

- **Cluster:** 3 nodes: Athena, Hades, and Daedalus
- **Main roles:** compute, storage, virtualization, VPN access, and hardware testbed
- **Core stack:** Linux, Xen, VMware ESXi, Docker, NAS, OpenVPN, WireGuard
- **Purpose:** operate a realistic environment where I can deploy, break, monitor, and improve services outside a local-only laptop setup

---

## Problem & Motivation

Many student projects end after a local demo. I wanted an environment where services could be deployed, accessed remotely, backed up, and operated over time.

The main problems I wanted to solve were:

- separating experimental workloads from personal devices,
- providing persistent storage for project data and backups,
- testing backend services in a networked environment,
- learning infrastructure trade-offs through direct operation,
- supporting AI, backend, and embedded projects from one shared platform.

---

## My Role

This is an individual infrastructure project. I designed, assembled, configured, and operated the environment myself.

- Designed the role of each node.
- Installed and configured hypervisors and Linux environments.
- Set up VPN access for remote operation.
- Deployed project services such as JupyterHub, collaboration tools, and backend prototypes.
- Managed storage, backup direction, and service separation between nodes.

---

## Architecture & Technology Choices

### Node Roles

- **Athena:** compute node for AI training, JupyterHub, and backend experiments.
- **Hades:** storage and virtualization hub with NAS, collaboration services, and VPN gateway functions.
- **Daedalus:** lightweight hardware and FPGA test node.

### Why On-Premise

Cloud services are convenient, but the home-lab environment gave me direct control over hardware, networking, storage, and failure handling. This was useful for learning DevOps concepts at a lower level than managed services normally expose.

### Why Mixed Virtualization

Different nodes had different roles, so I used virtualization based on the workload:

- Xen for compute-oriented VM isolation on Athena.
- VMware ESXi for lightweight service VMs on Hades.
- Bare-metal or simple Linux setup for hardware testing on Daedalus.

---

## Implementation & Problem Solving

The infrastructure was organized around separation of concerns:

1. Compute-heavy workloads run on Athena.
2. Persistent data and internal services are centered around Hades.
3. Hardware experiments are isolated on Daedalus.
4. Remote access is handled through VPN instead of exposing internal services directly.

This structure let me reuse the same infrastructure across coursework, competitions, and personal services without mixing every workload into one machine.

---

## Unexpected Issues

- **Operational complexity:** Running multiple nodes creates more maintenance work than a single machine.
- **Power and availability:** A home environment requires attention to UPS capacity, safe shutdown, and recovery.
- **Service boundaries:** It is easy for a home lab to become messy unless each node has a clear responsibility.
- **Documentation:** The infrastructure is only useful as a portfolio if the architecture and operating decisions are clearly documented.

---

## Results & Impact

- Built a reusable infrastructure foundation for backend, AI, and hardware projects.
- Used the environment to host or test projects such as TACTIX, Moisam, and JupyterHub-based analysis workflows.
- Gained hands-on experience with virtualization, service deployment, VPN access, and storage planning.
- Developed a more realistic understanding of what it means to operate a service beyond a local demo.

---

## Lessons Learned

The biggest lesson was that infrastructure is not just hardware. A useful system needs clear roles, backup thinking, access control, and operational habits. This project became a practical base for learning those habits.
