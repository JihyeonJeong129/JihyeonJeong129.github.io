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

<!-- ===== Tech Stack ===== -->
<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="Intel Core i5" src="https://img.shields.io/badge/Intel%20Core%20i5--4670-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Xilinx ZYNQ-7000" src="https://img.shields.io/badge/Xilinx%20ZYNQ--7000-FFCC00?style=flat">
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Xilinx%20Vivado-EE0000?style=flat">
</p>

## Node - Daedalus: FPGA 테스트 서버 개요
현재 인프라에서 **유일한 비-엔터프라이즈 등급** 노드로, **FPGA 시스템 테스트** 에 전적으로 사용됩니다. 특히 Xilinx ZYNQ-7000 플랫폼 실험을 담당합니다.

- **하드웨어**:
  - 자체 조립 PC (비-엔터프라이즈 등급)
  - CPU: Intel Core i5-4670
  - RAM: 8 GB
  - Storage: 2 TB HDD

- **목적**:
  - **FPGA 개발 및 테스트** 전용
  - **Xilinx ZYNQ-7000** 보드 실험

### FPGA 테스트 (Xilinx ZYNQ-7000)
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga_board.jpg"
       title="Xilinx ZYNQ-7000 Test Board"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Daedalus 노드는 **FPGA 프로토타이핑 / 검증** 에 사용됩니다.  
  현재 **Xilinx ZYNQ-7000** 보드를 대상으로 하드웨어-소프트웨어 협업, AXI 인터페이스 검증, 임베디드 시스템 개발 실험을 진행 중입니다.
</div>

---

- **핵심 서비스**: 현재 가동 서비스 없음 (환경 구성 단계)
- **성과**: FPGA 프로젝트용 **경량 테스트 환경** 제공, 향후 하드웨어-소프트웨어 협업 워크플로 확장 예정

---

_🔧 FPGA 관련 상세 결과 / 회고는 환경 구성이 끝나는 대로 추가합니다._

> 자세한 영문 원본: [English version](/projects/node---daedalus/)
