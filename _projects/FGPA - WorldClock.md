---
layout: page
title: FPGA WorldClock
description: FPGA-based Digital World Clock with 7-Segment & Keypad
img: assets/img/world_clock_fpga.jpg
importance: 2
category: "Hardware & Embedded"
lang: en
ref: fpga-worldclock
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

<!-- ===== 프로젝트 개요 ===== -->
## FPGA WorldClock: Digital Multi-City Time Display System
This project introduces **WorldClock**, an FPGA-based digital system that displays the current time in **Seoul and 5 major cities worldwide (London, Paris, Tokyo, LA, New York)** using a **7-Segment display and keypad input**:contentReference[oaicite:0]{index=0}.  
The system emphasizes **real-time digital logic design**, **time-zone calculation**, and **user interaction** through Verilog HDL.

- **Goals**:  
  - Implement a **world clock** capable of showing multiple city times with time difference adjustment  
  - Use **Keypad input** for time setting, city selection, and reset  
  - Extend functionality with **AM/PM display (12-hour mode)** for enhanced usability  
  - Gain practical FPGA experience in **clock division, state machines, and exception handling**  

---

### Key Features
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga-worldclock/time_setting.jpg"
       title="Initial Time Setting"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga-worldclock/city_selection.jpg"
       title="City Selection via Keypad"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga-worldclock/am_pm_display.jpg"
       title="AM/PM Implementation"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  From left: **Seoul time setting**, **city selection using keypad**, and **12-hour mode with AM/PM display**.
</div>

- **Initial Time Setup**: Set Seoul’s current time (hours & minutes) using **SET, Plus, Minus** keys:contentReference[oaicite:1]{index=1}.  
- **City Selection**: Switch between cities using keypad buttons; system adjusts time with **time-zone offsets**.  
- **AM/PM Mode**: Converts 24-hour format to **12-hour format with AM/PM indicators**.  
- **Reset Function**: Reset button restores display to default `--0000`.  

---

### System Architecture & Verilog Design
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga-worldclock/architecture.jpg"
       title="System Block Diagram"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Block diagram showing **keypad input logic, clock divider, city selection logic, AM/PM conversion, and 7-Segment display control**:contentReference[oaicite:2]{index=2}.
</div>

- **Clock Divider**: 50 MHz base clock divided to 1-second tick  
- **State Machine**: Controls modes (Idle → Set Hour → Set Minute → Running Clock → City Selection)  
- **Exception Handling**: Prevents underflow/overflow in hour/minute adjustment (e.g., -1 → 23, 60 → 0)  
- **Parallel Signals**: Used to synchronize variable updates across modules  

---

### Results & Demonstration
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga-worldclock/seoul_display.jpg"
       title="Seoul Display"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga-worldclock/london_display.jpg"
       title="London Display"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/fpga-worldclock/ny_display.jpg"
       title="New York Display"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Example outputs: **Seoul time**, **London time adjusted by -9 hours**, **New York time adjusted by -14 hours**:contentReference[oaicite:3]{index=3}.
</div>

- Verified **time increment per second** works correctly (sec → min → hour cascade)  
- Confirmed **city switching logic** displays proper time-zone adjusted values  
- AM/PM correctly toggled with 12-hour mode conversion  

---

### Reflections
- Gained hands-on experience with **Verilog HDL, digital clock design, and keypad-driven interfaces**  
- Learned importance of **clock management** and **state synchronization** in FPGA designs  
- Implemented **exception handling** for time underflow/overflow and invalid input states  
- Identified possible improvement: system currently requires Seoul time setup before city selection; future version should allow **flexible input order** without errors:contentReference[oaicite:4]{index=4}  

---

- **Outcomes**:  
  - Fully implemented **multi-city FPGA world clock** with AM/PM and city-switching  
  - Achieved stable real-time operation synchronized with actual clock flow  
  - Improved understanding of **time-domain digital systems** and FPGA-based user interfaces  
