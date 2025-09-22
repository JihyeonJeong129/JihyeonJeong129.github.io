---
layout: page
title: ROS Project with MORAI sim
description: ROS-based autonomous driving project conducted with the MORAI simulation platform
img: /assets/img/morai.png
importance: 3
category: Auto Driving
---

<!-- ===== 프로젝트 개요 ===== -->
## Overview
This project introduces the **ROS-based autonomous driving project** conducted with the **MORAI simulation platform**.  
It focused on implementing **global path tracking, traffic light recognition, pedestrian handling, and obstacle avoidance** to achieve stable autonomous navigation in a simulated urban environment.

- **Hardware/Environment**:  
  - ROS-based software stack  
  - MORAI Autonomous Driving Simulator  
  - GPS-based localization and waypoint system  

- **Mission Goals**:  
  - **Global Path Tracking**  
  - **Traffic Light Recognition**  
  - **Pedestrian Handling**  
  - **Static Obstacle Avoidance**  

---

### Global Path Tracking
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/morai-project/global_path.jpg"
       title="Global Path Tracking"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Implemented **GPS-based global path tracking** with real-time localization.  
  To minimize path deviation, a **PID controller** was applied, ensuring stable and smooth driving along the designated route.
</div>

---

### Pedestrian Deceleration & Stop
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/morai-project/pedestrian_stop.jpg"
       title="Pedestrian Stop Logic"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  At specific waypoints (e.g., #247 and #267), the vehicle begins to **gradually decelerate** in proportion to the remaining distance.  
  Upon reaching the pedestrian crossing, it comes to a **full stop for 5 seconds**, recorded via the stop-time variable,  
  and then automatically resumes driving along the original path.
</div>

---

### Static Obstacle Avoidance
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/morai-project/obstacle_avoidance.jpg"
       title="Static Obstacle Avoidance"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Used **AABB-based bounding box detection** from object topics to identify static obstacles (e.g., parked buses).  
  Candidate lane selection and local path generation allowed safe avoidance.  
  An initial issue of **sudden acceleration** during avoidance was solved by:  
  - Increasing the curve gradient during avoidance maneuvers  
  - Limiting maximum lattice path velocity to **5 m/s**  
  These adjustments stabilized control and eliminated unexpected acceleration.
</div>

---

### Demo Video
<div class="mt-3">
  <iframe
    width="1000"
    height="562"
    src="https://www.youtube.com/embed/zIE8PgRny8g"
    title="PLC Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

- **Outcomes**:  
  - Successfully implemented **global path tracking, traffic light handling, pedestrian stop-and-go, and static obstacle avoidance** in ROS + MORAI environment  
  - Solved real-world inspired problems such as **unstable PID control in sharp curves** and **acceleration spikes during obstacle avoidance**  
  - Built a foundation for applying these algorithms to **real autonomous vehicle platforms** in future work  
