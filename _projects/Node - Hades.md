---
layout: page
title: Node - Hades
description: with background image
img: assets/img/hpe_microserver_gen10plus.jpg
importance: 1
category: "My Awesome Home Lab"
---

<!-- ===== 프로젝트 개요 ===== -->
## Node - Hades: Home Server Overview
This project highlights my **personal home server (Node - Hades)** built on an HPE MicroServer Gen10 Plus, designed for
virtualization, storage, communication, and remote access.  
It serves as the backbone of my development environment, media archive, and collaboration platform.

- **Hardware**:  
  - HPE MicroServer Gen10 Plus  
  - CPU: Intel Xeon E-2224G  
  - RAM: 32 GB  
  - Storage: 1 TB NVMe SSD (system & VM datastore), 10 TB HDD (data/NAS)
  - UPS: 950VA UPS for **uninterruptible operation** and system protectio  

- **Virtualization**:  
  - VMware ESXi Hypervisor  
  - Hosts multiple lightweight VMs for testing and service deployment  

- **Core Services**:  
  - **Programming Testbed**: run and validate small-scale code experiments  
  - **NAS (Network Attached Storage)**: central storage for documents and media  
  - **PhotoPrism**: personal photo management and indexing service  
  - **MatterMost**: private team collaboration and communication platform  
  - **VPN (OpenVPN & WireGuard)**: secure remote access to internal resources  

- **Outcomes**:  
  - Provides a stable and versatile environment for **development, personal data management, and project collaboration** 
  - Ensures **continuous availability** through UPS-backed power protection   
  - Enables **remote connectivity** and centralized service hosting for both personal and team projects  

---

<!-- ===== Core Services ===== -->
## Core Services

### Programming Testbed
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/hades-server/programming_vm.jpg"
       title="Lightweight VM for programming tests"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Lightweight VMs on ESXi are used as a **testbed for code experiments**, sandboxing scripts and applications before deploying them to production systems.
</div>

---

### NAS (Network Attached Storage)
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/hades-server/nas_service.jpg"
       title="NAS dashboard"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Node - Hades provides a **centralized NAS** for documents, backups, and large data files.  
  With a 10TB HDD, it acts as the main storage hub in the home network.
</div>

---

### PhotoPrism
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/hades-server/photoprism.jpg"
       title="PhotoPrism interface"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  **PhotoPrism** automatically indexes and organizes personal photo collections.  
  It supports AI-powered tagging, facial recognition, and easy web-based browsing.
</div>

---

### MatterMost
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/hades-server/mattermost.jpg"
       title="MatterMost workspace"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  **MatterMost** is deployed as a private team communication platform.  
  It supports channels, file sharing, and integrations, enabling effective collaboration for project teams.
</div>

---

### VPN (OpenVPN & WireGuard)
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/hades-server/vpn_dashboard.jpg"
       title="VPN configuration"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Secure **remote connectivity** is ensured through both OpenVPN and WireGuard setups.  
  This allows access to internal services (NAS, MatterMost, PhotoPrism) from outside the home network safely.
</div>

---

### UPS (Uninterruptible Power Supply)
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/hades-server/ups.jpg"
       title="950VA UPS system"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A **950VA-class UPS** ensures uninterruptible operation and protects Node - Hades from sudden power outages.  
  This guarantees continuous availability for all hosted services and safe system shutdown during extended outages.
</div>
