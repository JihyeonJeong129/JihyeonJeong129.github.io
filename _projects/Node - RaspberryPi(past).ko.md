---
layout: page
title: Node - RaspberryPi
description: Raspberry Pi 보드로 구성했던 과거 NAS 서버 프로젝트
img: assets/img/raspberrypi.jpg
importance: 7
category: "Infrastructure & DevOps"
lang: ko
ref: node-raspberrypi
permalink: /ko/projects/node-raspberrypi/
---

<!-- ===== Tech Stack ===== -->
<p>
<img alt="Raspberry Pi" src="https://img.shields.io/badge/Raspberry%20Pi%203B%2B%20%2F%204-A22846?style=flat&logo=raspberrypi&logoColor=white">
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="Samba" src="https://img.shields.io/badge/Samba%20%2F%20NFS-CB2027?style=flat">
<img alt="NAS" src="https://img.shields.io/badge/NAS%204TB-0085CA?style=flat">
</p>

## Node - RaspberryPi: 과거 NAS 서버 개요
이미 운영을 종료한 **레거시 NAS 서버** 프로젝트입니다. 경량 NAS 구축을 처음 실험해본 단계로, 이후 정식 NAS는 [Hades](/ko/projects/node-hades/) 로 이전되었습니다.

- **하드웨어**:
  - 1차: Raspberry Pi 3 B+
  - 2차: Raspberry Pi 4 (8 GB)
  - Storage: 4 TB 외장 HDD (NAS 메인 스토리지)

- **목적**:
  - **저전력 NAS** 시스템 구축 실험
  - 가족 / 개인 파일 백업, 미디어 스트리밍

- **회고**:
  - 단일 보드의 성능 / I/O 한계로 동시 사용자 환경에서 부족함을 체감
  - 이후 정식 서버 등급(HPE MicroServer)으로 마이그레이션
  - 전력·소음·운영 비용 측면에서 **언제 라즈베리파이를 쓰고 언제 진짜 서버로 가야 하는지** 의 기준을 갖게 한 프로젝트

> 자세한 영문 원본: [English version](/projects/node---raspberrypi/)
