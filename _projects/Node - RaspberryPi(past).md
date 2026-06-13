---
layout: page
title: Node - RaspberryPi
description: Node - RaspberryPi, a past server project built with Raspberry Pi boards.
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

## Overview

Node - RaspberryPi was my first home-server experiment. It started as a low-power NAS built with Raspberry Pi boards and later became the starting point for the larger home-lab cluster.

- **Hardware:** Raspberry Pi 3 B+ and Raspberry Pi 4 (8 GB)
- **Storage:** 4 TB external HDD
- **Core stack:** Linux, OpenMediaVault, SMB/NFS-style file sharing
- **Status:** retired after migration to larger server nodes

---

## Problem & Motivation

I wanted to learn whether a small, low-power device could provide useful local storage and file-sharing services. The goal was simple: build a NAS-like environment before investing in larger server hardware.

---

## My Role

This was an individual learning project.

- Installed and configured OpenMediaVault.
- Connected external storage and tested local file sharing.
- Compared Raspberry Pi 3 B+ and Raspberry Pi 4 behavior under NAS workloads.
- Used the experience to plan the later Hades storage node.

---

## Technical Approach

OpenMediaVault was selected because it provided a practical NAS interface on top of Linux. Raspberry Pi boards were useful because they were inexpensive, low-power, and easy to rebuild during experiments.

The project helped me understand:

- storage mount configuration,
- network file sharing,
- user and permission management,
- limitations of USB-attached storage and small-board hardware.

---

## Unexpected Issues

- Performance was limited by board I/O and external drive behavior.
- Long-term reliability required more attention than expected.
- A small NAS is easy to start, but harder to treat as dependable infrastructure.

---

## Results & Impact

- Built and operated a working lightweight NAS environment.
- Learned the basics of Linux-based storage administration.
- Identified why a more reliable server-grade storage node was needed.
- Migrated the role to Hades as the home lab matured.

---

## Lessons Learned

This project was valuable because it exposed infrastructure basics early: storage is not only capacity, but also reliability, permissions, access patterns, and recovery planning.
