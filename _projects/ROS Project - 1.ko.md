---
layout: page
title: ROS Project (MORAI 시뮬레이터)
description: MORAI 시뮬레이터 기반 ROS 자율주행 프로젝트
img: /assets/img/morai.png
importance: 3
category: "Hardware & Embedded"
lang: ko
ref: ros-morai
permalink: /ko/projects/ros-morai/
---

<p>
<img alt="ROS" src="https://img.shields.io/badge/ROS-22314E?style=flat&logo=ros&logoColor=white">
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="MORAI Sim" src="https://img.shields.io/badge/MORAI%20Simulator-00B0F0?style=flat">
<img alt="PID" src="https://img.shields.io/badge/PID%20Control-43A047?style=flat">
</p>

<style>
.project-table { width: auto; max-width: 100%; margin: 1.2rem auto; border-collapse: separate !important; border-spacing: 0 5pt !important; }
.project-table th, .project-table td { text-align: left; vertical-align: middle; }
.post article hr { margin-top: calc(1rem + 5pt); margin-bottom: calc(1rem + 5pt); }
</style>

## At a Glance

| 항목 | 값 |
| --- | --- |
| 분야 | 자율주행 시뮬레이션 / 차량 제어 |
| 기간 | *(채워주세요: YYYY.MM ~ YYYY.MM)* |
| 팀 규모 / 내 비중 | *(채워주세요: 예 — 4명 / 제어·미션 로직 담당)* |
| 핵심 스택 | ROS, Python, MORAI Simulator, GPS Localization, PID, Ubuntu |
| 다룬 미션 | 전역 경로 추종 / 보행자 정지·재출발 / 신호 대응 / 정적 장애물 회피 |
| 핵심 지표 | *(채워주세요: 미션 통과율 · 평균/최대 경로 이탈 · 회피 시 최대 가속도)* |
| 결과물 | 아래 데모 영상 / *(채워주세요: GitHub 링크)* |
{: .project-table}

한 줄 요약: **MORAI 시뮬레이터 위에서 GPS+PID 기반으로 *4종 미션을 끝까지 통과*하는 ROS 자율주행 스택입니다.**

---

## Problem & Constraints

자율주행은 단순 경로 추종만으로 부족합니다. 보행자·장애물·신호를 *동시에* 처리해야 하고, 시뮬레이터 미션은 *결정적 통과*가 평가 기준입니다.

대상 문제:

- 허용 오차 내에서 전역 경로 추종
- 보행자 구간의 정지·재출발
- 신호등 상태 대응
- 정적 장애물 회피 시 *급가속/급조향 없이* 마무리

특히 마지막 항목이 까다로웠습니다 — 회피 경로가 기술적으로 옳더라도 *가속·조향이 거칠면* 미션 점수가 깎입니다.

---

## What I Built · How

### ROS 토폴로지 (개념도)

```text
[ MORAI Sim ] ──/odom, /gps, /objects──▶ [ localization ]
                                            │
                                            ▼
                                       [ mission FSM ] ◄──── waypoints
                                            │
                                            ▼
                                  [ longitudinal / lateral control ]
                                            │
                                            ▼
[ MORAI Sim ] ◀──/ctrl_cmd (조향·속도)──
```

### 미션별 핵심 로직

| 미션 | 핵심 로직 |
| --- | --- |
| 전역 경로 추종 | GPS → waypoint → PID 기반 조향 |
| 보행자 정지·재출발 | mission zone 감지 → 감속 + 타이머 기반 정지 → 안전 확인 후 재출발 |
| 신호 처리 | traffic light state → 정지/통과 결정 |
| 정적 장애물 회피 | 객체 정보 + local path + 속도 제한 결합 |
{: .project-table}

### 핵심 기술 결정

- **PID (Pure Pursuit / MPC X)** — 학습·튜닝 가시성과 *게인의 의미 해석*이 단순해, 시뮬레이터 환경에서 미션을 통과시키기까지 빠르게 수렴.
- **구간별 게인 분리** — 직선과 곡선에 같은 PID 게인은 먹히지 않아 *경로 곡률 기반*으로 게인을 나눠 적용.
- **회피 시 속도 제한** — "경로만 수정"하는 회피는 급가속을 낳음 → *경로와 속도를 같이* 제어.
- **mission FSM** — waypoint 기반으로 미션 구간 진입/이탈을 명시적으로 관리, 상태 혼재 방지.

---

## Results & Demo

- 4종 미션(경로 추종·보행자·신호·장애물) **통과**.
- 곡선 구간 PID 재튜닝으로 경로 이탈 감소 *(채워주세요: 평균/최대 cross-track error 수치)*.
- 회피 시 속도 제한으로 급가속 감소 *(채워주세요: jerk 수치)*.

<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/zIE8PgRny8g"
    title="MORAI ROS Autonomous Driving Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

## What I'd Do Differently

- **미션별 성공률·오차를 수치로 기록** — 지금은 정성적. 시도 횟수 / 성공 횟수 / 평균 경로 이탈을 구간별 표로.
- **제어 대안 비교** — 회피 구간에 Pure Pursuit / MPC를 적용했을 때 PID 대비 성능·안정성 수치 비교.
- **실패 케이스 정리** — 미션 실패 1~2건과 원인(보행자 감지 지연, 장애물 경로 충돌 등) 기록.
- **PID 튜닝 절차** — 게인 변경 → 응답 변화를 그래프/표로 정리해 *재현 가능한 튜닝 노트* 형식으로.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/ROS%20Project%20-%201/' | relative_url }}">ROS Project with MORAI Simulator</a>
</p>
