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

<!-- ===== Tech Stack ===== -->
<p>
<img alt="HPE MicroServer" src="https://img.shields.io/badge/HPE%20MicroServer%20Gen10%20Plus-01A982?style=flat&logo=hewlettpackardenterprise&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E--2224G-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="VMware ESXi" src="https://img.shields.io/badge/VMware%20ESXi-607078?style=flat&logo=vmware&logoColor=white">
<img alt="NAS" src="https://img.shields.io/badge/NAS%2010TB-0085CA?style=flat">
<img alt="PhotoPrism" src="https://img.shields.io/badge/PhotoPrism-000000?style=flat">
<img alt="Mattermost" src="https://img.shields.io/badge/Mattermost-0072C6?style=flat&logo=mattermost&logoColor=white">
<img alt="OpenVPN" src="https://img.shields.io/badge/OpenVPN-EA7E20?style=flat&logo=openvpn&logoColor=white">
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
</p>

## Node - Hades: 홈 서버 개요
**Node - Hades** 는 HPE MicroServer Gen10 Plus 위에 구축된 가상화 / 스토리지 / 통신 / 원격접속 백본입니다. 개인 개발 환경, 미디어 아카이브, 협업 플랫폼의 기반이 됩니다.

- **하드웨어**:
  - HPE MicroServer Gen10 Plus
  - CPU: Intel Xeon E-2224G
  - RAM: 32 GB
  - Storage: 1 TB NVMe SSD (시스템 / VM 데이터스토어), 10 TB HDD (NAS)
  - UPS: 950VA — **무중단 운영** 및 시스템 보호

- **가상화**:
  - VMware ESXi Hypervisor
  - 다수의 경량 VM이 테스트 / 서비스 배포에 사용

- **핵심 서비스**:
  - **프로그래밍 테스트베드** — 소규모 코드 실험 / 검증 환경
  - **NAS** — 문서 / 미디어 / 백업 중앙 저장소
  - **PhotoPrism** — 개인 사진 관리·검색
  - **Mattermost** — 비공개 팀 협업 / 커뮤니케이션
  - **VPN (OpenVPN & WireGuard)** — 안전한 원격 접근

- **성과**:
  - 개발 / 데이터 / 협업이 모두 가능한 안정적 환경
  - UPS 기반 **무중단 가용성**
  - **원격 접근 + 중앙 서비스 호스팅** 으로 개인 / 팀 프로젝트 모두 지원

> 자세한 영문 원본: [English version](/projects/node---hades/)
