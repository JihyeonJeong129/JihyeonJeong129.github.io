---
layout: page
title: 세종시 데이터 기반 혁신 챌린지
description: 축제 접근성 향상을 위한 대중교통 데이터 분석
img: assets/img/sejong_logo.png
importance: 2
category: Data Analytics
lang: ko
ref: sejong-data
permalink: /ko/projects/sejong-data/
giscus_comments: false
---

<p>
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="Pandas" src="https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white">
<img alt="SQL" src="https://img.shields.io/badge/SQL-4479A1?style=flat">
<img alt="PCA" src="https://img.shields.io/badge/PCA%20Analysis-9C27B0?style=flat">
</p>

<style>
.project-table { width: auto; max-width: 100%; margin: 1.2rem auto; border-collapse: separate !important; border-spacing: 0 5pt !important; }
.project-table th, .project-table td { text-align: left; vertical-align: middle; }
.post article hr { margin-top: calc(1rem + 5pt); margin-bottom: calc(1rem + 5pt); }
</style>

## At a Glance

| 항목 | 값 |
| --- | --- |
| 분야 | 데이터 분석 / 도시 이동성 (축제 접근성) |
| 기간 | *(채워주세요: YYYY.MM ~ YYYY.MM)* |
| 팀 규모 / 내 비중 | *(채워주세요: 예 — 4명 / 데이터 정리·SQL 분석·해석 담당)* |
| 핵심 스택 | SQL, Python, Pandas, PCA 기반 탐색 분석, JupyterHub |
| 다룬 데이터 | 버스 카드 / 노선 / 시간대별 수요 *(채워주세요: 노선 N개 · 행 N만 · 기간 N개월)* |
| 수상 | **세종특별자치시장상 우수상** — 세종 빅데이터 분석 아이디어 공모전 |
| 결과물 | *(채워주세요: 발표자료 / 수상 증빙 링크 / GitHub)* |
{: .project-table}

한 줄 요약: **세종시 대중교통 데이터를 분석해, *차트가 아닌 셔틀·순환 노선 제안*으로 이어진 정책형 데이터 분석 프로젝트입니다.**

---

## Problem & Constraints

지역 축제는 콘텐츠만으로는 부족하고, *방문객이 얼마나 편하게 도착·이동·귀가*하느냐가 함께 중요합니다. 이 프로젝트는 교통 데이터를 근거로 *직관 대신 증거 기반*의 셔틀·동선을 설계할 수 있는지 확인하는 게 목표였습니다.

본 질적 제약이 몇 개 있었습니다.

- **외부 방문객 유입**이 터미널·인접역을 통해 들어옴 → 진입점이 제한적
- 행사 수요가 날짜·시간·프로그램 종류에 따라 *그래프가 자주 잔뜰*
- 행사와 교통 신호 사이의 상관이 *대체이동수단(자가용·택시·도보)* 때문에 희석됨
- *마지막 1km* 문제 — 교통점에서 행사장까지의 동선은 안 보임

---

## What I Built · How

### 분석 두 줄기로 구성

1. **노선·환승 분석** — 주요 진입점 기준으로 방문객 동선 파악
2. **시계열·이벤트 분석** — 축제 프로그램 주변 교통 수요 비교

### 도구 선택

- **SQL** — 날짜·노선·정류장·축제 기간 기준의 *반복 집계·조건 비교*에 가장 적합.
- **Python / Pandas** — 탐색 분석, 집계, 시각화.
- **PCA** — 여러 변수(시간대·요일·날씨·행사 종류)가 동시에 영향을 주는 구간에서 *축제 신호*가 차원 축소 이후에도 보이는지 확인.

### 검토 후 채택하지 않은 접근

| 접근 | 채택하지 않은 이유 |
| --- | --- |
| 단일 노선별 탑 N 기준 제안 | 대체 교통수단이 많아 버스 수요만으로는 축제 영향을 과소 평가할 위험 |
| 단순 시각화만으로 마무리 | *정책 제안*까지 이어지지 않으면 공모전 평가 기준과 어긋난다고 판단 |
{: .project-table}

### 신호가 약한 현상과 대응

인기 있는 행사가 항상 깨끗한 버스 수요 증가로 냘아지지는 않았습니다 — 방문객이 차·택시·도보를 이용하면 신호가 *분산*되기 때문입니다. 따라서 분석에서는 *강한 증거와 약한 상관*을 구분하고, 해석에서도 과도 일반화를 피했습니다.

---

## Results & Demo

- 축제 접근성 개선을 위한 **셔틀·순환버스 운영 전략** 제안.
- 주요 장소와 자그마단 상권을 연결하는 **압축 동선** 제안.
- 콘텐츠 + 이동성 계획을 결합해 *방문객 경험 개선 · 지역 경제 낙수*로 이어지는 제안으로 마무리.
- **세종특별자치시장상 우수상 수상** (세종 빅데이터 분석 아이디어 공모전).

> *(채워주세요: PCA 결과 시각화 1장 · 세종시 셔틀 제안 동선 1장 · 발표자료 링크 · 수상 증빙 링크)*

---

## What I'd Do Differently

- **데이터 출처·스키마·규모를 정량으로 기록** — 현재는 추상적. 노선 수·행 수·기간·행사 수가 적혀야 분석 신뢰도가 올라감.
- **다중 데이터 결합** — 버스 단독의 *약한 신호*를 보완하기 위해 택시·통신·지역 카드 데이터를 결합.
- **제안의 시뮬레이션** — 셔틀 N대 투입 → 대기시간 X분 감소 같은 *정량 효과*를 추산해 제안의 설득력 강화.
- **제안 채택 여부 추적** — 수상 이후 *실제 운영에 반영되었는지*까지 후행 기록.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/Sejong%20City%20Data/' | relative_url }}">Sejong City Data-Driven Innovation Challenge</a>
</p>
