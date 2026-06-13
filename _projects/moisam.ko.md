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

<!-- ===== Tech Stack ===== -->
<p>
<img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black">
<img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white">
<img alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white">
<img alt="WebSocket" src="https://img.shields.io/badge/WebSocket-010101?style=flat&logo=socket.io&logoColor=white">
<img alt="OAuth" src="https://img.shields.io/badge/Google%20OAuth%202.0-4285F4?style=flat&logo=google&logoColor=white">
<img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white">
<img alt="REST API" src="https://img.shields.io/badge/REST%20API-25A162?style=flat">
<img alt="UUID" src="https://img.shields.io/badge/UUID-6C757D?style=flat">
</p>

## Moida: 기숙사 공동구매 플랫폼 개요
**Moida** 는 아주대학교 기숙사 학생을 대상으로 한 **폐쇄형 커뮤니티 공동구매 플랫폼** 입니다. SNS 기반 비공식 공동구매에서 흔히 발생하는 **신뢰 / 정산 / 참여 이탈** 문제를 해결하면서, 기숙사 인원 한정의 안전한 공동구매 환경을 제공합니다.

- **배경 / 목표**:
  - 기숙사 거주자에게 **안전하고 신뢰할 수 있는 공동구매** 제공
  - SNS형 공동구매의 신뢰·정산·이탈 문제 해결
  - Google OAuth + 기숙사 인증으로 **검증된 사용자 한정** 커뮤니티 구축

- **주요 기능**:
  - 게시글 기반 모집 시스템
  - Google OAuth + 기숙사 인증
  - 공동구매별 **자동 생성 채팅방** (실시간 WebSocket)
  - **에스크로형 결제 모델** — 사전 입금 → 분배 완료 후 주최자에게 정산
  - 댓글 / 사전 문의 시스템
  - 모든 참여자 수령 확인 시 **자동 완료 상태 전환**

- **DB / 구현**:
  - **ER 다이어그램 + 정규화 스키마** (User, Post, Participation, Comment, Chatroom, Chatmessage)
  - **UUID 식별자** 적용 (보안·고유성)
  - Frontend: React (게시글 / 폼 / 댓글 / 채팅)
  - Backend: API + 실시간 WebSocket 채팅

> 자세한 영문 원본: [English version](/projects/moisam/)
