---
layout: page
title: 홈 서버 인프라 개요
description: 개인 분산 서버 클러스터(Athena, Hades, Daedalus) 전체 구조 개요
img: assets/img/home_server_overview.jpg
importance: 0
category: "Infrastructure & DevOps"
lang: ko
ref: home-server-overview
permalink: /ko/projects/home-server-overview/
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

## 홈 서버 인프라 개요

본 페이지는 제가 운영 중인 **분산형 홈 서버 인프라**의 전체 그림을 정리한 것입니다.  
세 개의 노드 — [**Node - Athena**](/ko/projects/node-athena/), [**Node - Hades**](/ko/projects/node-hades/), [**Node - Daedalus**](/ko/projects/node-daedalus/) — 가 서로 연결되어 **AI 연구, 소프트웨어 개발, 하드웨어 프로토타이핑**을 동시에 지원하는 미니 온프레미스 데이터센터를 구성합니다.

---

### 🧠 [Node - Athena](/ko/projects/node-athena/) — 컴퓨팅 & AI 연구
- **역할**: AI 학습, 데이터 사이언스, R&D를 위한 고성능 컴퓨트 노드
- **핵심**:
  - Dual Xeon · Dual Tesla P100 GPU
  - Xen 기반 가상화로 워크로드 격리
  - JupyterHub, Docker 기반 AI 에이전트 플랫폼, 학부 프로젝트 호스팅
- **연계**: VPN을 통한 외부 접속, Hades NAS와 데이터 동기화

---

### 🗄️ [Node - Hades](/ko/projects/node-hades/) — 스토리지 & 가상화 허브
- **역할**: 스토리지, 협업, 가상화 게이트웨이
- **핵심**:
  - VMware ESXi 위에 다수의 경량 VM 운영
  - **NAS 10TB**, PhotoPrism, Mattermost 호스팅
  - **OpenVPN / WireGuard** 게이트웨이
- **연계**: Athena와의 백업·코드 동기화, 개인 클라우드 서비스 호스팅

---

### ⚙️ [Node - Daedalus](/ko/projects/node-daedalus/) — FPGA 테스트
- **역할**: FPGA 및 임베디드 실험 전용
- **핵심**:
  - Xilinx ZYNQ-7000 하드웨어/소프트웨어 협업 검증
  - AXI 인터페이스, 펌웨어 테스트
- **연계**: 테스트 로그·파일을 Hades NAS로 동기화

---

### 🔗 상호 연결 & 아키텍처
<div class="row justify-content-sm-center">
  <div class="col-sm-9 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/home_server_architecture.jpg"
       title="Home server cluster architecture"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  세 노드는 고속 로컬 네트워크로 묶여 **분산형 클러스터**처럼 동작합니다.  
  - **Athena** — AI 워크로드  
  - **Hades** — 스토리지 / 가상화 / VPN 게이트웨이  
  - **Daedalus** — FPGA · 임베디드 실험  
  AI · 소프트웨어 · 하드웨어 영역을 한 환경에서 잇는 하이브리드 셋업입니다.
</div>

---

### 🌐 활용 & 성과
- **AI 모델 개발, FPGA 프로토타이핑, DevOps 실험**을 사적 환경에서 수행
- 학부 프로젝트 / 대회 / 개인 R&D를 위한 **온프레미스 연구·교육 플랫폼**
- 가상화 + UPS 기반의 **이중화 / 모듈화 / 보안성** 확보
- 진행 중 프로젝트: RAG 기반 AI 시스템, IoT 펌웨어 통합, 협업 SW 플랫폼

---

_📦 [Node - Athena](/ko/projects/node-athena/) · [Node - Hades](/ko/projects/node-hades/) · [Node - Daedalus](/ko/projects/node-daedalus/) 세 노드는 개인 연구 환경 안에서 AI · DevOps · 임베디드의 융합을 보여주는 사례입니다._
