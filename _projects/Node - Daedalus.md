---
layout: page
title: Node - Daedalus
description: Node - Daedalus, dedicated to FPGA system testing
img: assets/img/samsung_desktop.jpg
importance: 5
category: "Infrastructure & DevOps"
lang: en
ref: node-daedalus
---

<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="Intel Core i5" src="https://img.shields.io/badge/Intel%20Core%20i5--4670-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Xilinx ZYNQ-7000" src="https://img.shields.io/badge/Xilinx%20ZYNQ--7000-FFCC00?style=flat">
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Xilinx%20Vivado-EE0000?style=flat">
</p>

## Overview

Node - Daedalus is a lightweight hardware test node in my home-lab infrastructure. Its role is to keep FPGA and embedded experiments separate from storage and AI workloads.

- **Hardware:** custom PC, Intel Core i5-4670, 8 GB RAM, 2 TB HDD
- **Core stack:** Linux, Vivado, Verilog HDL, Xilinx ZYNQ-7000 board support
- **Role:** FPGA and embedded-system test environment

---

## Problem & Motivation

FPGA experiments often require board drivers, vendor tools, and hardware-specific settings. Mixing those dependencies into a general-purpose compute server can make the environment harder to maintain.

Daedalus was created as a dedicated node for hardware work so that FPGA setup, test files, and toolchain configuration would not interfere with backend or AI workloads.

---

## My Role

I configured Daedalus as a practical testbed for FPGA-related coursework and experiments.

- Prepared the machine for FPGA development workflows.
- Used it for Xilinx ZYNQ-7000 board testing.
- Organized the node as part of the broader home-lab architecture.

---

## Technical Approach

The design choice was separation, not performance. FPGA development needs predictable toolchain behavior and physical board access more than high server throughput.

Daedalus therefore acts as a focused environment for:

- Verilog HDL experiments,
- Vivado-based synthesis and validation,
- board-level testing,
- hardware/software co-design practice.

---

## Unexpected Issues

- FPGA tools can be sensitive to OS versions, drivers, and local environment setup.
- Hardware testing benefits from a stable dedicated workstation rather than a frequently changing shared server.
- Documentation matters because board setup steps are easy to forget after the course or experiment ends.

---

## Results & Impact

- Added a hardware-focused node to the home-lab cluster.
- Created a separate workspace for FPGA and embedded experiments.
- Supported practical learning around Verilog, Vivado, and ZYNQ-based testing.

---

## Lessons Learned

Daedalus reinforced the value of environment isolation. Even a modest machine can be valuable when it has a clear job and keeps hardware-specific dependencies away from other workloads.
