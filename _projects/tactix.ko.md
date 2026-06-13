---
layout: page
title: TACTIX
description: RAG 기반 항공기 정비 지원 시스템
img: assets/img/tactix.jpg
importance: 1
category: Backend
lang: ko
ref: tactix
permalink: /ko/projects/tactix/
---

<!-- ===== Tech Stack ===== -->
<p>
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white">
<img alt="LangChain" src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat&logo=langchain&logoColor=white">
<img alt="LLM" src="https://img.shields.io/badge/LLM-412991?style=flat&logo=openai&logoColor=white">
<img alt="RAG" src="https://img.shields.io/badge/RAG-FF6F00?style=flat">
<img alt="Vector DB" src="https://img.shields.io/badge/Vector%20DB-1F77B4?style=flat">
<img alt="FAISS" src="https://img.shields.io/badge/FAISS-0467DF?style=flat&logo=meta&logoColor=white">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
<img alt="Air-gapped" src="https://img.shields.io/badge/Air--gapped%20Network-455A64?style=flat">
</p>

## 개요
**TACTIX** 는 **항공기 정비 지식 검색 · 의사결정 지원** 을 목표로 하는 AI 기반 시스템입니다. 인력 감축 · 전문성 격차 · 장비 복잡도 증가가 동시에 진행되는 현대 군 정비 환경에서, **빠르고 정확한 정비 지원** 을 제공하는 것을 목적으로 합니다.

- **배경 / 동기**:
  - 인력 감소 + 정비 품질·효율에 대한 우려
  - 정비는 단순 반복이 아닌 **수기 해석 + 사례 기반 판단 + 맥락적 추론** 의 영역
  - 실제 현장에서는 **Q&A 루프의 시간 소모**, **인원별 전문성 격차** 가 큰 비효율로 작용
  - **LLM + Expert System + RAG** 결합으로 정비 매뉴얼·과거 사례 검색을 통합한 **AI 기반 지식 탐색 시스템** 의 필요성 도출

---

### 주요 특징
- **하이브리드 AI 시스템**:
  - **LLM** (맥락 답변) + **규칙 기반 Expert System** (도메인 로직) + **RAG** (문서 근거 검색)
  - 단순 정보 조회가 아닌 **단계별 정비 가이드** 제공
- **벡터 DB**:
  - 매뉴얼 + 이력 데이터 청킹·임베딩
  - **5초 이내 검색 / 95%+ 정확도**
- **보안 배포**:
  - **에어갭(폐쇄망)** 환경 구동 — 인터넷 불필요
  - **계급 / 역할 기반 접근 제어**

---

### 시스템 아키텍처
**데이터 전처리 → 벡터 DB → RAG 파이프라인 → LLM 추론 → 규칙 기반 Expert 모듈** 이 폐쇄 군 인트라넷 환경에서 통합됩니다.

> 자세한 영문 원본: [English version](/projects/tactix/)
