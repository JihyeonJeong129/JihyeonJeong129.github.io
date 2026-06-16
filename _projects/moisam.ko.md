---
layout: page
title: Moisam
description: 기숙사 공동구매 플랫폼
img: assets/img/moisam.png
importance: 2
category: Backend
lang: ko
ref: moisam
permalink: /ko/projects/moisam/
---

<p>
<img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black">
<img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white">
<img alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white">
<img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white">
<img alt="WebSocket" src="https://img.shields.io/badge/WebSocket-010101?style=flat">
</p>

<style>
.project-table { width: auto; max-width: 100%; margin: 1.2rem auto; border-collapse: separate !important; border-spacing: 0 5pt !important; }
.project-table th, .project-table td { text-align: left; vertical-align: middle; }
.post article hr { margin-top: calc(1rem + 5pt); margin-bottom: calc(1rem + 5pt); }
</style>

## At a Glance

| 항목 | 값 |
| --- | --- |
| 분야 | 백엔드 / 폐쇄형 커뮤니티 커머스 |
| 기간 | *(채워주세요: YYYY.MM ~ YYYY.MM)* |
| 팀 규모 / 내 비중 | *(채워주세요: 예 — 3명 / 백엔드·DB 단독)* |
| 핵심 스택 | React, Node.js, Express, MySQL, WebSocket, Google OAuth 2.0 |
| 대상 사용자 | 아주대학교 기숙사 학생 (폐쇄 커뮤니티) |
| 다룬 엔티티 | User, Post, Participation, Comment, Chatroom, Chatmessage (6 entities) |
| 핵심 지표 | *(채워주세요: 시범 사용자 수 · 게시글/참여 수 · API 엔드포인트 수 등)* |
| 결과물 | *(채워주세요: GitHub 링크 · 시연 영상/스크린샷)* |
{: .project-table}

한 줄 요약: **Moisam은 채팅 기반 공동구매의 *모집 → 참여 → 결제 → 수령*을 영속 기록과 상태 머신 위에 올린 풀스택 프로토타입입니다.**

---

## Problem & Constraints

기숙사 공동구매는 비용 절감 효과가 있지만, 비공식 채팅으로 진행되면 다음 문제가 반복됩니다.

- 참여자 검증이 어려움 (누가 기숙사 학생인지)
- 결제·수령 상태가 *채팅 히스토리에 흩어짐*
- 주최자가 *수동으로* 참여/입금/배분을 추적
- 신뢰가 캡처와 구두 확인에 의존

또 폐쇄 커뮤니티 특성상 *사용자 풀이 작고*, 외부 사용자가 섞이지 않도록 인증 단계가 필요합니다. 이 프로젝트의 목표는 위 흐름을 *기록 가능한 상태 머신*과 *정규화된 관계형 모델* 위에 다시 설계하는 것이었습니다.

---

## What I Built · How

### 데이터 모델 (핵심 강점)

게시글을 *상태가 있는 객체*로 보고, `Post`와 `Participation`을 분리해 *전체 공동구매 상태*와 *참여자 개별 상태*를 둘 다 추적할 수 있게 했습니다.

```text
User ──< Post ──< Participation >── User
              │
              └─ Chatroom ──< Chatmessage >── User
Post ──< Comment >── User
```

> *(채워주세요: 실제 ERD 이미지 또는 mermaid 다이어그램 1장 — 강점이 가장 잘 드러나는 부분입니다.)*

### 공동구매 상태 머신

```text
[모집중] ──참여마감──▶ [결제대기] ──전원입금──▶ [배분준비]
   │                                              │
   └──조기마감/취소──▶ [취소]                      └──수령완료──▶ [완료]
```

### 핵심 기술 결정

- **MySQL** — 사용자·게시글·참여·결제·채팅 간 *관계와 제약*이 본질이라 관계형이 자연스러움.
- **Google OAuth 2.0** — 비밀번호 직접 관리 회피 + *학교 도메인 이메일*을 통한 학생 그룹 검증의 첫 단계.
- **WebSocket** — 위치/결제/수령 확인은 *대화 중심* 워크플로라 실시간 채팅이 필수.
- **Post ↔ Chatroom 연결** — 확정된 참여자만 들어가는 채팅방을 게시글과 함께 생성 → 운영 대화가 게시글 옆에 붙음.

### 검토 후 채택하지 않은 대안

| 대안 | 채택하지 않은 이유 |
| --- | --- |
| Firebase 등 BaaS | 관계 제약/트랜잭션 표현이 약함, 학습 목적상 백엔드를 직접 다루고 싶었음 |
| NoSQL (MongoDB) | 결제·참여·수령 *상태 일관성*이 핵심이라 정규화된 관계형이 유리 |
| 단일 `Post` 테이블에 상태만 칼럼으로 | 참여자 개별 상태(입금/수령)를 추적할 수 없음 → `Participation`으로 분리 |
{: .project-table}

---

## Results & Demo

- 모집 → 참여 → 결제 → 수령 → 완료의 *전 라이프사이클*을 다루는 풀스택 프로토타입 완성.
- 6개 핵심 엔티티의 정규화된 스키마와 *상태 머신 기반* 백엔드 설계 검증.
- 게시글과 채팅방이 자연스럽게 연결되어 *주최자 운영 부담*을 시스템이 일부 흡수.

> *(채워주세요: GitHub 링크 · 화면 캡처(모집·채팅·결제 상태) 3~4장 · 시범 운영 시 사용자/게시글 수)*

---

## What I'd Do Differently

- **결제 확인 동시성** — *전원 입금 → 상태 전이* 구간에 트랜잭션·낙관적 락 정책을 명시하고 race condition 테스트 케이스 작성.
- **채팅 메시지 영속/순서 보장** — WebSocket 이벤트 손실 시 복구 절차(메시지 ID·재전송) 정의.
- **스키마 IaC화** — Prisma / Liquibase 등으로 마이그레이션을 코드로 관리해 *학교 SSO 연계*나 추후 모델 변경을 안전하게.
- **운영 지표** — 게시글 완료율 / 평균 모집 시간 / 분쟁 발생 비율 등 *서비스 신뢰 지표*를 처음부터 수집.

---

<p class="text-muted small mt-4">
  English version: <a href="{{ '/projects/moisam/' | relative_url }}">Moisam</a>
</p>
