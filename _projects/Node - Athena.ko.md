---
layout: page
title: Node - Athena
description: Lenovo System X3650 기반 개인 홈 서버 (AI / 데이터 사이언스 노드)
img: assets/img/lenovo_x3650_2gpu.jpg
importance: 2
category: "Infrastructure & DevOps"
lang: ko
ref: node-athena
permalink: /ko/projects/node-athena/
---

<!-- ===== Tech Stack ===== -->
<p>
<img alt="Lenovo X3650" src="https://img.shields.io/badge/Lenovo%20System%20X3650-E2231A?style=flat&logo=lenovo&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E5--2630%20v4-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Tesla P100" src="https://img.shields.io/badge/NVIDIA%20Tesla%20P100-76B900?style=flat&logo=nvidia&logoColor=white">
<img alt="Xen" src="https://img.shields.io/badge/Xen%20Hypervisor-EE0000?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="JupyterHub" src="https://img.shields.io/badge/JupyterHub-F37626?style=flat&logo=jupyter&logoColor=white">
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="OpenVPN" src="https://img.shields.io/badge/OpenVPN-EA7E20?style=flat&logo=openvpn&logoColor=white">
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
</p>

## Node - Athena: AI · 데이터 사이언스 서버 개요
**Node - Athena** 는 Lenovo System X3650 서버 기반의 **AI 연구 / 데이터 분석 / 협업 SW 프로젝트**용 메인 컴퓨트 노드입니다.

- **하드웨어**:
  - Lenovo System X3650
  - CPU: Dual Intel Xeon E5-2630 v4 (각 10C/20T → 총 **20C/40T**)
  - RAM: 80 GB (2025년 10월 **272 GB 업그레이드 예정**)
  - Storage: 1 TB NVMe SSD
  - GPU: 2 × NVIDIA Tesla P100 (16 GB VRAM)
  - Network: Intel 10Gb Ethernet NIC
  - UPS: 2025년 10월 1000VA UPS 도입 예정 → 무중단 운영 강화

- **가상화**:
  - **Xen Hypervisor**
  - AI 워크로드, Docker 서비스, 학부 SW 프로젝트별 VM 분리

- **핵심 서비스**:
  - **JupyterHub** — 협업형 데이터 분석 / AI 학습 환경
    - **세종 빅데이터 경진대회** 활용
    - **2025-1 머신러닝 수업** 다수 프로젝트 지원
  - **Docker 기반 AI 에이전트 플랫폼** — 진행 중인 AI 에이전트 R&D
  - **학부 SW 프로젝트** 호스팅 / 테스트 환경
  - **과거 프로젝트**:
    - **TACTIX** — RAG 기반 항공기 정비 지원 시스템
    - **Moisam** — 기숙사 공동구매 플랫폼
  - **VPN (OpenVPN & WireGuard)** — 외부에서의 안전한 원격 접근

- **성과**:
  - **AI 모델 학습 · 데이터 실험 · 프로토타입 배포**까지 한 환경에서 처리
  - 수업 / 해커톤 / 연구 대회의 공용 컴퓨팅 백본 역할
  - 비공개 AI / SW 프로젝트의 지속적 개발 환경 제공
  - VPN 기반의 **안전한 외부 접근**

> 자세한 영문 원본: [English version](/projects/node---athena/)
