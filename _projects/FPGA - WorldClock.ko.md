---
layout: page
title: FPGA WorldClock
description: 7-Segment & Keypad 기반 FPGA 디지털 세계시계
img: assets/img/world_clock_fpga.png
importance: 2
category: "Hardware & Embedded"
lang: ko
ref: fpga-worldclock
permalink: /ko/projects/fpga-worldclock/
---

<p>
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="FPGA" src="https://img.shields.io/badge/FPGA-FFCC00?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Vivado-EE0000?style=flat">
<img alt="7-Segment" src="https://img.shields.io/badge/7--Segment%20Display-455A64?style=flat">
</p>

<style>
.project-table { width: auto; max-width: 100%; margin: 1.2rem auto; border-collapse: separate !important; border-spacing: 0 5pt !important; }
.project-table th, .project-table td { text-align: left; vertical-align: middle; }
.post article hr { margin-top: calc(1rem + 5pt); margin-bottom: calc(1rem + 5pt); }
</style>

## At a Glance

| 항목 | 값 |
| --- | --- |
| 분야 | 디지털 하드웨어 / Verilog HDL |
| 기간 | *(채워주세요: YYYY.MM ~ YYYY.MM)* |
| 팀 규모 / 내 비중 | *(채워주세요: 예 — 1명 개인 / FSM · 입출력 전체)* |
| 핵심 스택 | Verilog HDL, Vivado, 7-Segment Display, 4x4 Keypad |
| 대상 보드 | *(채워주세요: 예 — Xilinx Basys3 / Artix-7 등)* |
| 핵심 기능 | 시/분/초 카운트 · 도시 시간대 전환 · 키패드 설정 · 7-Seg 멀티플렉싱 |
| 결과물 | *(채워주세요: 보드 시연 영상 / 시뮬파 캡처 / GitHub)* |
{: .project-table}

한 줄 요약: **FPGA 위에서 *FSM으로 설정 모드와 운행 모드를 분리*한, 도시 시간대별 디지털 세계시계입니다.**

---

## Problem & Constraints

소프트웨어와 달리 FPGA에서는 *시간 그 자체*도 직접 만들어야 합니다. 입력 처리, 시간 증가, 상태 전환, 표시 제어가 *동시에* 돌아갑니다.

필수 제약:

- 시스템 클럭을 나눠 *1Hz tick*을 만들어야 함
- Keypad 입력은 *떨림(헌팅)*을 가정해 안정화가 필요
- 7-Segment는 *멀티플렉싱*으로 자릿수를 돌려가며 표시
- *시간 증가와 설정 입력이 충돌*하면 시계가 틀림 → 이걸 구조적으로 막아야 함

즉 문제는 "Verilog로 시계 만들기"가 아니라, *입력·상태·계산·표시가 서로 간섭하지 않게 설계하기*입니다.

---

## What I Built · How

### FSM 설계

```text
        [ IDLE / RUN ]
           │   ▲
  set key  │   │ confirm
           ▼   │
     [ SET_HOUR ] ───▶ [ SET_MINUTE ] ───▶ [ CITY_SELECT ]
           │
           ▼
        [ RUN ]
```

*설정 모드(SET_*)*에서는 1Hz 시간 증가를 *멈춤* → 입력 로직과 시간 로직이 동시에 같은 상태를 건드리지 않게 함.

### 모듈 분해

| 모듈 | 책임 |
| --- | --- |
| Keypad 입력 | 키 스캔 · 디바운싱 · 이벤트화 |
| Clock divider | 시스템 클럭 → 1Hz tick |
| Time counter | 초/분/시 카운터 · 오버플로·언더플로·AM/PM |
| City offset | 도시별 시간 보정 적용 |
| Display driver | 7-Seg 멀티플렉싱 · BCD 변환 |
| Top FSM | 모드 전환 · 입력 라우팅 |
{: .project-table}

### 핵심 기술 결정

- **입력 ↔ 시간 계산을 구조적으로 분리** — SET_* 상태에서는 *tick 입력을 주지 않음* → 종합 테스트에서 충돌 제거.
- **FSM 기반 모드 분리** — "설정 중"/"시계 돌아감"을 명시적으로 구분해 디버깅·추가 기능이 쉬움.
- **모듈러 Verilog** — Top은 단순 배선으로 유지, 테스트벤치가 모듈별로 가능.
- **도시 오프셋 분리** — 기준 시간은 한 세트만 관리, 도시 전환은 *표시 단계에서만* 오프셋 적용 → 시간 동기화를 단일 소스로 유지.

---

## Results & Demo

- FPGA 보드에서 다중 도시 디지털 세계시계 동작.
- Keypad로 시간 설정 / 도시 전환 / RUN 동작 전환 가능.
- 설정 중 시간 증가가 멈춰 입력↔시간 계산의 *충돌이 설계 단계에서 제거*됨.

> *(채워주세요: 보드에서 시간이 올라가는 구동 영상 1개 · 도시 전환 시연 캡처 · 주요 모듈 다이어그램과 명세 요약 · GitHub 링크)*

---

## What I'd Do Differently

- **합성 리포트 기록** — LUT / FF / BRAM 사용량, 타이밍 슬랙을 기록해 *어느 모듈이 병목인지* 알 수 있게.
- **테스트벤치 정리** — Time counter 경계 조건(23:59:59 → 00:00:00 등)을 모듈별 테스트벤치로 남겨 *회귀 검증*이 가능하도록.
- **UART/USB 확장** — 시간 설정을 외부에서 주입하고 상태를 로그로 내보내 디버깅 편의성 향상.
- **BCD 변환 분리 · 멀티플렉싱 주파수 파라미터화** — 다른 보드·다른 세그먼트 수의 재사용성 확보.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/fpga-worldclock/' | relative_url }}">FPGA WorldClock</a>
</p>
