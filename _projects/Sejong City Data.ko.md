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
giscus_comments: true
---

<!-- ===== Tech Stack ===== -->
<p>
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="Pandas" src="https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white">
<img alt="NumPy" src="https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white">
<img alt="scikit-learn" src="https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white">
<img alt="PCA" src="https://img.shields.io/badge/PCA%20Analysis-9C27B0?style=flat">
<img alt="SQL" src="https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white">
<img alt="Matplotlib" src="https://img.shields.io/badge/Matplotlib-11557C?style=flat">
<img alt="JupyterHub" src="https://img.shields.io/badge/JupyterHub-F37626?style=flat&logo=jupyter&logoColor=white">
</p>

## 세종시 데이터 기반 혁신 챌린지: 축제 접근성 & 모빌리티 인사이트
본 프로젝트는 **버스 교통카드 데이터** 분석을 통해 세종시 축제의 **접근성 / 확장성 / 방문자 경험** 개선 방안을 제안한 것입니다. 교통 패턴, 환승 편의성, 축제 이벤트와 수요의 상관관계를 분석하여 **데이터 기반 모빌리티·운영 정책** 을 도출했습니다.

- **목표**:
  - 외부 방문자의 **축제 접근성** 향상 (버스 노선 모델링)
  - **시계열·상관 분석** 으로 수요 동인 파악
  - 축제 운영 / 교통 정책에 대한 개선안 제시

---

### 노선 / 환승 분석
다중 케이스 모델링 — 터미널 → 시청, 오송역 → 시청, 홍대 → 세종예고 등 — 으로 **최소 환승·도보 거리** 기준의 가장 합리적인 접근 경로를 도출.

---

### 시계열 / 상관 분석
SQL · PCA 기반으로 **세종축제, 빛축제, 불꽃축제** 시기의 교통 패턴 비교.
- 개막식 / 록 페스티벌 / 카운트다운에 **명확한 트래픽 스파이크** 확인
- 블랙이글스 에어쇼·일부 대학 방문은 **예상보다 약한 상관** 관찰

---

### 핵심 제안
- **셔틀 / 순환버스** 운영으로 라스트마일 / 야간 접근 문제 해소
- **세종 중앙공원 콤팩트 노선** 으로 편의성 + 지역 경제 파급 효과
- 세종만의 **고유 콘텐츠 강화** 방향성 제시

> 자세한 영문 원본: [English version](/projects/sejong-city-data/)
