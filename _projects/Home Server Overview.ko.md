---
layout: page
title: 홈 서버 인프라 개요
description: 개인 분산 서버 클러스터(Athena, Hades, Daedalus) 전체 구조 개요
img: assets/img/main_pic.jpg
importance: 0
category: "Infrastructure & DevOps"
lang: ko
ref: home-server-overview
permalink: /ko/projects/home-server-overview/
---

<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="VMware ESXi" src="https://img.shields.io/badge/VMware%20ESXi-607078?style=flat&logo=vmware&logoColor=white">
<img alt="Xen" src="https://img.shields.io/badge/Xen%20Hypervisor-EE0000?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="VPN" src="https://img.shields.io/badge/VPN-455A64?style=flat">
</p>

## 개요

개인 홈랩은 Athena, Hades, Daedalus 세 노드로 구성한 온프레미스 실험 환경입니다. 백엔드 배포, AI 실험, 저장소 운영, FPGA 테스트를 하나의 인프라 안에서 다뤄보기 위해 구축했습니다.

- **분야:** Infrastructure & DevOps
- **구성:** Compute, Storage, Hardware Test 노드 분리
- **기술:** Linux, Xen, VMware ESXi, Docker, VPN, NAS

---

## 문제와 목표

로컬 데모만으로는 실제 서비스 운영 경험을 얻기 어렵습니다. 프로젝트를 배포하고, 원격 접속하고, 데이터를 저장하고, 장애 가능성을 고려하는 환경이 필요했습니다.

---

## 내 역할

- 세 노드의 역할을 나누고 인프라 구조를 설계했습니다.
- 하이퍼바이저, Linux 서버, VPN, 내부 서비스를 직접 구성했습니다.
- 프로젝트별 실험 환경과 저장소 역할을 분리해 운영했습니다.

---

## 접근과 이슈

Athena는 연산, Hades는 저장소와 서비스, Daedalus는 하드웨어 테스트로 역할을 나누었습니다. 예상보다 어려웠던 점은 장비를 늘리는 것보다 각 노드의 책임을 명확히 유지하는 일이었습니다.

---

## 결과

- 여러 프로젝트를 배포하고 실험할 수 있는 개인 인프라 기반을 만들었습니다.
- 가상화, VPN, 저장소, 서비스 운영을 직접 다루며 DevOps 감각을 키웠습니다.
- 단순 장비 구축이 아니라 운영 습관과 구조 설계의 중요성을 배웠습니다.

---

<p class="text-muted small mt-4">
  더 자세한 내용은 <a href="{{ '/projects/Home%20Server%20Overview/' | relative_url }}">영어 원본 보기</a>에서 확인할 수 있습니다.
</p>
