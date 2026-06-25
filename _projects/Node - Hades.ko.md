---
layout: page
title: Node - Hades
description: HPE MicroServer Gen10 Plus 기반 Storage / NAS / Core Service 노드
img: assets/img/hpe_microserver_gen10plus.jpg
importance: 1
category: "Infrastructure & DevOps"
lang: ko
ref: node-hades
permalink: /ko/projects/node-hades/
---

<p>
<img alt="HPE MicroServer" src="https://img.shields.io/badge/HPE%20MicroServer%20Gen10%20Plus-01A982?style=flat&logo=hewlettpackardenterprise&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E--2224G-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="VMware ESXi" src="https://img.shields.io/badge/VMware%20ESXi-607078?style=flat&logo=vmware&logoColor=white">
<img alt="OpenMediaVault" src="https://img.shields.io/badge/OpenMediaVault-5DACDF?style=flat">
<img alt="NAS" src="https://img.shields.io/badge/NAS%204TB%20%2B%206TB%20Backup-0085CA?style=flat">
<img alt="WireGuard" src="https://img.shields.io/badge/WireGuard-88171A?style=flat&logo=wireguard&logoColor=white">
<img alt="APC UPS" src="https://img.shields.io/badge/APC%20UPS%20BX950MI--GR-FF6600?style=flat">
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

.post article hr {
  margin-top: calc(1rem + 5pt);
  margin-bottom: calc(1rem + 5pt);
}

.home-server-overview-image {
  display: block;
  width: 70%;
  max-width: 100%;
  height: auto;
  margin: 1.2rem auto;
}


</style>

> 홈랩 전체 구조는 [홈 서버 인프라 개요]({{ '/ko/projects/home-server-overview/' | relative_url }})를 참조하세요.

## At a Glance

| 항목 | 값 |
| --- | --- |
| 역할 | Storage / NAS / Core Service / VPN 게이트웨이 |
| 하드웨어 | HPE MicroServer Gen10 Plus, Intel Xeon E-2224G (4 Core), 32 GB RAM |
| 스토리지 | 로컬 VM 디스크(NVME 1TB) + 4 TB Main (NAS 데이터, 가용) + 6 TB Backup |
| 파일시스템 | ext4 |
| OS / 하이퍼바이저 | VMware ESXi |
| 네트워크(IP) 대역  | `192.168.100.X` |
| 외부 공개 포트 | WireGuard(1) + NAS 서비스용(1) |
| 전원 보호 | APC UPS BX950MI-GR (950 VA) — 최대 소비 180 W 기준 10분 이상 버팀, NAS VM이 단전 감지·전파 담당 |
| 운영 시작 | 2023년 (홈랩의 2세대 노드) |
| 현재 상태 | 운영 중 (Storage 허브) |
{: .home-server-table .home-server-spaced-table}

한 줄 요약: **Hades는 클러스터의 데이터, VPN, 핵심 서비스가 모이는 항상 켜져 있는 노드입니다.**

---

## What Runs Here

**호스팅 중인 VM**

| VM | 역할 | 시스템 리소스 |
| --- | --- | --- |
| OpenMediaVault VM | NAS 메인. SMB/NFS 공유, 사용자/권한 관리, rsync 백업 잡, **UPS USB 연결 엔드포인트** | vCPU 2, RAM 4 GB |
| WireGuard VM | 외부 → 홈랩 진입점. 관리 트래픽을 받아 내부 VPN으로 분배 | vCPU 1, RAM 2 GB |
| Core Service VM | 항상 켜져 있어야 하는 내부 서비스 (협업 도구 등) | vCPU 3, RAM 12 GB |
| Couch DB | Obsidian self hosted sync 서비스 운영 | vCPU 2, RAM 2 GB |
{: .home-server-table .home-server-spaced-table}

**디스크 레이아웃**

<img class="home-server-overview-image" src="{{ '/assets/img/Hades - storage.png' | relative_url }}" alt="Hades Node Stroage overview">

**NAS 공유 분류 (정책)**

- **장기 보존 대상** — 프로젝트 산출물, 사진/문서, 학습 데이터 일부 → 일일 백업 포함
- **(재생성 가능한) 임시 데이터** — 컨테이너 내부 데이터, 임시 산출물 → 백업 대상 제외
- **환경설정 데이터** — Docker Compose, 서비스 설정 파일 → 별도 Git 저장소로 동기화

서비스 설정/Compose 파일을 NAS가 아니라 Git에 두는 이유는, NAS 자체가 죽었을 때는 서비스 복구가 불가능하므로 이를 대비하기 위함.

---

## Key Decisions

#### - 왜 VMware ESXi인가
Hades는 4 Core CPU 환경이고, ESXi 무료 라이선스의 vCPU 제한 안에 들어옵니다. 거기에 HPE MicroServer Gen10 Plus는 HPE가 공식 ESXi 이미지를 제공해 펌웨어/드라이버 호환성을 잡기 쉬웠습니다. 안정성과 호환성, 라이선스 비용 0을 한 번에 만족하는 선택이었기 때문에 ESXi를 골랐습니다.

