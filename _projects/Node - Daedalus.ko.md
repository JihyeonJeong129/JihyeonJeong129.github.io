---
layout: page
title: Node - Daedalus
description: FPGA / PCIe / NIC 등 하드웨어 테스트 전용 노드
img: assets/img/samsung_desktop.jpg
importance: 5
category: "Infrastructure & DevOps"
lang: ko
ref: node-daedalus
permalink: /ko/projects/node-daedalus/
server_photos:
  - /assets/img/Daedalus - FPGA1.png
  - /assets/img/Daedalus - FPGA2.jpg
---

<p>
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="Intel Core i5" src="https://img.shields.io/badge/Intel%20Core%20i5--4670-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Xilinx ZYNQ-7000" src="https://img.shields.io/badge/Xilinx%20ZYNQ--7000-FFCC00?style=flat">
<img alt="Xilinx Kintex UltraScale+" src="https://img.shields.io/badge/Xilinx%20Kintex%20UltraScale%2B-FFCC00?style=flat">
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Xilinx%20Vivado-EE0000?style=flat">
</p>

<style>
.home-server-table {
  width: auto;
  max-width: 100%;
  margin: 1.2rem auto;
  border-collapse: separate !important;
  border-spacing: 0 !important;
}

.home-server-table th,
.home-server-table td {
  text-align: center;
  vertical-align: middle;
}

.home-server-spaced-table {
  border-spacing: 0 5pt !important;
}

.post article hr {
  margin-top: calc(1rem + 5pt);
  margin-bottom: calc(1rem + 5pt);
}

.home-server-overview-image {
  display: block;
  width: 80%;
  max-width: 100%;
  height: auto;
  margin: 1.2rem auto;
}

.daedalus-server-carousel {
  max-width: 850px;
  margin: 1.2rem auto 2rem;
}

