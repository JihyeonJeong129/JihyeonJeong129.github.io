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

## 개요

FPGA WorldClock은 7-Segment와 Keypad를 이용해 서울 및 주요 도시 시간을 표시하는 디지털 시계 프로젝트입니다.

---

## 문제와 목표

소프트웨어와 달리 FPGA에서는 시간 증가, 입력 처리, 상태 전환, 표시 제어를 직접 설계해야 합니다. 이 프로젝트는 Verilog로 다중 도시 시간 표시 시스템을 구현하는 것이 목표였습니다.

---

## 내 역할

- 시간 설정과 도시 선택을 위한 상태 흐름을 설계했습니다.
- 1초 tick을 만들기 위한 clock divider를 구현했습니다.
- 시간대 보정, AM/PM 변환, overflow/underflow 처리를 구현했습니다.

---

## 접근과 이슈

FSM 구조를 사용해 설정 모드와 동작 모드를 분리했습니다. 예상보다 중요한 부분은 Keypad 입력과 시간 증가가 동시에 영향을 주지 않도록 상태와 계산 로직을 분리하는 일이었습니다.

---

## 결과

- FPGA 보드에서 다중 도시 디지털 시계를 구현했습니다.
- Verilog 기반 상태 설계와 시간 도메인 처리 경험을 얻었습니다.

---

<p class="text-muted small mt-4">
  더 자세한 내용은 <a href="{{ '/projects/fpga-worldclock/' | relative_url }}">영어 원본 보기</a>에서 확인할 수 있습니다.
</p>