- **트레이드오프:** ESXi 무료 라이선스는 API 사용·자동화에 제약이 있어 IaC 친화도는 떨어집니다. Hades는 *콘솔 조작 빈도가 낮고 항상 떠 있어야 하는* 노드라 해당 단점을 감안하였습니다.

#### - 왜 ext4인가 (ZFS / btrfs가 아니라)
구축 시점에 이전 시스템에서 쓰던 ext4 디스크를 그대로 사용하는 방법이 가장 빠른 길이었습니다. 당시에 이전 시스템에서 저장한 데이터가 1.5TB 정도 되었는데 해당 데이터를 백업할 별도의 하드디스크가 없었으며, 따라서 *마이그레이션 비용 0*을 우선했습니다.

- **포기한 것:** ZFS의 스냅샷, 체크섬, scrub 같은 무결성 보호 기능
- **보완책:** 일일 rsync로 백업 본을 따로 유지하고, 중요 데이터는 외부 클라우드 저장소에 한 번 더 백업 진행
- **다음 단계:** 디스크 교체 시점에 맞춰 ZFS 도입을 검토 중. 현재 ext4 구조는 *데이터 무결성 보호(체크섬)이 없다*는 한계를 명시적으로 인정하고 운영 중입니다.

#### - 왜 NAS와 Core Service를 같은 노드에 두었는가
원칙적으로 분리하는 게 안전하지만, *항상 켜져 있어야 한다*는 요구사항이 둘 다 동일하고, 둘 다 부하가 가볍기 때문에 한 노드에서 VM으로만 격리해도 충분하다고 판단했습니다. 대신 Core Service VM이 죽어도 NAS VM이 영향받지 않도록 자원 한도와 디스크를 분리해 두었습니다.

---

## Operations & Incidents

**평상시 운영**
- 일일 `rsync` 백업 Job (Main → Backup) 실행 후 결과 로그 확인
- VM 단위 ESXi 스냅샷을 큰 변경 전후로 수동 생성
- 외부 공개 포트 = WireGuard 1 + NAS 서비스용 최소 포트
- UPS(APC BX950MI-GR) 상태는 NAS VM에서 모니터링하며, 단전 감지 시 다른 노드(Athena / Daedalus)에 알림을 전파

**전원 보호 (UPS) 구성**

