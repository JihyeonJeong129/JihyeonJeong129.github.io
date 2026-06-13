---
layout: page
title: Sejong City Data-Driven Innovation Challenge
description: Public Transport Data Analysis for Festival Accessibility
img: assets/img/sejong_logo.png
importance: 2
category: Data Analytics
lang: en
ref: sejong-data
giscus_comments: true
---

<p>
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="Pandas" src="https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white">
<img alt="SQL" src="https://img.shields.io/badge/SQL-4479A1?style=flat">
<img alt="PCA" src="https://img.shields.io/badge/PCA%20Analysis-9C27B0?style=flat">
<img alt="JupyterHub" src="https://img.shields.io/badge/JupyterHub-F37626?style=flat&logo=jupyter&logoColor=white">
</p>

## Overview

This project analyzed public-transport patterns in Sejong City to propose improvements for festival accessibility and visitor movement. The work was conducted for a data-driven innovation competition and received an Excellence Award from the Mayor of Sejong.

- **Project type:** team competition project
- **Domain:** public transport data analysis / urban festival planning
- **Core stack:** SQL, Python, Pandas, PCA-style analysis, JupyterHub
- **My focus:** data organization, SQL-based analysis, and interpretation of mobility patterns

---

## Problem & Motivation

Large local festivals need more than good events. Visitors must be able to reach the venue, move between nearby attractions, and leave safely after peak-time programs.

The problem we focused on was accessibility:

- Some visitors arrive from outside Sejong through terminals or nearby stations.
- Festival demand changes sharply by date, time, and event type.
- Shuttle or circular-route planning requires evidence from movement data rather than intuition alone.

The project used bus-card and route-related data to understand whether existing transport patterns supported festival growth.

---

## My Role

I contributed mainly to the data and analysis side.

- Organized raw transport data into a structure that could be queried and compared.
- Used SQL to inspect route, transfer, and time-based demand patterns.
- Participated in correlation and principal-component style analysis to identify meaningful signals.
- Helped translate data findings into practical proposals such as shuttle operation and compact visitor routes.

---

## Technical Approach

### Why SQL

Transport data is naturally tabular and query-heavy. SQL made it easier to group records by date, route, stop, and event period, and to compare cases repeatedly without rebuilding the entire analysis pipeline.

### Why Python and Pandas

Python was used for exploration, aggregation, and visualization. Pandas made it easier to move from raw records to comparison tables and charts.

### Why PCA-style analysis

Festival mobility is influenced by multiple variables at once. PCA-style analysis was useful as an exploratory method for reducing dimensions and checking whether event-related patterns were visible in the data.

---

## Implementation & Problem Solving

The project combined two analysis directions:

1. **Route and transfer analysis** for visitors traveling from major access points.
2. **Time-series and event analysis** to compare transport demand around festival programs.

One practical challenge was that transportation signals are noisy. A popular event does not always create a clean bus-demand spike, especially when visitors use cars, taxis, walking routes, or private groups. Because of this, the analysis had to distinguish between strong evidence and weak correlation.

---

## Unexpected Issues

- **Weak signals:** Some expected visitor groups or events did not show strong transport-data correlation.
- **Last-mile problem:** Even if visitors could reach Sejong, the final movement from transit points to venues needed separate planning.
- **Policy translation:** Data findings had to become realistic operations such as shuttle routes, late-night service, or compact walking paths.

---

## Results & Impact

- Proposed shuttle and circular-bus strategies for festival accessibility.
- Identified the need for compact visitor routes connecting venues and nearby commercial areas.
- Suggested content and mobility planning that could improve visitor experience and local economic spillover.
- Received an Excellence Award in the Sejong Big Data Analysis Idea Contest.

---

## Lessons Learned

This project taught me that data analysis is useful only when it reaches an operational decision. The final value was not the chart itself, but the route, shuttle, and visitor-flow suggestions that city planners could understand.
