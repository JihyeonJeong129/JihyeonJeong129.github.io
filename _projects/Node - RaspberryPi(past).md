---
layout: page
title: Node - RaspberryPi
description: with background image
img: assets/img/hpe_microserver_gen10plus.jpg
importance: 7
category: "My Awesome Home Lab"
---

<!-- ===== 프로젝트 개요 ===== -->
## Node - RaspberryPi: Legacy NAS Server Overview
This project introduces **Node - RaspberryPi**, a past server project built with Raspberry Pi boards.  
Although it is no longer in operation, it was used to experiment with **lightweight NAS deployments**.

- **Hardware**:  
  - First Build: Raspberry Pi 3 B+  
  - Second Build: Raspberry Pi 4 (8 GB model)  
  - Storage: 4 TB external HDD (used as main NAS storage)  

- **Purpose**:  
  - Designed to operate as a **NAS (Network Attached Storage)**  
  - Both builds were configured with **OpenMediaVault** to manage storage and provide file services  

---

### Raspberry Pi 3 B+ Build
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/raspberrypi-server/pi3bplus.jpg"
       title="Raspberry Pi 3 B+ NAS Setup"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The **first build** of Node - RaspberryPi was based on a **Raspberry Pi 3 B+**.  
  It served as a low-power testbed for running **OpenMediaVault NAS**, connected to a 4 TB HDD.  
  This setup validated the feasibility of running a NAS on constrained hardware.
</div>

---

### Raspberry Pi 4 (8 GB) Build
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/raspberrypi-server/pi4_8gb.jpg"
       title="Raspberry Pi 4 (8 GB) NAS Setup"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The **second build** upgraded to a **Raspberry Pi 4 (8 GB model)**, significantly improving performance and stability.  
  It continued to run **OpenMediaVault NAS** with a 4 TB HDD, offering better throughput and multi-user handling.  
  This version demonstrated the practical limits of Raspberry Pi-based NAS before transitioning to enterprise-grade servers.
</div>

---

- **Core Services**:  
  - **NAS (OpenMediaVault)**: provided file sharing, user management, and storage access within the local network  
  - Lightweight home server environment for testing and learning purposes  

- **Outcomes**:  
  - Served as an **experimental platform** to validate NAS setups on low-power hardware  
  - Demonstrated the feasibility of **cost-effective storage solutions** using Raspberry Pi boards  
  - Retired from active use after migration to more powerful, enterprise-grade nodes in the infrastructure  


