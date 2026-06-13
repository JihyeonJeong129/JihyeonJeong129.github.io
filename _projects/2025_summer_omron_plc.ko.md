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

## 개요

OMRON PLC를 활용해 이차전지 설비 제어의 기본 개념과 실습을 다룬 프로그램입니다.

---

## 문제와 목표

산업 제어에서는 코드가 물리 장비의 동작과 바로 연결됩니다. I/O, 인터락, 비상 정지, 알람처럼 안전한 순서 제어를 이해하는 것이 목표였습니다.

---

## 내 역할

- Ladder Logic을 작성하고 OMRON 도구로 디버깅했습니다.
- 센서/액추에이터 I/O 매핑과 시퀀스 제어를 실습했습니다.
- start/stop, alarm, interlock 흐름을 구현했습니다.

---

## 접근과 이슈

먼저 I/O 관계를 명확히 한 뒤 시퀀스 로직을 설계했습니다. 예상보다 어려웠던 점은 일반 프로그래밍처럼 한 줄씩 실행되는 것이 아니라 PLC scan cycle 기준으로 동작을 이해해야 한다는 점이었습니다.

---

## 결과

- PLC Ladder Logic과 산업 제어 흐름을 실습했습니다.
- 소프트웨어 로직이 실제 장비 제어와 연결될 때 필요한 안전성과 결정성을 배웠습니다.

---

## 데모 영상

아래 영상은 PLC 실습 결과와 제어 시퀀스 동작을 확인하기 위한 증빙 자료입니다.

<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/ruMg5BIu5Ws"
    title="OMRON PLC Practice Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

<p class="text-muted small mt-4">
  더 자세한 내용은 <a href="{{ '/projects/2025_summer_omron_plc/' | relative_url }}">영어 원본 보기</a>에서 확인할 수 있습니다.
</p>
