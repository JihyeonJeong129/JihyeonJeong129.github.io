---
layout: page
title: FPGA WorldClock
description: FPGA-based Digital World Clock with 7-Segment & Keypad
img: assets/img/world_clock_fpga.png
importance: 2
category: "Hardware & Embedded"
lang: en
ref: fpga-worldclock
permalink: /projects/fpga-worldclock/
---

<p>
<img alt="Verilog" src="https://img.shields.io/badge/Verilog%20HDL-B22222?style=flat">
<img alt="FPGA" src="https://img.shields.io/badge/FPGA-FFCC00?style=flat">
<img alt="Xilinx" src="https://img.shields.io/badge/Xilinx-EE0000?style=flat">
<img alt="Vivado" src="https://img.shields.io/badge/Vivado-EE0000?style=flat">
<img alt="7-Segment" src="https://img.shields.io/badge/7--Segment%20Display-455A64?style=flat">
<img alt="FSM" src="https://img.shields.io/badge/State%20Machine-3F51B5?style=flat">
</p>

## Overview

FPGA WorldClock is a digital logic project that displays the current time for Seoul and major international cities using a 7-segment display and keypad input.

- **Project type:** coursework / FPGA implementation
- **Core stack:** Verilog HDL, Vivado, FPGA board, 7-segment display, keypad input
- **Focus:** clock division, finite-state-machine design, keypad control, and time-zone calculation

---

## Problem & Motivation

A world clock looks simple from the outside, but implementing it on FPGA requires explicit control over timing, state, input handling, and display output. There is no operating system or high-level time library to hide these details.

The goal was to build a working digital system that could:

- accept initial time input,
- update time every second,
- switch between cities,
- handle hour and minute overflow,
- display 12-hour AM/PM mode.

---

## My Role

I implemented the digital logic and verified the behavior on the FPGA board.

- Designed the state flow for time setting and city selection.
- Implemented clock division from the board clock to a 1-second tick.
- Built time adjustment logic for multiple time zones.
- Added exception handling for minute/hour overflow and underflow.

---

## Technical Approach

### Why FSM

The system had multiple modes: idle, hour setting, minute setting, running clock, and city selection. A finite-state-machine structure made the mode transitions explicit and easier to verify.

### Why Modular Verilog

The design was separated into logical parts such as keypad input handling, time counting, city offset calculation, AM/PM conversion, and display control. This made debugging easier because each module had a clear responsibility.

---

## Implementation & Problem Solving

The hardest part was synchronizing user input with time updates. Keypad input can change the selected mode or value, while the clock tick updates time independently.

To reduce unexpected behavior, the implementation separated:

1. input interpretation,
2. state transition,
3. time calculation,
4. display conversion.

This helped prevent input-related bugs from directly corrupting the displayed time.

---

## Unexpected Issues

- Time underflow and overflow had to be handled manually.
- Keypad input needed debouncing or careful interpretation to avoid repeated actions.
- City selection required a clear rule for date-crossing cases such as negative hour offsets.

---

## Results & Impact

- Implemented a working multi-city digital clock on FPGA.
- Verified 1-second time updates, city switching, and AM/PM conversion.
- Practiced low-level digital design with explicit timing and state control.

---

## Lessons Learned

This project helped me understand why hardware logic design requires careful state thinking. Small assumptions that are trivial in software, such as time overflow, must be designed explicitly in Verilog.
