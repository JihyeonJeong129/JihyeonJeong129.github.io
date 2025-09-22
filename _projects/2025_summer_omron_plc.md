---
layout: page
title: 2025 Summer PLC Theory & Practice Program
description: Secondary Battery Equipment Control PLC Theory & Practice Program with OMRON
img: assets/img/2025_summer_omron.jpg
importance: 2
category: PLC
giscus_comments: true
---

<!-- ===== 프로젝트 개요 ===== -->
## Program Overview
This program focuses on **PLC theory & hands-on practice** for secondary battery equipment control (OMRON PLC).
Participants will learn ladder logic, device interfacing (I/O mapping), safety interlocks, and practical debugging
with real equipment scenarios.

- Duration: 4 weeks (Summer 2025)
- Hardware: OMRON PLC (CJ/CP/NX series), digital I/O modules, sensors/actuators
- Software: CX-Programmer / Sysmac Studio
- Outcomes: Build & test a mini cell-handling demo line with safe starts/stops, alarms, and interlocks

---

<!-- ===== 주요 사진 3열 갤러리 ===== -->
### Highlights
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       loading="eager"
       path="/assets/img/plc-2025/panel_wiring.jpg"
       title="Control panel wiring"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       loading="eager"
       path="/assets/img/plc-2025/ladder_debug.jpg"
       title="Ladder logic debugging"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       loading="eager"
       path="/assets/img/plc-2025/safety_interlock.jpg"
       title="Safety interlock test"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  From left: control panel wiring, ladder debugging session, and safety interlock verification.
</div>

<!-- ===== 텍스트 섹션 ===== -->
### What We Built
We implemented a start/stop sequence, emergency stops, alarm latching, and a cell-handling routine with limit switches.
Participants practiced **I/O mapping**, **timers/counters**, **edge detection**, and **fault recovery** flows.

---

<!-- ===== 단일(풀/2/3) 이미지 예시 ===== -->
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/plc-2025/hmi_overview.jpg"
       title="HMI overview screen"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/plc-2025/io_table.jpg"
       title="I/O mapping table"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  2/3 + 1/3 layout: HMI overview and I/O table snapshot.
</div>

---

<!-- ===== 유튜브 영상 임베드 ===== -->
### Demo Video
<!-- 방법 A: 테마에 youtube include가 있을 때 (al-folio는 보통 지원)
     사용 예: {% include youtube.liquid id="YOUTUBE_VIDEO_ID" %}
     아래 라인을 주석 해제해서 사용하세요. -->
{%- comment -%}
{% include youtube.liquid id="YOUTUBE_VIDEO_ID" %}
{%- endcomment -%}

<!-- 방법 B: iframe 임베드 (테마가 youtube.liquid 없을 때 사용) -->
<div class="mt-3">
  <iframe
    width="1000"
    height="562"
    src="https://www.youtube.com/embed/ruMg5BIu5Ws"
    title="PLC Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>


---

<!-- ===== 추가 갤러리 (원하는 만큼 복제) ===== -->
### More Photos
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/plc-2025/wiring_detail.jpg"
       title="Wiring detail"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/plc-2025/omron_plc.jpg"
       title="OMRON PLC module"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/plc-2025/sensor_test.jpg"
       title="Sensor test"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Wiring detail, PLC module, and sensor IO test during commissioning.
</div>
