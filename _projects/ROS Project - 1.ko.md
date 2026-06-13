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

<!-- ===== Tech Stack ===== -->
<p>
<img alt="ROS" src="https://img.shields.io/badge/ROS-22314E?style=flat&logo=ros&logoColor=white">
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="MORAI Sim" src="https://img.shields.io/badge/MORAI%20Simulator-00B0F0?style=flat">
<img alt="GPS" src="https://img.shields.io/badge/GPS%20Localization-1E88E5?style=flat">
<img alt="PID" src="https://img.shields.io/badge/PID%20Control-43A047?style=flat">
<img alt="OpenCV" src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=opencv&logoColor=white">
<img alt="Linux" src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white">
</p>

## 개요
**MORAI 시뮬레이터** 위에서 진행한 ROS 기반 자율주행 프로젝트입니다. 가상 도시 환경에서 **글로벌 경로 추종, 신호등 인식, 보행자 감속 / 정지, 정적 장애물 회피** 를 구현하고 안정적인 자율 주행을 달성했습니다.

- **환경**:
  - ROS 기반 SW 스택
  - MORAI Autonomous Driving Simulator
  - GPS 기반 측위 / 웨이포인트 시스템

- **미션**:
  - **글로벌 경로 추종**
  - **신호등 인식**
  - **보행자 처리**
  - **정적 장애물 회피**

---

### 글로벌 경로 추종
GPS 기반 실시간 측위 + **PID 제어** 로 경로 이탈 최소화, 부드러운 주행 달성.

### 보행자 감속 / 정지
특정 웨이포인트(#247, #267)부터 잔여 거리 비례로 **점진적 감속**, 횡단보도에서 **5초 정지** (정지 시간 변수 기록) 후 자동 재출발.

### 정적 장애물 회피
객체 토픽으로부터 **AABB 바운딩 박스** 검출 → 후보 차로 선택 → 로컬 경로 생성. 회피 중 **급가속 문제** 는 곡률 그라디언트 증가 + lattice 경로 최대 속도 5 m/s 제한으로 해결.

> 자세한 영문 원본: [English version](/projects/ros-project-with-morai-sim/)
