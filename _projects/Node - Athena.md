---
layout: page
title: Node - Athena
description: Personal home server (Node - Athena) built on a Lenovo System X3650 server 
img: assets/img/lenovo_x3650_2gpu.jpg
importance: 2
category: "My Awesome Home Lab"
---

<!-- ===== 프로젝트 개요 ===== -->
## Node - Athena: AI & Data Science Server Overview
This project introduces **Node - Athena**, a Lenovo System X3650 server designed for **AI research, data analysis, and collaborative software projects**.  
It serves as the main compute backbone for high-performance machine learning, academic coursework, and team-based R&D.

- **Hardware**:  
  - Lenovo System X3650  
  - CPU: Dual Intel Xeon E5-2630 v4 (each 10 cores / 20 threads → total **20 cores / 40 threads**)  
  - RAM: 80 GB (upgrade to **272 GB planned for October 2025**)  
  - Storage: 1 TB NVMe SSD  
  - GPU: 2 × NVIDIA Tesla P100 (16 GB VRAM each)  
  - Network: Intel 10Gb Ethernet NIC for high-throughput data transfer  
  - UPS: 1000VA UPS installation scheduled for October 2025 to ensure uninterruptible operation  

- **Virtualization**:  
  - **Xen Hypervisor**  
  - Hosts multiple VMs dedicated to AI workloads, Docker-based services, and software engineering projects  

- **Core Services**:  
  - **JupyterHub**: provides a collaborative environment for data analysis and AI training  
    - Used in **Sejong Big Data Competition**  
    - Supported multiple projects in the **Spring 2025 Machine Learning course**  
  - **Docker-based AI Agent Platform**: ongoing development and deployment of AI agents  
  - **Software Engineering Projects**: student and team projects hosted and tested on this server  
  - **Past Projects**:  
    - **TACTIX**: RAG-based Aircraft Maintenance Support System  
    - **Moisam**: Dormitory Group-Purchase Platform  
  - **VPN (OpenVPN & WireGuard)**: secure remote access for external connectivity to hosted services  

- **Outcomes**:  
  - Enables high-performance **AI model training, data science experiments, and prototype deployment**  
  - Provides a centralized platform for **coursework, hackathons, and research competitions**  
  - Supports **ongoing confidential AI and software projects** under active development  
  - Allows **secure external access** to internal resources through VPN (OpenVPN & WireGuard)  

---

<!-- ===== Core Services ===== -->
## Core Services

### JupyterHub
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/athena-server/jupyterhub.jpg"
       title="JupyterHub environment"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  **JupyterHub** provides a collaborative platform for data analysis and AI training.  
  - Used in the **Sejong Big Data Competition**  
  - Supported multiple projects in the **Spring 2025 Machine Learning course**  
  Students and team members can access GPU resources and shared notebooks seamlessly.
</div>

---

### Docker-based AI Agent Platform
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/athena-server/ai_agent.jpg"
       title="AI Agent platform on Docker"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Node - Athena runs an **AI agent platform** based on Docker containers.  
  This platform supports ongoing AI research and prototyping.  
  Current projects include a **confidential AI agent system** under development.
</div>

---

### Software Engineering Projects
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/athena-server/software_engineering.jpg"
       title="Software engineering projects"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The server hosts multiple **software engineering projects** for coursework and research.  
  It provides a controlled environment for testing, CI/CD pipelines, and collaborative development.
</div>

---

### Past Projects: TACTIX
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/athena-server/tactix.jpg"
       title="TACTIX Project"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  **TACTIX** (RAG-based Aircraft Maintenance Support System) was developed and deployed on Node - Athena.  
  This project focused on integrating retrieval-augmented generation for maintenance workflows.
</div>

---

### Past Projects: Moida
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/athena-server/moida.jpg"
       title="Moida Platform"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  **Moida** (Dormitory Group-Purchase Platform) was another major project built and deployed on Node - Athena.  
  It provided a safe and efficient environment for closed-community group purchasing in university dormitories.
</div>

---

### VPN (OpenVPN & WireGuard)
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/athena-server/vpn.jpg"
       title="VPN remote access"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Node - Athena ensures **secure external connectivity** through both OpenVPN and WireGuard.  
  This enables team members to access JupyterHub, Docker containers, and project resources remotely.
</div>

---

### UPS (Uninterruptible Power Supply)
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/athena-server/ups.jpg"
       title="1000VA UPS (planned)"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A **1000VA UPS** installation is scheduled for October 2025.  
  It will ensure uninterruptible operation, safe shutdown procedures, and overall system protection for Node - Athena.
</div>