- **장비:** APC UPS BX950MI-GR, 출력 용량 **950 VA**
- **부하 기준:** HPE MicroServer Gen10 Plus의 최대 소비 전력 **180 W**
- **보호 시간:** 180 W 기준 **10분 이상** 버틸 수 있도록 구성 → 단전 감지 시 *NAS / Core Service VM을 안전하게 종료*할 수 있는 윈도우 확보
- **단전 감지·전파:** UPS는 ESXi의 USB 패스스루 설정으로 **NAS(OpenMediaVault) VM에 직결**. NAS VM이 UPS 상태(외부 전력 차단 / 배터리 잔량)를 읽어 단전이 감지되면 Athena·Daedalus 등 다른 노드에 전파 → 클러스터가 같은 신호로 안전 종료 절차로 진입
- **도입 계기:** Athena 노드 장애 시(지역 단전 → 강제 셧다운 → NVIDIA 커널 모듈 손상) 경험을 토대로, *Hades도 동일한 위험에 노출되어 있다*는 판단으로 UPS 도입. 자세한 경위는 [Athena · Operations & Incidents]({{ '/ko/projects/node-athena/' | relative_url }}#operations--incidents) 참조.

**observability — 이메일 알림 자동화**

Fail2ban 사건처럼 로그를 *직접 확인하는 방식*은 매번 열어보아야 한다는 번거로움이 있었습니다. 그래서 *모르고 지나가면 위험한 이벤트*를 몇 가지 선별해, 해당 이벤트가 발생하면 개인 이메일로 자동 발송되도록 설정했습니다.

| 이벤트 | 트리거 | 메시지에 담는 정보 |
| --- | --- | --- |
| **관리자 페이지 로그인** | OpenMediaVault 웹 UI 관리자 계정 로그인 성공 | 시각 · 출발 IP · 사용자명 |
| **UPS 이상** | UPS 상태 변경 — 배터리 모드 진입 / 배터리 잔량 임계치 / 전원 복구 | 이벤트 종류 · 배터리 잔량 · 예상 가용 시간 |
| **백업 완료 여부** | 일일 rsync 백업 Job 종료 (성공/실패 모두) | 종료 코드 · 전송된 파일 수 · 소요 시간 · 실패 시 에러 라인 |
{: .home-server-table .home-server-spaced-table}

- **발송 경로:** NAS VM(OpenMediaVault)이 모든 알림의 단일 발송 지점입니다. 외부 SMTP 릴레이(개인 메일 계정의 앱 비밀번호 사용)를 통해 발송합니다.
- **설계 원칙 1 — 성공 알림 제공:** 백업 관련 로그에서는 실패뿐 아니라 *성공*도 메일로 보냅니다. 실패만 알리면 "메일이 안 온 것"이 *성공인지 Job 자체가 안 돌은 것인지* 구분할 수 없기 때문입니다.
- **설계 원칙 2 — 알림 피로 회피:** UPS 이벤트는 *상태 변경 시에만* 1회 발송하고, 주기적 폴링 알림은 보내지 않습니다.
- **다음 단계:** SMTP가 죽으면 알림 자체가 사라지므로, 보조 채널(Webhook / Telegram bot 등)을 추가해 알림 경로를 이중화할 예정입니다.

**운영 지표 (실측 스냅샷, 2026-06)**

별도 시계열 로깅은 두지 않았지만, 커널·드라이브 펌웨어가 자체적으로 남기는 값으로 현재 건강 상태를 확인할 수 있습니다. 아래는 특정 시점의 스냅샷입니다.

| 항목 | 값 |
| --- | --- |
| 연속 가동 | **255일** (직전 내부 먼지 청소 이후 무중단) |
| Main 디스크 (HGST Ultrastar 4 TB) | 누적 가동 **45,496시간 (약 5.2년)** · 재할당/대기/Offline 불량 섹터 **0** · UDMA CRC 오류 **0** · SMART 오류 로그 **없음** · 온도 41 °C (수명 최대 50 °C) |
| Backup 디스크 (WD Red 6 TB) | 누적 가동 **29,804시간 (약 3.4년)** · 재할당/대기 섹터 **0** · CRC 오류 **0** · ATA ABRT **1회** (미디어 오류 아님) · 온도 38 °C |
| 디스크 사용량 | Main 2.31 TiB / 3.10 TiB · Backup 2.30 TiB · OS 10.8 GiB |
| SMART 종합 판정 | 두 디스크 모두 **PASSED** |
{: .home-server-table .home-server-spaced-table}

- 두 디스크 모두 *재할당·대기·Offline 불량 섹터가 0*이고 인터페이스(CRC) 오류도 없어, 5년 이상 가동한 Main 디스크도 물리적으로는 아직 건강합니다.
- 이 값들은 *지금 시점의 단일 스냅샷*이며, 추세(증가율·온도 변화)를 보려면 별도 데이터 수집이 필요합니다.

**장애 사례 — 외부 로그인 시도 → Fail2ban 도입**

상황: NAS 서비스를 외부에 일부 열어 둔 시점, 처음에는 Fail2ban을 켜두지 않았습니다.

알아챈 경위: 운영 중 무심코 인증 로그를 열어 보니 다양한 외부 IP에서 `root`, `admin`, `user`, `test` 같은 흔한 계정명으로 로그인 시도가 분 단위로 쌓이고 있었습니다.

대응:
1. **Root 계정 로그인 차단** — SSH 및 NAS 관리자 계정 모두 root 직접 로그인 금지로 변경.
2. **Fail2ban 적용** — 공개 NAS 서비스에 정책 추가: 24시간 내 비밀번호 오류 5회 발생 시 24시간 Ban.
3. **외부 공개 포트 최소화** — 꼭 필요하지 않은 서비스 포트를 닫고 VPN 경유로 전환.

배운 점: *서비스를 외부에 노출하는 작업*과 *서비스를 운용하는 작업*은 별개의 작업이라는 점. 로그를 직접 보기 전까지는 "잘 작동하고 있다 = 외부 침입이 없는 상태"로 착각하기 쉽다는 점.

---

## Limitations & Next Steps

**지금 부족한 것**
- 백업이 같은 물리 위치에 있음 (오프사이트 백업 없음) → 화재/도난 같은 단일 장애에 취약
- ext4라 데이터 무결성 보호(체크섬) 기능이 없음
- 알림 발송 경로가 SMTP 한 줄뿐 — *SMTP가 죽으면 알림 자체도 사라짐* (단일 장애점)
- 복구 테스트를 정기적으로 수행하지 않음 — "백업 성공 메일"이 *복원 가능*까지 보장하지는 않음
- SMART/가동 지표를 *수동으로만* 확인 — 장기 추세(불량 섹터 증가·온도 상승)를 자동으로 추적하지 않음
- ESXi 무료 라이선스라 자동화·IaC 접근에 제약 (Broadcom 인수 이후 단종 이슈 모니터링 필요)

**다음에 바꿀 것**
- 외부 클라우드 스토리지(또는 다른 위치) 1군데에 핵심 데이터만 추가 백업 (3-2-1 백업 충족)
- SMART 값을 주기 수집·한계선 알림에 연결해, 불량 섹터·온도 추세를 *고장 전에* 감지
- 보조 알림 채널(Webhook / Telegram bot 등) 추가해 SMTP 단일 장애점 제거
- 복구 테스트를 주기 작업으로 등록 (분기 1회 목표) — 백업 *성공*이 아닌 *복원 성공*을 지표로

---

## Photo

<img class="home-server-overview-image" src="{{ '/assets/img/Hades - photo1.jpg' | relative_url }}" alt="Hades 서버 사진">

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/Node%20-%20Hades/' | relative_url }}">Node - Hades</a>
</p>