.daedalus-server-carousel .carousel-inner {
  height: 500px;
  background: #111;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.daedalus-server-carousel .carousel-item,
.daedalus-server-carousel .carousel-item img {
  width: 100%;
  height: 100%;
}

.daedalus-server-carousel .carousel-item img {
  object-fit: contain;
}

@media (max-width: 767px) {
  .daedalus-server-carousel .carousel-inner {
    height: 55vw;
  }
}
</style>

> 홈랩 전체 구조는 [홈 서버 인프라 개요]({{ '/ko/projects/home-server-overview/' | relative_url }})를 참조하세요.

## At a Glance

| 항목 | 값 |
| --- | --- |
| 역할 | Hardware Test (FPGA · PCIe · NIC) |
| 하드웨어 | 커스텀 PC, Intel Core i5-4670, 8 GB RAM, 2 TB HDD |
| 연결 장비 | Xilinx ZYNQ-7000 FPGA & Xilinx Kintex UltraScale+ FPGA 보드|
| OS / 하이퍼바이저 | Ubuntu (bare metal, 하이퍼바이저 없음) |
| 외부 공개 포트 | 없음 |
| 운영 시작 | 2025년 이후 |
| 현재 상태 | 운영 중 (실험 단위로 가동) |
{: .home-server-table .home-server-spaced-table}

한 줄 요약: **Daedalus는 FPGA·PCIe 같은 물리 장비를 다른 워크로드와 섞지 않기 위해 따로 떼어 둔 베어메탈 노드입니다.**

---

## What Runs Here

Daedalus는 *항상 켜 두는 서비스 노드가 아니라, 하드웨어 테스트에 사용하는 노드*입니다.

**연결 장비 / 사용 툴**

| 영역 | 구성 |
| --- | --- |
| FPGA 보드 | Xilinx ZYNQ-7000 시리즈 (USB-JTAG), Xilinx Kintex UltraScale+ FPGA (JTAG) |
| 호스트 OS | Ubuntu, 18.04 LTS |
| 네트워크 | WireGuard 클라이언트로 Hades / Athena 내부망 접근 |
{: .home-server-table .home-server-spaced-table}

**테스트 WorkFlow**

<img class="home-server-overview-image" src="{{ '/assets/img/Daedalus - devflow.png' | relative_url }}" alt="FPGA 빌드 시퀀스 이미지">

---

## Key Decisions

#### - 왜 베어메탈 Ubuntu인가 (하이퍼바이저 없음)
Athena·Hades와 달리 Daedalus에는 의도적으로 하이퍼바이저를 두지 않았습니다.

- **USB-JTAG / PCIe 패스스루의 복잡도 회피.** 하이퍼바이저를 두면 USB·PCIe 장치를 게스트에 정확히 넘기는 절차가 한 단계 더 늘어나고, 벤더 툴이 *호스트에서 직접 보이는 장비*를 가정하는 경우가 많아 디버깅이 어려진다고 판단했습니다.
- **Daedalus 노드의 가치 ≠ 가용성.** 항상 켜져 있을 필요가 없으므로 VM 격리/마이그레이션의 이득이 작다고 판단했습니다.

#### - 왜 Ubuntu인가
Xilinx Vivado와 ZYNQ 보드 드라이버는 Ubuntu LTS에서 가장 안정적으로 동작하고, 벤더 문서·커뮤니티 자료도 Ubuntu 기준이 가장 많습니다. CentOS/RHEL도 공식 지원되지만, 개인 환경에서는 자료 접근성이 좋은 Ubuntu가 적합하다고 판단했습니다.

---

## Operations & Incidents

**평상시 운영**
- 실험할 때만 부팅, 평소엔 꺼 둠 (전력/소음 감소)
- 산출물(`.bit`, 로그, 파형 캡처)은 실험 종료 시 NAS 백업 경로에 복사

**장애 사례 — 커널 버전 이슈로 NIC가 인식되지 않음**

상황: Ubuntu 18.04 LTS의 4.x 커널은 해당 NIC/cndm 드라이버가 요구하는 커널 기능과 맞지 않아, NIC 인식 및 커널 모듈 빌드 과정에서 호환성 문제가 발생했습니다.

알아챌 경위: 빌드 실패 원인을 추적하는 과정에서, 실행 중인 커널 버전과 장치 드라이버·커널 헤더 사이의 호환성 문제를 발견했습니다.

대응:
1. **커널 업데이트.** Ubuntu 18.04 LTS의 커널을 기존 4.x에서 `5.4.0-150`으로 업데이트했습니다.
2. **재부팅 및 버전 확인.** 원격으로 시스템을 재부팅한 뒤 SSH로 다시 접속해 새 커널로 부팅되었는지 확인했습니다.
3. **장치 및 빌드 환경 점검.** 5.4 커널에서 NIC가 정상적으로 열거되는 것을 확인하고, 해당 버전의 커널 헤더를 설치한 뒤 `cndm` 모듈 빌드를 재시도해 `cndm.ko`를 정상 생성했습니다.

배운 점: 하드웨어 드라이버나 커널 모듈을 빌드할 때는 OS 버전뿐 아니라 *실행 중인 커널, 커널 헤더, 장치 드라이버의 호환성*을 함께 맞춰야 한다는 것을 체감했습니다.

---

## Limitations & Next Steps

**지금 부족한 점**
- 하이퍼바이저가 없어 실험 환경이 호스트 OS에 직접 얽혀 있음 — 드라이버·커널을 건드리는 작업이 호스트 전체에 영향을 줌 (실험별 격리가 약함)
- 커널/드라이버 환경을 재현할 수 있게 기록해 두지 않음 — NIC 사건처럼 환경을 맞추는 과정이 문서화되어 있지 않음
- USB-JTAG/PCIe 장비 구성이 물리 연결에 의존 — 원격에서 장비를 교체·재연결할 수 없음

**다음에 개선할 것**
- Vivado·드라이버 빌드 환경을 **이미지/스크립트로 고정**해, "커널 5.4 + 특정 헤더 + 드라이버" 조합을 *재현 가능한 형태*로 고정
- 장비 연결·커널 파라미터·빌드 절차를 실험 노트로 남겨 *다음 테스트*에서도 같은 상태를 재현할 수 있게 정리

---

## Photo

<div id="daedalusServerCarousel" class="carousel slide daedalus-server-carousel" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for photo in page.server_photos %}
    <li data-target="#daedalusServerCarousel" data-slide-to="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}"></li>
    {% endfor %}
  </ol>

  <div class="carousel-inner">
    {% for photo in page.server_photos %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <img src="{{ photo | relative_url }}" alt="Daedalus 서버 사진 {{ forloop.index }}">
    </div>
    {% endfor %}
  </div>

  <a class="carousel-control-prev" href="#daedalusServerCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#daedalusServerCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/Node%20-%20Daedalus/' | relative_url }}">Node - Daedalus</a>
</p>
