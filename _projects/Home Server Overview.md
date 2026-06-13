---
layout: page
title: Home Server Infrastructure Overview
description: Overview of the personal distributed server cluster (Athena, Hades, Daedalus)
img: assets/img/home_server_overview.jpg
importance: 0
category: "Infrastructure & DevOps"
lang: en
ref: home-server-overview
---

<!-- ===== Tech Stack ===== -->
<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="VMware ESXi" src="https://img.shields.io/badge/VMware%20ESXi-607078?style=flat&logo=vmware&logoColor=white">
<img alt="Xen" src="https://img.shields.io/badge/Xen%20Hypervisor-EE0000?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="OpenVPN" src="https://img.shields.io/badge/OpenVPN-EA7E20?style=flat&logo=openvpn&logoColor=white">
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
<img alt="NAS" src="https://img.shields.io/badge/NAS-0085CA?style=flat">
<img alt="FPGA" src="https://img.shields.io/badge/Xilinx%20ZYNQ-FFCC00?style=flat">
</p>

<!-- ===== 전체 개요 ===== -->
## Home Server Infrastructure Overview

This section provides a **high-level overview** of my distributed **home server infrastructure**,  
which consists of three interconnected nodes — [**Node - Athena**](/my-awesome-home-lab/node-athena/), [**Node - Hades**](/my-awesome-home-lab/node-hades/), and [**Node - Daedalus**](/my-awesome-home-lab/node-daedalus/).  
Together, they form a miniature on-premise data center that supports **AI research, software development, and hardware prototyping**.

---

### 🧠 [Node - Athena](/my-awesome-home-lab/node-athena/) (Compute & AI Research)
- **Primary Role**: High-performance compute node for **AI training**, **data science**, and **R&D**.  
- **Highlights**:  
  - Dual Xeon processors, dual Tesla P100 GPUs  
  - Xen-based virtualization for isolated AI and engineering workloads  
  - Runs **JupyterHub**, **Docker AI agent platforms**, and **software engineering projects**  
  - Acts as the **central compute backbone** for coursework, competitions, and LLM-based systems  
- **Connected Services**: Remote access via VPN, shared data sync with Hades NAS

---

### 🗄️ [Node - Hades](/my-awesome-home-lab/node-hades/) (Storage & Virtualization Hub)
- **Primary Role**: **Storage, collaboration, and virtualization** node  
- **Highlights**:  
  - VMware ESXi hypervisor managing multiple lightweight VMs  
  - **NAS** for centralized storage and backups (10 TB)  
  - **PhotoPrism** and **MatterMost** for media and team collaboration  
  - Serves as **gateway and remote-access hub** (OpenVPN / WireGuard)  
- **Connected Services**: Syncs with Athena for data and code backup, hosts personal cloud services

---

### ⚙️ [Node - Daedalus](/my-awesome-home-lab/node-daedalus/) (FPGA & Hardware Testing)
- **Primary Role**: Dedicated system for **FPGA and embedded experiments**  
- **Highlights**:  
  - Focused on **Xilinx ZYNQ-7000** hardware-software co-design  
  - Used for **AXI interface**, **firmware testing**, and hardware validation  
  - Lightweight environment for low-level prototyping before integration with Athena or Hades  
- **Connected Services**: Local data transfer and test logs synchronized to Hades NAS

---

### 🔗 Interconnection & Architecture
<div class="row justify-content-sm-center">
  <div class="col-sm-9 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/home_server_architecture.jpg"
       title="Home server cluster architecture"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The three nodes form a **distributed cluster** connected via a high-speed local network.  
  - **Athena** handles compute-intensive AI workloads  
  - **Hades** provides storage, virtualization, and VPN gateway functions  
  - **Daedalus** supports FPGA and embedded experiments  
  Together, they operate as a **cohesive hybrid environment** bridging AI, software, and hardware domains.
</div>

---

### 🌐 Use Cases & Outcomes
- Enables **AI model development**, **FPGA prototyping**, and **DevOps experimentation** within a private environment  
- Serves as a **complete on-premise research and education platform** for academic and personal projects  
- Provides **redundancy, modularity, and security** through virtualization and UPS-backed nodes  
- Powers ongoing projects such as **RAG-based AI systems**, **IoT firmware integration**, and **collaborative software platforms**

---

_📦 Together, [Node - Athena](/my-awesome-home-lab/node-athena/), [Node - Hades](/my-awesome-home-lab/node-hades/), and [Node - Daedalus](/my-awesome-home-lab/node-daedalus/) illustrate the convergence of AI, DevOps, and embedded systems within a personal research ecosystem._