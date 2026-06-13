---
layout: page
title: FPGA WorldClock
description: 7-Segment & Keypad 기반 FPGA 디지털 세계시계
img: assets/img/world_clock_fpga.jpg
importance: 2
category: "Hardware & Embedded"
lang: ko
ref: fpga-worldclock
permalink: /ko/projects/fpga-worldclock/
---

<!-- ===== Tech Stack ===== -->
<p>
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="FPGA" src="https://img.shields.io/badge/FPGA-FFCC00?style=flat">
<img alt="Xilinx" src="https://img.shields.io/badge/Xilinx-EE0000?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Vivado-EE0000?style=flat">
<img alt="7-Segment" src="https://img.shields.io/badge/7--Segment%20Display-455A64?style=flat">
<img alt="Keypad I/O" src="https://img.shields.io/badge/Keypad%20I%2FO-607D8B?style=flat">
<img alt="FSM" src="https://img.shields.io/badge/State%20Machine-3F51B5?style=flat">
</p>

## FPGA WorldClock: 디지털 다중도시 시각 표시 시스템
**서울 + 5대 도시(런던, 파리, 도쿄, LA, 뉴욕)** 의 현재 시각을 **7-Segment + 키패드 입력** 으로 표시하는 FPGA 기반 디지털 시스템입니다. **실시간 디지털 회로 설계 / 시간대 계산 / 사용자 인터랙션** 을 Verilog HDL로 구현했습니다.

- **목표**:
  - 시간대 차 보정을 포함한 다중 도시 시계 구현
  - **키패드 입력** 으로 시간 설정 / 도시 선택 / 리셋
  - **AM/PM 12시간 모드** 지원
  - **클럭 분주, 상태기계, 예외 처리** 등 FPGA 실전 경험

---

### 주요 기능
- **초기 시간 설정**: SET / Plus / Minus 키로 서울 시간 설정
- **도시 선택**: 키패드 입력 → 시간대 오프셋 자동 적용
- **AM/PM**: 24시간 ↔ 12시간 변환
- **리셋**: 기본 화면 `--0000` 복귀

### 시스템 / Verilog 설계
- 50 MHz 기준 클럭 → 1초 틱 분주
- 상태 머신: Idle → 시 설정 → 분 설정 → 동작 → 도시 선택
- 예외 처리: 시·분의 언더플로 / 오버플로 (-1 → 23, 60 → 0)
- 모듈 간 변수 동기화는 병렬 신호로 처리

> 자세한 영문 원본: [English version](/projects/fpga-worldclock/)
