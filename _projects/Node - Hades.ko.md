---
layout: page
title: Node - Hades
description: HPE MicroServer Gen10 Plus 기반 개인 홈 서버 (스토리지 · 가상화 허브)
img: assets/img/hpe_microserver_gen10plus.jpg
importance: 1
category: "Infrastructure & DevOps"
lang: ko
ref: node-hades
permalink: /ko/projects/node-hades/
---

<p>
<img alt="HPE MicroServer" src="https://img.shields.io/badge/HPE%20MicroServer%20Gen10%20Plus-01A982?style=flat&logo=hewlettpackardenterprise&logoColor=white">
<img alt="VMware ESXi" src="https://img.shields.io/badge/VMware%20ESXi-607078?style=flat&logo=vmware&logoColor=white">
<img alt="NAS" src="https://img.shields.io/badge/NAS%2010TB-0085CA?style=flat">
<img alt="VPN" src="https://img.shields.io/badge/VPN-455A64?style=flat">
</p>

## 개요

Node - Hades는 홈랩의 저장소 및 내부 서비스 허브입니다. 프로젝트 데이터, NAS, 내부 서비스, 원격 접속 기능을 담당합니다.

- **역할:** Storage / Virtualization / Remote Access
- **하드웨어:** HPE MicroServer Gen10 Plus, 10 TB 저장소
- **기술:** VMware ESXi, NAS, OpenVPN, WireGuard

---

## 문제와 목표

연산 서버와 저장소 역할을 한 장비에 섞으면 실험과 데이터 관리가 함께 불안정해질 수 있습니다. Hades는 지속적으로 유지되어야 하는 데이터와 내부 서비스를 담당하기 위해 분리했습니다.

---

## 내 역할

- ESXi 기반 가상화 환경을 구성했습니다.
- NAS와 내부 서비스 운영 방향을 설계했습니다.
- VPN을 통해 외부에서 내부 서비스에 접근할 수 있게 구성했습니다.

---

## 접근과 이슈

직접 공개보다 VPN 접근을 우선해 서비스 노출면을 줄였습니다. 예상보다 중요한 부분은 저장소 구조, 백업 방향, 유지보수 시 다른 노드에 미치는 영향을 관리하는 일이었습니다.

---

## 결과

- 홈랩의 안정적인 저장소와 서비스 허브를 구축했습니다.
- 연산 실험과 데이터 보관을 분리하면서 인프라 운영 안정성을 높였습니다.
