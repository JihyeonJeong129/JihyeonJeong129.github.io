---
layout: page
title: Node - Daedalus
description: FPGA 시스템 테스트 전용 노드
img: assets/img/samsung_desktop.jpg
importance: 5
category: "Infrastructure & DevOps"
lang: ko
ref: node-daedalus
permalink: /ko/projects/node-daedalus/
---

<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="Xilinx ZYNQ-7000" src="https://img.shields.io/badge/Xilinx%20ZYNQ--7000-FFCC00?style=flat">
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Xilinx%20Vivado-EE0000?style=flat">
</p>

## 개요

Node - Daedalus는 FPGA와 임베디드 실험을 분리하기 위한 하드웨어 테스트 노드입니다.

- **역할:** FPGA / Embedded Test
- **기술:** Linux, Vivado, Verilog HDL, Xilinx ZYNQ-7000

---

## 문제와 목표

FPGA 개발은 보드 드라이버, 벤더 툴, 로컬 설정의 영향을 많이 받습니다. 다른 서버 환경과 섞지 않고 안정적인 테스트 환경을 유지하는 것이 목표였습니다.

---

## 내 역할

- FPGA 개발 도구와 테스트 환경을 구성했습니다.
- ZYNQ-7000 보드 실험을 위한 전용 노드로 정리했습니다.

---

## 접근과 이슈

이 노드는 성능보다 환경 분리가 핵심입니다. 예상보다 중요한 점은 툴체인 버전과 보드 연결 절차를 문서화하는 일이었습니다.

---

## 결과

- 홈랩 안에 하드웨어 실험 전용 공간을 분리했습니다.
- Verilog, Vivado, 보드 테스트 경험을 축적할 수 있는 기반을 만들었습니다.
