---
layout: page
title: 2025 Summer PLC Theory & Practice Program
description: Secondary Battery Equipment Control PLC Theory & Practice Program with OMRON
img: assets/img/2025_summer_omron.jpg
importance: 4
category: "Hardware & Embedded"
lang: en
ref: omron-plc-2025
giscus_comments: false
---

<p>
<img alt="OMRON PLC" src="https://img.shields.io/badge/OMRON%20PLC-0066B3?style=flat">
<img alt="Sysmac Studio" src="https://img.shields.io/badge/Sysmac%20Studio-0066B3?style=flat">
<img alt="CX-Programmer" src="https://img.shields.io/badge/CX--Programmer-005BAA?style=flat">
<img alt="Ladder Logic" src="https://img.shields.io/badge/Ladder%20Logic-37474F?style=flat">
<img alt="Industrial I/O" src="https://img.shields.io/badge/Industrial%20I%2FO-455A64?style=flat">
</p>

## Overview

This was a summer hands-on PLC program focused on secondary-battery equipment control using OMRON PLC tools and industrial-control concepts.

- **Program type:** training / practical control-system exercise
- **Duration:** summer 2025
- **Core stack:** OMRON PLC, CX-Programmer, Sysmac Studio, ladder logic, industrial I/O
- **Focus:** I/O mapping, sequence control, safety logic, and debugging

---

## Problem & Motivation

Industrial equipment control requires deterministic behavior. Unlike general software, PLC programs must handle physical I/O, safety interlocks, emergency stops, and predictable sequence transitions.

The goal was to understand how control logic is designed for equipment-like systems rather than only simulated software flows.

---

## My Role

I participated in the theory and practical sessions and implemented control logic during the lab exercises.

- Practiced ladder-logic programming with OMRON tools.
- Mapped sensors, actuators, and control signals into PLC logic.
- Implemented start/stop sequences, alarms, and interlock behavior.
- Debugged behavior by observing I/O state and sequence transitions.

---

## Technical Approach

### Why Ladder Logic

Ladder logic was used because it is widely used in industrial control and maps naturally to relay-like control thinking. It also makes equipment states and interlocks easier to inspect during debugging.

### Why I/O Mapping First

Before writing sequence logic, the I/O relationship had to be clear. A wrong signal mapping can make correct logic behave incorrectly, so the implementation started from understanding input and output roles.

---

## Implementation & Problem Solving

The practice centered on converting equipment behavior into PLC sequence logic:

1. Identify inputs and outputs.
2. Define safe start and stop conditions.
3. Add timer/counter behavior where needed.
4. Implement alarms and interlocks.
5. Debug the sequence through tool feedback and observed I/O states.

---

## Unexpected Issues

- PLC debugging required thinking in scan cycles rather than ordinary procedural code.
- Safety logic had to be considered before convenience behavior.
- Small mistakes in signal assumptions could affect the entire sequence.

---

## Results & Impact

- Gained hands-on experience with OMRON PLC tools and ladder logic.
- Practiced industrial-control thinking around I/O, interlocks, and deterministic operation.
- Connected my software background with physical equipment-control constraints.

---

## Demo Evidence

The demo video below records the PLC practice result and serves as evidence of the implemented control sequence.

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

## Lessons Learned

This program helped me understand that control software is deeply tied to hardware behavior. Reliable automation requires not just code, but clear signal definitions, safe transitions, and careful debugging.
