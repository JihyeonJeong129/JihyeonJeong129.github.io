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

안녕하세요, **정지현 (Jihyeon Jeong)** 입니다 — **실제 장애 상황에서도 안정적으로 동작하는 백엔드·클라우드 인프라를 설계하고 운영합니다.** 관측 가능하고(observable), 재현 가능하며(reproducible), 복구 가능한(recoverable) 시스템을 지향합니다.

**Linux / Kubernetes / AWS / CI/CD** 를 기반으로 백엔드와 인프라를 함께 다룹니다. 아직 커리어 초기이지만, 직접 운영하는 3-노드 온프레미스 홈랩을 *프로덕션 수준 환경*으로 다루며 reliability, observability, failure recovery를 처음부터 끝까지 직접 경험하였습니다.

대규모 트래픽을 다룬 경험은 아니지만, 홈랩 수준에서도 스토리지 노드는 마지막 점검 이후 약 **255일**째 무중단으로 동작하고, 5년 넘게 가동한 디스크도 아직 SMART 상 이상이 없으며, 연산 노드는 실제 정전을 UPS로 버티며 약 **254일**째 재부팅 없이 운영되고 있습니다. (26.06.15 기준)

최근 관심 분야는 **(1) 분산 시스템 · ML 인프라(MLOps / LLM 서빙)** 와 **(2) 하드웨어 가속 시스템**입니다.

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

#### 대표 프로젝트

- **[홈랩 (Home Lab)]({{ '/ko/projects/home-server-overview/' | relative_url }})** — Xen + ESXi 기반 3-노드 온프레미스 클러스터 (백엔드 · JupyterHub · NAS · VPN 게이트웨이). 무중단 운영을 위한 UPS 구성, 관리자 로그인 · UPS 이벤트 · 백업 결과를 이메일로 자동 알림.
- **TACTIX** — 폐쇄망 군 네트워크용 RAG 기반 항공기 정비 지원 시스템
- **Moisam** — OAuth · 실시간 채팅 기능을 갖춘 기숙사 공동구매 플랫폼

자세한 내용은 [프로젝트]({{ '/ko/projects/' | relative_url }}) 또는 [이력서]({{ '/cv/' | relative_url }}) 페이지에서 확인하세요.
