---
layout: page
title: Node - Athena
description: Personal home server (Node - Athena) built on a Lenovo System X3650 server
img: assets/img/lenovo_x3650_2gpu.jpg
importance: 2
category: "Infrastructure & DevOps"
lang: en
ref: node-athena
---

<p>
<img alt="Lenovo X3650" src="https://img.shields.io/badge/Lenovo%20System%20X3650-E2231A?style=flat&logo=lenovo&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E5--2630%20v4-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Tesla P100" src="https://img.shields.io/badge/NVIDIA%20Tesla%20P100-76B900?style=flat&logo=nvidia&logoColor=white">
<img alt="Xen" src="https://img.shields.io/badge/Xen%20Hypervisor-EE0000?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="JupyterHub" src="https://img.shields.io/badge/JupyterHub-F37626?style=flat&logo=jupyter&logoColor=white">
</p>

## Overview

Node - Athena is the compute-focused node in my home-lab infrastructure. It is used for AI experiments, data-analysis workloads, backend prototypes, and course or competition projects that need more resources than a laptop can comfortably provide.

- **Hardware:** Lenovo System X3650, dual Intel Xeon E5-2630 v4, 80 GB RAM, 2 x NVIDIA Tesla P100 GPUs
- **Core stack:** Xen, Linux, Docker, JupyterHub
- **Role:** compute and experimentation node

---

## Problem & Motivation

AI and data projects often need persistent compute resources, shared notebooks, GPU access, and repeatable environments. Running everything on a personal laptop made it hard to separate experiments from daily work.

Athena was built to solve this by providing a dedicated compute node for:

- GPU-backed model experiments,
- JupyterHub-based data analysis,
- containerized backend prototypes,
- team or course projects that need a controlled server environment.

---

## My Role

I configured and operated Athena as part of my personal infrastructure.

- Installed and managed the virtualization environment.
- Prepared Linux-based server environments for AI and backend workloads.
- Deployed JupyterHub and Docker-based project environments.
- Used the node as a backend and AI experimentation platform for projects such as TACTIX and Moisam.

---

## Technical Approach

### Why a Dedicated Compute Node

Separating compute from storage and gateway functions made the cluster easier to reason about. Athena could focus on CPU/GPU workloads, while Hades handled storage and remote-access services.

### Why JupyterHub

JupyterHub was useful because several data or ML workflows required notebook-based exploration. It also made it possible to use the server remotely without manually copying notebooks between machines.

### Why Docker

Docker helped isolate project environments and avoid dependency conflicts between AI experiments, backend prototypes, and coursework.

---

## Implementation & Problem Solving

The main implementation goal was to make Athena reusable. Instead of configuring one-off environments for each project, I focused on creating a server that could host multiple workloads with different dependencies.

This required careful separation between:

- base system configuration,
- VM or container environments,
- GPU-dependent workloads,
- project data synchronized with storage nodes.

---

## Unexpected Issues

- **Resource planning:** GPU and memory are valuable, but they must be allocated carefully when multiple experiments run.
- **Thermal and power concerns:** Enterprise hardware is powerful but requires attention to noise, power draw, and stable operation.
- **Environment drift:** Long-running experimentation servers need cleanup rules, otherwise old dependencies and containers accumulate.

---

## Results & Impact

- Created a reusable compute backbone for AI, data, and backend projects.
- Supported JupyterHub-based analysis and GPU-backed experimentation.
- Provided a practical environment for learning deployment and server operation.
- Helped connect project development with real infrastructure constraints.

---

## Lessons Learned

Athena taught me that raw compute is only part of the problem. To make a server useful, I also needed repeatable environments, clear workload boundaries, and operational discipline.
