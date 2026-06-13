---
layout: page
title: Node - Hades
description: Personal home server (Node - Hades) built on a HPE MicroServer Gen10 Plus
img: assets/img/hpe_microserver_gen10plus.jpg
importance: 1
category: "Infrastructure & DevOps"
lang: en
ref: node-hades
---

<p>
<img alt="HPE MicroServer" src="https://img.shields.io/badge/HPE%20MicroServer%20Gen10%20Plus-01A982?style=flat&logo=hewlettpackardenterprise&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E--2224G-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="VMware ESXi" src="https://img.shields.io/badge/VMware%20ESXi-607078?style=flat&logo=vmware&logoColor=white">
<img alt="NAS" src="https://img.shields.io/badge/NAS%2010TB-0085CA?style=flat">
<img alt="OpenVPN" src="https://img.shields.io/badge/OpenVPN-EA7E20?style=flat&logo=openvpn&logoColor=white">
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
</p>

## Overview

Node - Hades is the storage and service hub in my home-lab infrastructure. It runs virtualization workloads, stores project data, and provides internal services that support development and collaboration.

- **Hardware:** HPE MicroServer Gen10 Plus, Intel Xeon E-2224G, 32 GB RAM, 10 TB data storage
- **Core stack:** VMware ESXi, NAS, VPN, internal collaboration services
- **Role:** storage, service hosting, and remote-access hub

---

## Problem & Motivation

As project data and service experiments grew, I needed a stable node for persistent storage and always-on internal services. A compute server alone was not enough because data management, backup direction, and service availability have different requirements from GPU-heavy experimentation.

Hades was designed to solve:

- centralized file storage for projects and personal data,
- internal service hosting,
- remote access to private resources,
- separation of storage services from compute experiments.

---

## My Role

I built and operated Hades as the infrastructure node responsible for storage and service continuity.

- Installed and configured VMware ESXi.
- Organized VM-based services for storage, collaboration, and remote access.
- Configured VPN access patterns to avoid exposing internal services unnecessarily.
- Used Hades as a data and backup hub for other nodes.

---

## Technical Approach

### Why VMware ESXi

ESXi was selected because Hades needed to host several lightweight service VMs with clear separation. This made it easier to isolate NAS, collaboration, and network services.

### Why NAS-Centered Design

Persistent data should not depend on a single experiment machine. By placing shared storage on Hades, compute workloads on Athena could be rebuilt or changed without losing project data.

### Why VPN Access

VPN access was preferred over direct public exposure. It allowed me to reach internal services remotely while keeping the service surface smaller.

---

## Implementation & Problem Solving

The implementation focused on stable operation rather than raw performance. Hades was configured to host services that benefit from continuity: storage, project files, private collaboration tools, and access gateways.

This made it possible to use Athena more aggressively for experimentation while Hades remained the stable base for data and internal tools.

---

## Unexpected Issues

- **Storage planning:** Once multiple projects share storage, directory structure and backup policy become important.
- **Service exposure:** Convenience can conflict with security, so remote access had to be designed around VPN usage.
- **Availability:** A storage node needs more cautious maintenance because downtime affects other parts of the lab.

---

## Results & Impact

- Built a stable storage and virtualization hub for the home-lab cluster.
- Supported project data management, private services, and remote access.
- Improved the reliability of my development environment by separating storage from compute experiments.
- Practiced infrastructure decisions that resemble small-scale production operations.

---

## Lessons Learned

Hades taught me that storage and access control are infrastructure foundations. Even small personal services become easier to operate when data, compute, and access responsibilities are separated.
