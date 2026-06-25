---
layout: page
title: 홈 서버 인프라 개요
description: 개인 분산 서버 클러스터(Athena, Hades, Daedalus) 전체 구조 개요
img: assets/img/homelab-overview.png
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
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
<img alt="NAS" src="https://img.shields.io/badge/NAS-455A64?style=flat">
</p>

<style>
.home-server-table {
  width: 100%;
  max-width: 100%;
  margin: 1.2rem 0;
  border-collapse: separate !important;
  border-spacing: 0 !important;
}

.home-server-table th,
.home-server-table td {
  text-align: left;
  vertical-align: middle;
  white-space: normal;
  word-break: keep-all;
  overflow-wrap: anywhere;
  line-height: 1.55;
}

.home-server-spaced-table {
  border-spacing: 0 5pt !important;
}

.home-server-overview-image {
  display: block;
  width: 70%;
  max-width: 100%;
  height: auto;
  margin: 1.2rem auto;
}

.post article hr {
  margin-top: calc(1rem + 5pt);
  margin-bottom: calc(1rem + 5pt);
}
</style>

## 개요

**홈랩(Home Lab)**은 Athena, Hades, Daedalus 세 노드로 운영 중인 개인 온프레미스 인프라입니다. 서비스 배포, AI/Local LLM 실험, NAS, FPGA·PCIe 하드웨어 테스트를 진행하기 위해 구성했습니다.

처음에는 Hades 하나에 모든 역할을 올렸지만, 필요한 컴퓨팅 자원이 늘어나면서 **연산 / 저장소 / 하드웨어 테스트**를 물리적으로 분리하는 방식으로 재구성하였습니다. 각 노드는 서로 다른 IP 대역을 쓰고, 노드 간 접근은 WireGuard VPN으로만 연결되도록 설계하였습니다.

<img class="home-server-overview-image" src="{{ '/assets/img/homelab-overview.png' | relative_url }}" alt="Home Lab infrastructure overview">

---

## 노드 구성

| 노드 | 역할 | IP 대역 | 운영체제 | 상세 |
| --- | --- | --- | --- | --- |
| **Athena** | Compute / AI / VM Host | `192.168.200.X` | XCP-ng (Xen) | [상세 보기]({{ '/ko/projects/node-athena/' | relative_url }}) |
| **Hades** | Storage / NAS / Core Service | `192.168.100.X` | VMware ESXi | [상세 보기]({{ '/ko/projects/node-hades/' | relative_url }}) |
| **Daedalus** | Hardware Test / FPGA / PCIe | — | Ubuntu (bare metal) | [상세 보기]({{ '/ko/projects/node-daedalus/' | relative_url }}) |
| **RaspberryPi** *(은퇴)* | 초기 NAS 실험 | — | Raspberry Pi OS | [상세 보기]({{ '/ko/projects/node-raspberrypi/' | relative_url }}) |
{: .home-server-table .home-server-spaced-table}

각 노드의 호스팅 워크로드, 의사결정(기술 선택 등), 운영 장애 사례는 각 노드 페이지에 기술하였습니다.

---

## 역할 분리 이유

이전 웹 프로젝트는 거의 `localhost`에서만 테스트했고, 그래서 외부 사용자가 실제로 접속했을 때 생기는 네트워크·인증·DB·배포 문제를 직접 경험할 기회가 없었습니다. 상용 클라우드로 일부는 경험할 수 있었지만 월 비용이 부담스러웠고, Windows 데스크톱과 MacBook을 같이 쓰는 환경이라 중앙 파일 저장소도 필요했습니다. 또한 FPGA·PCIe 같은 하드웨어 실험은 클라우드 환경에서 사실상 불가능했습니다.

초기에는 Hades 한 대에 NAS·서비스·VPN·실험 환경을 모두 올렸지만 MicroServer 특성상 메모리 확장에 제한이 있어 금방 한계에 부딪쳤습니다. 그래서 Compute를 Athena로 분리하고 Hades는 Storage/Core에 집중시켰으며, 하드웨어 실험은 Daedalus를 따로 두는 현재 구조로 개선하였습니다.

---

## 네트워크 · 보안

**노드별 IP 대역**
- Hades: `192.168.100.X`
- Athena: `192.168.200.X`

**VPN 토폴로지**
- Hades / Athena의 가상머신 하나에 WireGuard를 올려 VPN 엔드포인트로 사용
- Daedalus는 Ubuntu 위에 WireGuard 클라이언트로 두 노드의 내부망에 접근
- `AllowedIPs`로 관리 트래픽만 VPN을 타게 하고, 일반 인터넷 트래픽은 분리

