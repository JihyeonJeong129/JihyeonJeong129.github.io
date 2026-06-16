---
layout: page
title: Node - RaspberryPi (운영종료)
description: Raspberry Pi 기반 초기 NAS 실험용도. Hades Node 도입과 함께 운영종료.
img: assets/img/raspberrypi.jpg
importance: 7
category: "Infrastructure & DevOps"
lang: ko
ref: node-raspberrypi
permalink: /ko/projects/node-raspberrypi/
---

<p>
<img alt="Raspberry Pi" src="https://img.shields.io/badge/Raspberry%20Pi%203B%2B%20%2F%204-A22846?style=flat&logo=raspberrypi&logoColor=white">
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="OpenMediaVault" src="https://img.shields.io/badge/OpenMediaVault-5DACDF?style=flat">
<img alt="NAS" src="https://img.shields.io/badge/NAS%204TB-0085CA?style=flat">
</p>

<style>
.home-server-table {
  width: auto;
  max-width: 100%;
  margin: 1.2rem auto;
  border-collapse: separate !important;
  border-spacing: 0 !important;
}

.home-server-table th,
.home-server-table td {
  text-align: center;
  vertical-align: middle;
}

.home-server-spaced-table {
  border-spacing: 0 5pt !important;
}

.post article hr {
  margin-top: calc(1rem + 5pt);
  margin-bottom: calc(1rem + 5pt);
}
</style>

> 홈랩 전체 구조는 [홈 서버 인프라 개요]({{ '/ko/projects/home-server-overview/' | relative_url }})를 참조하세요. 현재 NAS 역할은 [Node - Hades]({{ '/ko/projects/node-hades/' | relative_url }})가 담당합니다.

## At a Glance

| 항목 | 값 |
| --- | --- |
| 역할 (당시) | 초기 NAS / 저전력 파일 서버 |
| 하드웨어 | Raspberry Pi 3 B+ → Raspberry Pi 4 (8 GB) |
| 스토리지 | USB 외장 Docking Station + HDD 4 TB |
| OS / 소프트웨어 | Raspberry Pi OS, OpenMediaVault, SMB/NFS |
| 운영 시기 | 홈랩 1세대 (Hades 도입 이전) |
| 현재 상태 | **은퇴 — 역할은 Hades로 이전** |
{: .home-server-table .home-server-spaced-table}

한 줄 요약: **NAS를 직접 운영해 보면서 어떤 용도로 쓸 수 있을지를 가장 저렴한 장비로 검증해 본 1세대 노드입니다.**

---

## What I Tried

저전력·저비용 보드로 *쓸 만한 NAS*가 가능한지 확인하는 것이 1차 목표였습니다.

- **OpenMediaVault 설치** — Raspberry Pi OS 위에 OMV를 올리고 SMB/NFS 공유를 구성했습니다.
- **USB 외장 HDD 마운트** — 4 TB HDD를 USB로 연결하고, OMV에서 공유 디렉토리를 매핑했습니다.
- **권한/사용자 분리** — Windows·MacBook에서 동시에 쓰는 환경을 가정해 계정·권한 모델을 정리했습니다.
- **두 보드 비교** — 초기에는 Raspberry Pi 3 B+로 운영하다가 Raspberry Pi 4(8 GB)로 보드를 업그레이드하며 I/O 특성과 네트워크 속도를 비교했습니다. Pi 3 B+는 USB 2.0 / 100 Mbps 이더넷이었지만 Pi 4는 USB 3.0 / 1 Gbps 이더넷을 가지고 있어 HDD가 지원하는 최대 속도로 데이터 전송이 가능했습니다.

---

## What Broke / What I Learned

작동은 처음부터 했지만, *24/365 작동* 시키기에는 한계가 명확했습니다.

- **USB-attached storage의 I/O 한계.** 대용량 파일 전송에서 처리량이 일관되지 않고, USB 컨트롤러 쪽에서 일시적인 disconnect가 가끔 발생.
- **장기 안정성.** 보드 자체보다 USB·전원·외장 HDD 조합에서 잔고장이 누적. *"잘 돌고 있다"가 일주일을 넘으면 다음 주에 한 번은 흔들리는* 패턴.
- **백업 부재.** 백업 경로 없이 단일 디스크에 의존 → 디스크 한 번에 모든 데이터가 사라질 수 있는 구조.

핵심 교훈: **네트워크 저장소는 용량도 중요하지만 신뢰성 / 복구 계획이 더 중요하다**는 것을 직접 체감했으며, 이는 다음 노드(Hades) 설계의 기반이 되었습니다.

---

## Why It Was Retired

같은 NAS 역할을 *항상 켜 둘 만한* 장비에서 운영하기로 결정했습니다.

- **연중 가동 워크로드를 USB 외장 HDD에 의존하는 게 위험**하다고 판단 — 정식 SATA 베이를 가진 장비가 필요
- **VPN·내부 서비스 등 다른 워크로드도 같이 올릴 수 있는 노드**가 필요해짐 → 가상화가 되는 장비 필요
- **VMware ESXi의 무료 라이선스 범위 + HPE 공식 이미지 + 4베이 핫스왑**이 함께 지원되는 [HPE MicroServer Gen10 Plus → Hades]({{ '/ko/projects/node-hades/' | relative_url }})로 역할 이전

전환 시점에 데이터는 USB 외장 HDD → 새 4 TB 내장 HDD(ext4)로 이전했고, 이때 *ext4 디스크를 그대로 살리는 마이그레이션 전략*을 사용하였습니다.

---

## What Carried Over

1세대 라즈베리파이 노드는 은퇴했지만, 아래 내용은 여전히 현재 홈랩에 그대로 남아 있습니다.

- **OpenMediaVault 운영 모델** — Hades에서도 같은 OMV를 VM 위에 올려 사용. 권한·공유 구조 설계 경험이 그대로 재사용됨.
- **"단일 디스크 = 백업 없음"** — Hades에서 Main(4 TB) + Backup(6 TB) + 일일 `rsync` 구조를 만든 직접적인 동기. 자세한 백업 정책과 그 한계는 [Hades · Operations & Incidents]({{ '/ko/projects/node-hades/' | relative_url }}#operations--incidents)에서 다룹니다.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/Node%20-%20RaspberryPi%28past%29/' | relative_url }}">Node - RaspberryPi</a>
</p>
