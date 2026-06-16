---
layout: about
title: 소개
permalink: /ko/
lang: ko
ref: about
subtitle: Backend / DevOps / Cloud Infrastructure 엔지니어

profile:
  align: right
  image: main_pic.jpg
  image_circular: false
  more_info: >
   

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
  scrollable: false
  limit: 3
---

안녕하세요, **정지현 (Jihyeon Jeong)** 입니다 — **운영 가능한 시스템**을 직접 만들고 개선하는 데 관심이 있습니다.

**Linux · Kubernetes · AWS · CI/CD** 를 기반으로 백엔드와 인프라를 함께 다루며, *관측 가능하고(observable) · 재현 가능하며(reproducible) · 복구 가능한(recoverable)* 시스템을 만드는 데 관심이 있습니다. 아직 실무 경력은 없지만, 직접 운영하는 3-노드 온프레미스 홈랩을 *작은 운영 환경*처럼 다루면서 안정성 · 관측성 · 장애 복구를 직접 설계하고 책임지는 연습을 이어 왔습니다.

대규모 트래픽을 다룬 경험은 아니지만, 개인 홈랩 수준에서도 운영의 결과를 지표로 남기려 합니다 — 스토리지 노드는 마지막 점검 이후 약 **255일**째 무중단으로 동작하고, 5년 넘게 가동한 디스크도 아직 SMART 상 이상이 없으며, 연산 노드는 실제 정전을 UPS로 버티며 약 **254일**째 재부팅 없이 운영되고 있습니다.

최근 관심 분야는 **(1) 분산 시스템 · ML 인프라(MLOps / LLM 서빙)** 와 **(2) FPGA · PCIe 기반 하드웨어 가속 시스템** 입니다.

#### 현재 관심 분야

<div class="tags">
  <span class="tag">Linux</span>
  <span class="tag">가상화</span>
  <span class="tag">Kubernetes</span>
  <span class="tag">AWS</span>
  <span class="tag">CI/CD</span>
  <span class="tag">IaC</span>
  <span class="tag">SRE</span>
  <span class="tag">네트워킹</span>
  <span class="tag">백엔드</span>
  <span class="tag">Observability</span>
</div>

#### 대표 작업

- **[MyAwesomeHomeLab]({{ '/ko/projects/home-server-overview/' | relative_url }})** — Xen + ESXi 기반 3-노드 온프레미스 클러스터 (백엔드 · JupyterHub · NAS · VPN 게이트웨이). UPS로 보호되며, 관리자 로그인 · UPS 이벤트 · 백업 결과를 이메일로 자동 알림.
- **TACTIX** — 폐쇄망(에어갭) 군 네트워크용 RAG 기반 항공기 정비 지원 시스템
- **Moisam** — OAuth · 실시간 채팅 · 에스크로 결제를 갖춘 기숙사 공동구매 플랫폼

자세한 내용은 [프로젝트]({{ '/ko/projects/' | relative_url }}) 또는 [이력서]({{ '/cv/' | relative_url }}) 페이지에서 확인하세요.
