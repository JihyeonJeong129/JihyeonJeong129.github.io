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

## 개요

MORAI 시뮬레이터에서 ROS 기반 자율주행 미션을 구현한 프로젝트입니다. 전역 경로 추종, 보행자 정지, 신호 처리, 정적 장애물 회피를 다뤘습니다.

---

## 문제와 목표

자율주행은 단순 경로 추종뿐 아니라 보행자, 장애물, 신호 등 여러 상황을 함께 처리해야 합니다. 시뮬레이터 환경에서 안정적으로 미션을 완료하는 것이 목표였습니다.

---

## 내 역할

- GPS 기반 전역 경로 추종 로직을 구현했습니다.
- PID 제어를 적용해 경로 이탈을 줄였습니다.
- 보행자 구간 정지/재출발 및 정적 장애물 회피 로직을 조정했습니다.

---

## 접근과 이슈

ROS topic 구조를 활용해 위치, 객체, 제어 명령을 분리했습니다. 예상보다 어려웠던 부분은 장애물 회피 중 급가속이 발생하지 않도록 속도와 경로를 함께 조정하는 일이었습니다.

---

## 결과

- 전역 경로 추종, 보행자 정지, 정적 장애물 회피를 구현했습니다.
- ROS 기반 자율주행 소프트웨어 구조와 제어 튜닝 경험을 얻었습니다.

---

## 데모 영상

아래 영상은 MORAI 시뮬레이터에서 구현한 자율주행 미션 동작을 확인하기 위한 결과물입니다.

<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/zIE8PgRny8g"
    title="MORAI ROS Autonomous Driving Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