**외부 공개 포트 (최소화)**
- Hades: NAS 서비스 + WireGuard 포트만
- Athena: WireGuard 포트만
- Daedalus: 직접 노출 없음 (VPN 경유만)

**보안 정책**
- SSH는 외부에 직접 노출하지 않음 — VPN 접속 후 내부망에서만 관리
- Root 계정 로그인 차단
- 공개 NAS 서비스에 Fail2ban 적용 (24h 내 비밀번호 오류 5회 → 24h Ban)
- 보안 정책을 구성하게 된 이유는 [Hades 페이지의 Operations & Incidents]({{ '/ko/projects/node-hades/' | relative_url }}#operations--incidents)에 기술하였습니다.

---

## 운영 스냅샷

| 항목 | 현재 상태 |
| --- | --- |
| 현재 운영 노드 수 | 3 (Hades / Athena / Daedalus) |
| NAS 메인 / 백업 용량 | 4 TB Main · 6 TB Backup |
| 백업 방식 / 주기 | `rsync` Main → Backup, 매일 1회 |
| 외부 공개 포트 수 | Hades 2 / Athena 1 / Daedalus 0 |
| 노드 간 통신 | WireGuard VPN 전용 |
{: .home-server-table .home-server-spaced-table}

디스크는 NAS 메인 데이터 저장소로 사용하는 4 TB Main Storage와, `rsync` 백업을 위한 6 TB Backup Storage로 구성되어 있습니다.

> 가동 시작일, 호스팅 중인 VM/컨테이너 수, 최근 백업 결과 등 노드 단위 지표는 각 노드 페이지의 "At a Glance"에서 확인할 수 있습니다.

---

## 기술 선택 요약

| 기술 | 선택 이유 (요약) |
| --- | --- |
| **VMware ESXi** | Hades (HPE MicroServer, 4-core)는 HPE 공식 이미지가 있고 무료 라이선스로 운영 가능 → [Hades · Key Decisions]({{ '/ko/projects/node-hades/' | relative_url }}#key-decisions) |
| **XCP-ng / Xen** | Athena (20-core)는 무료 ESXi 라이선스 범위를 벗어남. Proxmox 검토 후 ESXi와 운영 방식이 가까운 XCP-ng 선택 → [Athena · Key Decisions]({{ '/ko/projects/node-athena/' | relative_url }}#key-decisions) |
| **OpenMediaVault + ext4** | 기존 ext4 디스크를 그대로 살리면서 빠르게 NAS 구성. ZFS 대비 트레이드오프는 Hades 페이지 참조 → [Hades · Key Decisions]({{ '/ko/projects/node-hades/' | relative_url }}#key-decisions) |
| **Docker on VM** | VM으로 프로젝트 단위 격리, Docker로 런타임 의존성 분리. 배포 파이프라인은 Athena 페이지 참조 → [Athena · What Runs Here]({{ '/ko/projects/node-athena/' | relative_url }}#what-runs-here) |
| **WireGuard VPN** | OpenVPN 대비 구성이 단순하고 `AllowedIPs`로 선택 라우팅이 쉬워서 관리망 분리에 적합 |
| **Ubuntu (Daedalus)** | FPGA 벤더 툴(Vivado 등)과 보드 드라이버 호환성이 가장 안정적 → [Daedalus · Key Decisions]({{ '/ko/projects/node-daedalus/' | relative_url }}#key-decisions) |
{: .home-server-table .home-server-spaced-table .home-server-choice-table}

---

## 향후 계획

현재 인프라 관리는 대부분이 수동이며, 일부 자동화로 구성되어 있습니다. 본 페이지에서는 대표 항목만 추려 두고, 나머지는 노드 페이지의 "Limitations & Next Steps"에 기술하였습니다.

- **모니터링/알림 도입** — Prometheus + Grafana로 노드·서비스 상태와 백업 결과를 가시화
- **복구 테스트 자동화** — 백업이 "복구 가능한 백업"인지 주기적으로 검증
- **서버 초기 설정 IaC화** — Ansible 기준으로 노드 재구성 절차를 코드로 고정
- **네트워크 분리 강화** — VLAN / 방화벽 정책으로 NAS·관리·실험 트래픽을 더 명확히 구분

> 노드별 개선 항목(GPU 자원 스케줄링, ZFS 검토, FPGA 환경 고도화 등)은 각 노드 페이지에서 다룹니다.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/Home%20Server%20Overview/' | relative_url }}">Home Server Infrastructure Overview</a>
</p>
