---
layout: page
title: ROS Project with MORAI Simulator
description: ROS-based autonomous driving project conducted with the MORAI simulation platform
img: /assets/img/morai.png
importance: 3
category: "Hardware & Embedded"
lang: en
ref: ros-morai
---

<p>
<img alt="ROS" src="https://img.shields.io/badge/ROS-22314E?style=flat&logo=ros&logoColor=white">
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="MORAI Sim" src="https://img.shields.io/badge/MORAI%20Simulator-00B0F0?style=flat">
<img alt="GPS" src="https://img.shields.io/badge/GPS%20Localization-1E88E5?style=flat">
<img alt="PID" src="https://img.shields.io/badge/PID%20Control-43A047?style=flat">
<img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white">
</p>

## Overview

This project implemented autonomous-driving behaviors in a MORAI simulation environment using ROS. The mission included path tracking, traffic-light handling, pedestrian stop-and-go, and static obstacle avoidance.

- **Project type:** training / team-based autonomous-driving simulation
- **Core stack:** ROS, Python, MORAI Simulator, GPS localization, PID control
- **Focus:** vehicle behavior logic and stable mission completion in simulation

---

## Problem & Motivation

Autonomous-driving logic must respond to multiple road situations, not just follow a route. The project focused on turning mission requirements into deterministic control behavior in a simulator.

The target problems were:

- following a global path with acceptable deviation,
- stopping and restarting around pedestrian zones,
- responding to traffic-light state,
- avoiding static obstacles without unstable acceleration.

---

## My Role

I worked on mission logic and control behavior.

- Implemented GPS-based global path tracking.
- Applied PID control to reduce path deviation.
- Implemented pedestrian stop-and-go logic around target waypoints.
- Tuned obstacle-avoidance behavior to reduce sudden acceleration during lane changes.

---

## Technical Approach

ROS was used because the project depended on topic-based communication between simulator data, localization, perception-like inputs, and control commands.

PID control was selected for path tracking because it is simple, interpretable, and practical for tuning steering behavior in a training simulator. For obstacle handling, the control logic combined object detection information with local path selection and speed limitation.

---

## Implementation & Problem Solving

The project was implemented as a sequence of mission behaviors:

1. Receive localization and route information.
2. Follow the global path with PID-based steering control.
3. Detect mission zones such as pedestrian crossings.
4. Apply deceleration and timed stops.
5. Generate safer behavior around static obstacles.

The most important debugging work was around smoothness. A technically correct avoidance path was not enough if it created sudden speed or steering changes.

---

## Unexpected Issues

- Sharp curves required different PID tuning than straight sections.
- Static obstacle avoidance could create acceleration spikes if path and velocity were not controlled together.
- Simulator missions required careful waypoint-based state management.

---

## Results & Impact

- Completed global path tracking, pedestrian stop-and-go, and static obstacle avoidance behaviors.
- Improved control stability by limiting speed during avoidance and tuning curve behavior.
- Gained practical experience with ROS-based autonomous-driving software structure.

---

## Demo Evidence

The demo video below shows the implemented MORAI simulation mission behavior, including path tracking and mission handling in the simulator.

<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/zIE8PgRny8g"
    title="MORAI ROS Autonomous Driving Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

## Lessons Learned

This project taught me that autonomous-driving behavior is a system problem. Localization, path logic, control tuning, and mission state must work together; improving only one part is not enough.
