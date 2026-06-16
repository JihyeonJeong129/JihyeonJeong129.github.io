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

<p>
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white">
<img alt="RAG" src="https://img.shields.io/badge/RAG-FF6F00?style=flat">
<img alt="FAISS" src="https://img.shields.io/badge/FAISS-0467DF?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
</p>

<style>
.project-table { width: auto; max-width: 100%; margin: 1.2rem auto; border-collapse: separate !important; border-spacing: 0 5pt !important; }
.project-table th, .project-table td { text-align: left; vertical-align: middle; }
.post article hr { margin-top: calc(1rem + 5pt); margin-bottom: calc(1rem + 5pt); }
</style>

## At a Glance

| 항목 | 값 |
| --- | --- |
| 분야 | 백엔드 / AI 검색 시스템 (항공기 정비 지원) |
| 기간 | *(채워주세요: YYYY.MM ~ YYYY.MM)* |
| 팀 규모 / 내 비중 | *(채워주세요: 예 — 4명 / 백엔드·RAG 파이프라인 단독)* |
| 핵심 스택 | Python, FastAPI, LangChain 스타일 RAG, FAISS, Docker, Linux |
| 운영 제약 | 폐쇄망(에어갭 가정) 배포 · 권한 기반 접근 · 외부 클라우드 API 사용 불가 |
| 다룬 데이터 | *(채워주세요: 매뉴얼 N건 / 총 N페이지 / 청크 N개)* |
| 핵심 지표 | *(채워주세요: recall@k, MRR, 평균 응답시간 등 — 측정값)* |
| 결과물 | *(채워주세요: GitHub 링크 / 발표자료 / 시연 캡처)* |
{: .project-table}

한 줄 요약: **TACTIX는 항공기 정비 매뉴얼을 *근거*로 답하는, 폐쇄망 배포를 전제로 설계한 RAG 백엔드 프로토타입입니다.**

---

## Problem & Constraints

정비 업무는 긴 매뉴얼과 숙련자의 경험에 강하게 의존합니다. 그래서 (1) 필요한 절차를 찾는 시간이 길고, (2) 경험 차이에 따라 판단 품질이 갈리며, (3) 일반 챗봇은 *근거 없는 답*을 만들 수 있어 정비 도메인에 적용하기 위험합니다.

이 프로젝트는 시작 시점부터 다음 운영 제약을 같이 두고 설계했습니다.

- **폐쇄망 / 에어갭 가정** — 외부 LLM API에 의존하지 않는 구조여야 함
- **근거 기반 응답** — 답변에 *어느 문서의 어느 절*에서 가져왔는지 표시 가능해야 함
- **권한 인지** — 사용자 역할에 따라 접근 가능한 문서 범위가 다를 수 있음
- **문서 교체 가능성** — 매뉴얼 개정 시 *재색인만으로* 지식이 갱신되어야 함

즉 "잘 대답하는 모델" 이전에, *근거를 안전하게 다루는 시스템*이 핵심 목표였습니다.

---

## What I Built · How

### 시스템 흐름

```text
[ 매뉴얼 / 정비 이력 PDF ]
        │
[ 추출 · 정제 · 청킹 · 메타데이터 부착 ]
        │
[ 임베딩 → FAISS 로컬 인덱스 ]
        │
        ▼
[ FastAPI 질의 엔드포인트 ] ── retrieval ──▶ [ Top-K 청크 + 메타데이터 ]
        │
[ 근거 기반 응답 생성 (로컬/사설망 LLM) ]
        │
[ 응답 + 출처(문서명·섹션) 반환 ]
```

### 핵심 기술 결정

- **RAG (생성형 단독 X)** — 정비 답변은 *모델 기억이 아니라 문서 근거*에 묶여야 함. 모델이 바뀌어도 *문서가 진실의 출처*가 되도록.
- **FAISS (관리형 벡터 DB X)** — 로컬 실행이 가능하고 외부 의존성이 없음 → 폐쇄망 가정과 자연스럽게 부합.
- **FastAPI** — 검색·응답 엔드포인트를 가볍게 분리, 추후 인증·권한 미들웨어 부착이 쉬움.
- **모듈러 파이프라인** — 문서 처리 · 색인 · 검색 · 응답 포맷을 *독립 단계*로 분리해 단계별 테스트 가능.

### 검토 후 채택하지 않은 대안

| 대안 | 채택하지 않은 이유 |
| --- | --- |
| OpenAI Embeddings + 외부 LLM API | 폐쇄망 가정에 어긋남 — 시연은 빠르지만 운영 시나리오에서 불가 |
| Pinecone / Weaviate 등 관리형 벡터 DB | 외부 의존성·라이선스, 폐쇄망 배포 부담 |
| 단일 chunk size 고정 | 매뉴얼이 절차/표/경고문 등으로 비균질 → 추후 튜닝 여지를 남김 |
{: .project-table}

### 데이터 파이프라인의 어려움

매뉴얼 문서가 일정하지 않았습니다. 어떤 절은 *절차형*, 어떤 절은 *표*, 어떤 절은 *약어·경고문*이었습니다. 같은 청크 전략이 모든 문서에 잘 동작하지 않아, *청크 크기·메타데이터·검색 필터*를 추후 튜닝할 수 있도록 파이프라인을 단계로 쪼개 두었습니다.

---

## Results & Demo

- **아키텍처 완성** — 문서 수집 → 청킹 → 색인 → 검색 → 근거 기반 응답까지 모듈러 구조로 동작.
- **폐쇄망 배포 시나리오 검증** — 외부 API 없이 *로컬 인덱스 + 로컬/사설 모델* 구성이 가능함을 설계 단계에서 확인.
- **확장 가능 설계** — 매뉴얼 추가·권한 정책 변경 시 *코드 변경 없이* 색인·메타데이터로 대응 가능.
- **운영 제약을 백엔드에 반영** — 정비 도메인의 *근거성 · 권한 · 갱신 · 격리* 요구를 설계에 포함.

> *(채워주세요: retrieval recall@k 또는 MRR · 응답 시간 p50/p95 · 인덱스 크기 · 시연 영상 또는 스크린샷 1장 · GitHub 링크)*

---

## What I'd Do Differently

- **검색 품질을 숫자로 평가하는 절차 정착** — 정비 도메인용 평가 셋(질문-정답 쌍)을 만들어 *recall@k / MRR / 답변 정합성*을 자동 측정.
- **하이브리드 검색** — 의미 검색에 BM25 같은 *키워드 기반*을 결합해, 항공기 부품 코드처럼 *문자열 일치가 더 중요한* 케이스를 보강.
- **권한 모델을 실제 코드까지** — 현재는 설계 단계. 사용자 역할에 따른 *문서 가시성 / 색인 분리*를 구현 단계로 이전.
- **모델 추론 환경 표준화** — 폐쇄망 GPU/CPU 환경별 *모델 패키징(Docker 이미지 + 가중치 묶음)*을 운영 가능한 형태로 정리.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/tactix/' | relative_url }}">TACTIX</a>
</p>
