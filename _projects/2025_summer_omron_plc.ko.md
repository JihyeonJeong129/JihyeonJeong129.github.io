---
layout: page
title: 2025 여름 PLC 이론 & 실습 프로그램
description: OMRON PLC 기반 이차전지 설비 제어 PLC 이론 / 실습 프로그램
img: assets/img/2025_summer_omron.jpg
importance: 4
category: "Hardware & Embedded"
lang: ko
ref: omron-plc-2025
permalink: /ko/projects/omron-plc-2025/
giscus_comments: false
---

<p>
<img alt="OMRON PLC" src="https://img.shields.io/badge/OMRON%20PLC-0066B3?style=flat">
<img alt="Sysmac Studio" src="https://img.shields.io/badge/Sysmac%20Studio-0066B3?style=flat">
<img alt="CX-Programmer" src="https://img.shields.io/badge/CX--Programmer-005BAA?style=flat">
<img alt="Ladder Logic" src="https://img.shields.io/badge/Ladder%20Logic-37474F?style=flat">
</p>

<style>
.project-table { width: auto; max-width: 100%; margin: 1.2rem auto; border-collapse: separate !important; border-spacing: 0 5pt !important; }
.project-table th, .project-table td { text-align: left; vertical-align: middle; }
.post article hr { margin-top: calc(1rem + 5pt); margin-bottom: calc(1rem + 5pt); }
</style>

## At a Glance

| 항목 | 값 |
| --- | --- |
| 분야 | 산업 제어 / PLC (이차전지 설비 도메인) |
| 기간 | 2025년 여름 |
| 형태 | 교육 + 실습 프로그램 |
| 핵심 스택 | OMRON PLC, Sysmac Studio, CX-Programmer, Ladder Logic |
| 대상 PLC | *(채워주세요: 예 — OMRON CP1L / NJ501 등)* |
| 다룬 로직 | I/O 매핑 · 시작·정지 · 타이머/카운터 · 알람 · 인터락 |
| 결과물 | 아래 데모 영상 / *(채워주세요: 실습 사진)* |
{: .project-table}

한 줄 요약: **코드가 *실제 장비*를 움직이는 제어 관점에서, *안전·결정성을 먼저 설계*하는 PLC 시퀀스 실습 경험입니다.**

---

## Problem & Constraints

일반 프로그래밍과 제일 큰 차이는 *코드가 물리 장비를 움직인다*는 점입니다. 버그가 아닌 *장비 고장/부상*으로 이어질 수 있고, 조건을 잊으면 *안전 장치가 풀리지 않은 채* 장비가 동작합니다.

핵심 제약:

- 코드는 *PLC scan cycle*(입력 읽기 → 로직 실행 → 출력 쓰기)를 전제로 설계해야 함 — "위에서 아래로" 읽히지 않음
- 수동 정지·인터락·비상 정지는 *물리적 안전*과 연결됨
- 알람은 *원인 식별*이 가능해야 하고, 조건 해제는 명시적이어야 함
- I/O 주소는 *실제 배선과 일치*해야 함

---

## What I Built · How

### 접근 순서

1. **I/O 식별** — 센서·버튼·액추에이터를 먼저 나열하고 주소 매핑.
2. **시작·정지 로직** — 자기유지(self-hold) 회로로 동작 안정화.
3. **타이머/카운터** — 지연/횟수 기반 제어(이차전지 공정 시나리오).
4. **알람·인터락** — 비상정지·안전도어·과부하 조건을 *동작 조건에 직접* 엮어 둠.
5. **디버깅** — 램프로 코일 상태·접점 추적, 강제 세팅으로 조건 확인.

### 핵심 기술 결정

- **Ladder Logic** — 전기 제어 회로와 의미가 *1:1로 대응* — 현장 안전·설비 점검과 자연스럽게 맞물림.
- **I/O 먼저 → 로직 나중 순서** — PLC 코드 오류의 상당수가 "주소가 틀렸다"이므로 주소를 먼저 확정.
- **우선순위를 회로로 표현** — 비상정지/인터락은 조건문이 아닌 *회로 레벨로* 구성해 scan 순서 의존을 제거.
- **자기유지 패턴** — START 펄스로 진입, STOP/알람으로 직접 끝내도록 설계.

---

## Results & Demo

- PLC Ladder Logic과 산업 제어 흐름을 실습으로 체득.
- *소프트웨어 로직*이 *실제 장비 제어*와 연결될 때 필요한 안전성·결정성을 체감.
- 하드웨어 추상화의 *낮은 계층*을 다루는 경험 확보.

<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/ruMg5BIu5Ws"
    title="OMRON PLC Practice Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

> *(채워주세요: 사용 PLC 모델·I/O 개수·다룬 시퀀스 개수 수치화)*

---

## What I'd Do Differently

- **사용 PLC 모델·I/O 수·시퀀스 개수** 명시 — 수치가 있어야 규모감이 전달됨.
- **실설비 vs 시뮬레이션 구분** — 어디까지가 실장비 동작이고 어디부터가 시뮬인지 명시.
- **비상정지 물리 연결 설명** — 하드와이어 인터락과 소프트웨어 인터락의 역할 분담을 명확히.
- **ST(Structured Text) 비교** — 같은 로직을 ST로 재구현했을 때의 *가독성·재사용성* 차이 정리.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/2025_summer_omron_plc/' | relative_url }}">2025 Summer OMRON PLC Practice</a>
</p>
