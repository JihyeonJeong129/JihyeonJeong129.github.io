---
layout: page
title: Node - Athena
description: Lenovo System X3650 기반 Compute / AI / VM Host 노드
img: assets/img/lenovo_x3650_2gpu.jpg
importance: 2
category: "Infrastructure & DevOps"
lang: ko
ref: node-athena
permalink: /ko/projects/node-athena/
server_photos:
  - /assets/img/Athena - photo1.jpg
  - /assets/img/Athena - photo2.jpg
---

<p>
<img alt="Lenovo X3650" src="https://img.shields.io/badge/Lenovo%20System%20X3650-E2231A?style=flat&logo=lenovo&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E5--2630%20v4-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Tesla P100" src="https://img.shields.io/badge/NVIDIA%20Tesla%20P100-76B900?style=flat&logo=nvidia&logoColor=white">
<img alt="XCP-ng" src="https://img.shields.io/badge/XCP--ng%20%28Xen%29-EE0000?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="JupyterHub" src="https://img.shields.io/badge/JupyterHub-F37626?style=flat&logo=jupyter&logoColor=white">
<img alt="APC UPS" src="https://img.shields.io/badge/APC%20UPS%20SMC1000-FF6600?style=flat">
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
  width: 85%;
  max-width: 100%;
  height: auto;
  margin: 1.2rem auto;
}

.athena-project-table {
  table-layout: fixed;
}

.athena-project-table th:nth-child(1),
.athena-project-table td:nth-child(1) {
  width: 14%;
}

.athena-project-table th:nth-child(2),
.athena-project-table td:nth-child(2) {
  width: 40%;
}

.athena-project-table th:nth-child(3),
.athena-project-table td:nth-child(3) {
  width: 25%;
  white-space: nowrap;
}

.athena-project-table th:nth-child(4),
.athena-project-table td:nth-child(4) {
  width: 21%;
}

.athena-server-carousel {
  max-width: 850px;
  margin: 1.2rem auto 2rem;
}

.athena-server-carousel .carousel-inner {
  height: 500px;
  background: #111;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.athena-server-carousel .carousel-item,
.athena-server-carousel .carousel-item img {
  width: 100%;
  height: 100%;
}

.athena-server-carousel .carousel-item img {
  object-fit: contain;
}

@media (max-width: 767px) {
  .athena-server-carousel .carousel-inner {
    height: 55vw;
  }
}

</style>

> 홈랩 전체 구조는 [홈 서버 인프라 개요]({{ '/ko/projects/home-server-overview/' | relative_url }})를 참조하세요.

## At a Glance

| 항목 | 값 |
| --- | --- |
| 역할 | Compute / AI · LLM / VM Host |
| 하드웨어 | Lenovo System X3650, Dual Xeon E5-2630 v4 (총 20 Core / 40 Thread), 272 GB RAM (16 GB × 17) |
| GPU | NVIDIA Tesla P100 × 2 |
| 스토리지 (로컬) | 로컬 VM 디스크(NVME 1TB) + Hades NAS 마운트 |
| OS / 하이퍼바이저 | XCP-ng (Xen) |
| 네트워크(IP) 대역 | `192.168.200.X` |
| 외부 공개 포트 | WireGuard 포트 1개 |
| 전원 보호 | APC UPS SMC1000 (1000 VA) — 평소 사용 최대 전력 400W 기준 10분 이상 버팀, VPN VM이 단전 감지·전파 담당 |
| 운영 시작 | 2024년 이후 |
| 현재 상태 | 운영 중 (홈랩 Compute 노드) — UPS 도입 이후 **약 254일 연속 무중단 가동** (2025-10-04 부팅 이후) |
{: .home-server-table .home-server-spaced-table}

한 줄 요약: **Athena는 프로젝트별 VM과 GPU 워크로드를 한 장비에서 같이 처리하는 연산 전용 노드입니다.**

---

## What Runs Here

Athena는 "프로젝트당 VM 1대 → VM 안에서 Docker로 의존성 분리"가 기본 단위입니다. 한 프로젝트의 패키지 충돌이나 런타임 문제가 다른 프로젝트에 영향을 미치지 않도록 설계했습니다.

| 종류 | 용도 | 자원 할당 |
| --- | --- | --- |
| JupyterHub VM | 데이터 분석 / 모델 실험용 노트북 환경 | vCPU 8, RAM 32GB, P100 1장 Passthrough |
| LLM / AI 실험 VM | Local LLM 추론(Ollama) 및 파인튜닝 실험 | vCPU 8, RAM 32GB, P100 1장 Passthrough |
| 인프라용 VM | WireGuard VPN 엔드포인트(단전 감지·전파 포함), Xcp-ng 관리용 XOA | vCPU 4, RAM 4GB |
{: .home-server-table .home-server-spaced-table}

**과거에 운영했던 프로젝트 VM**

| 프로젝트 | 내용 | 프로젝트 기간 | 자원 |
| --- | --- | --- | --- |
| Frontier | Slack, Notion, Discord등 여러 데이터 채널에서 데이터 수집 및 저장하는 온톨로지 서비스 및  PostgresSQL, Neo4J, Qdrant 서버 호스팅 | 2025.12 ~ 2026.04 | vCPU 8, RAM 32 GB |
| Communicare | 외국인 유학생을 위한 커뮤니티 플랫폼 백엔드 프로토타입 서버 및 PostgresSQL 서버 호스팅 | 2025.10 ~ 2025.12 |vCPU 4, RAM 8 GB |
| TACTIX | 폐쇄망 환경에서의 RAG 시스템 | 2025.05 ~ 2025.06 | vCPU 8, RAM 32 GB, GPU P100 |
| Moisam | Moisam 백엔드 프로토타입 서버 및 MySQL 서버 호스팅 | 2025.04 ~ 2025.05 | vCPU 4, RAM 8 GB |
{: .home-server-table .home-server-spaced-table .athena-project-table}

**배포 파이프라인 (서비스용 VM 기준)**

<img class="home-server-overview-image" src="{{ '/assets/img/Athena - deploy.png' | relative_url }}" alt="Athena Node Project deploy overview">

GitHub Actions의 self-hosted runner를 Athena 내부 VM에 두어, 외부에 빌드 포트를 열지 않고도 커밋 → 빌드 → 컨테이너 교체가 자동으로 진행되도록 구성했습니다.

**스토리지 사용 방식**
- VM OS 디스크: Athena 로컬
- 프로젝트 데이터 / 모델 / 데이터셋: Hades NAS 마운트 (WireGuard 경유)
- 컨테이너 데이터: 재생성 가능한 것은 백업 제외, 장기 보존 필요한 것만 NAS 백업 경로로 복사

---

## Key Decisions

#### - 왜 XCP-ng (Xen)인가
Athena는 20 Core 환경이라 무료 ESXi 라이선스(8 vCPU 제한) 범위를 벗어났습니다. 대안으로 **Proxmox**와 **XCP-ng**를 검토했고, Hades에서 이미 ESXi를 운영 중이었기 때문에 *관리 모델이 ESXi에 가까운* XCP-ng를 골랐습니다. 두 노드의 관리 절차(스냅샷, 콘솔 접근, VM 이전)를 비슷한 형태로 유지하면 운영 부담이 줄어들 거라고 봤습니다.

- **고려한 트레이드오프:** Proxmox는 KVM 기반에 ZFS 통합이 강점이고 한국어 자료도 많지만, ESXi에서 옮겨오는 인지 비용을 감수하기보다 XCP-ng로 통일하는 쪽을 우선했습니다.

#### - 왜 VM 위에 Docker인가 (Docker 단독이 아니라)
Docker만으로도 의존성 분리는 됩니다. 그럼에도 한 단계 더 VM으로 감싼 이유는 다음과 같습니다.

- **자원 한도 보장:** 한 프로젝트의 OOM이나 디스크 사용량 폭주가 호스트 머신 전체에 영향을 미치는 것을 막기 위해 VM 수준에서 vCPU/RAM/디스크 한도를 설정했습니다.
- **GPU 패스스루:** Tesla P100을 컨테이너 공유 방식이 아니라 *VM 단위로 점유*시키는 편이 드라이버/CUDA 버전 충돌 관리 측면에서 유리하다고 판단했습니다.

대신 하이퍼바이저 + Docker 이중 가상화로 인한 비효율은 일정 부분 감수했습니다. 향후 서비스가 늘면 *VM 통합 / Kubernetes 같은 단일 평면으로의 이동*을 다음 단계로 계획하고 있습니다.

#### - 왜 JupyterHub인가
분석/실험 워크플로가 Jupyter 노트북 기반인 경우가 많고, 노트북을 매번 로컬과 서버 사이로 복사하지 않으려고 JupyterHub를 두었습니다. Athena의 GPU 자원을 노트북 환경에서 바로 쓸 수 있게 하는 것이 핵심 이유입니다.

---

## Operations & Incidents

**평상시 운영**
- VM 단위 스냅샷을 주요 변경 전후로 수동 생성
- 프로젝트 데이터는 NAS 마운트 경로에 두고 Hades의 일일 백업에 묶음
- WireGuard 키는 노드별로 분리 — Athena가 노출하는 외부 포트는 WireGuard 1개
- UPS(APC SMC1000) 상태는 VPN VM에서 모니터링하며, 단전 감지 시 다른 VM에 알림을 전파

**전원 보호 (UPS) 구성**

- **장비:** APC UPS SMC1000, 출력 용량 **1000 VA**
- **부하 기준:** Lenovo X3650의 하드웨어 구성상 최대 소비 전력은 약 1.8 kW에 이르지만, 그 수준을 버티는 UPS는 비용이 너무 커서 현실적이지 않았습니다. 대신 GPU를 풀로드로 돌리는 극한 상황이 아닌 *평소 워크로드의 실사용 피크 전력 400 W*를 기준으로 산정했습니다. UPS의 목표는 *무정전 운전*이 아니라 *안전하게 끄기 위한 시간 확보*이기 때문입니다.
- **목표 보호 시간:** 400 W 기준 **10분 이상** 버틸 수 있도록 구성 → 단전 감지 시 *진행 중 작업 저장 후 안전 종료*가 가능한 윈도우 확보 (GPU 풀로드가 걸린 상태에서는 보호 시간이 짧아질 수 있어, 단전 신호를 받으면 학습 잡을 먼저 멈추도록 구성)
- **단전 감지·전파:** UPS는 Athena의 **WireGuard / VPN VM**에 USB로 연결되어 있음. UPS가 외부 전력 차단 알림을 발생시키면 VPN VM이 이를 받아 Hades·Daedalus 등 다른 노드에 전파 → 클러스터 전체가 같은 신호로 안전 종료 절차 진입

**장애 사례 — 단전으로 인한 강제 셧다운 & GPU 커널 손상 (UPS 도입 계기)**

상황: Athena 노드가 위치한 지역 주변에 단전이 발생해 시스템이 **강제 셧다운**. 약 **45분 뒤** 외부 전력 복구.

알아챈 경위: 전력 복구 후 부팅은 정상이었으나, GPU 사용 워크로드가 올라오는 시점에 `nvidia-smi`가 디바이스를 인식하지 못하고 CUDA 호출이 실패. 커널 로그를 추적해 NVIDIA 드라이버 커널 모듈이 손상된 것을 확인.

대응:
1. NVIDIA 드라이버를 제거하고 같은 버전으로 **재설치**, 커널 모듈 재빌드 후 GPU 워크로드 정상 복구.
2. *애초에 강제 셧다운을 막아야 한다*는 결론으로 **UPS 도입** — APC SMC1000(1000 VA) 설치.
3. UPS를 VPN VM에 USB로 물리고, **단전 → VPN VM 감지 → 다른 노드로 신호 전파** 구조 구성.
4. 단전 감지 시 GPU 워크로드와 학습 잡을 *안전 종료*시키도록 VM 단위 셧다운 명령을 정리.

배운 점: *전력은 전체 시스템 운영을 가능하게 하는 필수 기반 자원*이라는 점. 데이터 백업과 별개로 **"갑작스러운 정전" 자체가 GPU 같은 가속기에 상태 손상을 남길 수 있다**는 사실. 한 노드의 정전 대응이 클러스터 전체로 전파되어야 의미가 있다는 점.

결과: UPS 도입 이후 동일 장애는 재발하지 않았고, **2025-10-04 부팅 이후 약 254일(약 8개월) 동안 재부팅 없이 가동** 중입니다. 이 구간에는 짧은 순간 정전도 몇 차례 있었지만 UPS가 흡수해 시스템은 무중단으로 이어졌습니다. (시계열 로깅 없이 현 시점 `uptime` 기준)

**장애 사례 — 환경 드리프트**

장기간 서버를 운영하다 보니 사용하지 않는 Docker 이미지, 오래된 VM 스냅샷이 쌓여 디스크 용량이 부족해지는 일이 발생했습니다. 그 뒤로 "2달마다 한 번씩 정리"를 운영 루틴에 포함시켰습니다.

---

## Limitations & Next Steps

**지금 부족한 것**
- GPU 스케줄러가 없어 점유가 수동 합의에 의존
- self-hosted runner 격리가 약함 — 외부 PR 빌드는 받지 않는 정책으로 회피 중
- 모니터링/알림이 없음 → VM 상태는 사람이 직접 확인

**다음에 바꿀 것**
- Prometheus + node_exporter + nvidia_gpu_exporter로 GPU/메모리 사용량 가시화
- self-hosted runner를 1회용 컨테이너로 띄우는 방식으로 격리 강화
- 무거운 학습 잡 큐를 위해 경량 스케줄러(Slurm 또는 Ray 등) 검토

---

## Photo

<div id="athenaServerCarousel" class="carousel slide athena-server-carousel" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for photo in page.server_photos %}
    <li data-target="#athenaServerCarousel" data-slide-to="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}"></li>
    {% endfor %}
  </ol>

  <div class="carousel-inner">
    {% for photo in page.server_photos %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <img src="{{ photo | relative_url }}" alt="Athena 서버 사진 {{ forloop.index }}">
    </div>
    {% endfor %}
  </div>

  <a class="carousel-control-prev" href="#athenaServerCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#athenaServerCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/Node%20-%20Athena/' | relative_url }}">Node - Athena</a>
</p>
