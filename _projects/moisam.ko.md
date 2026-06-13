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

## 개요

Moisam은 아주대학교 기숙사 학생을 위한 폐쇄형 공동구매 플랫폼입니다. 비공식 채팅 기반 공동구매에서 발생하는 신뢰, 정산, 참여 관리 문제를 구조화하는 것이 목표였습니다.

- **분야:** 백엔드 / 커뮤니티 커머스
- **기술:** React, Node.js, Express, MySQL, WebSocket, Google OAuth
- **내 역할:** DB 설계, 참여 상태 모델링, 백엔드 데이터 흐름 정리

---

## 문제와 목표

기숙사 공동구매는 비용을 줄일 수 있지만, 참여자 확인과 입금/수령 상태 관리가 어렵습니다. 이 프로젝트는 게시글, 참여자, 결제 상태, 채팅방을 명확히 연결해 공동구매 흐름을 기록 가능한 서비스로 만드는 데 초점을 두었습니다.

---

## 내 역할

- User, Post, Participation, Comment, Chatroom, Chatmessage 중심의 관계형 스키마를 설계했습니다.
- 모집, 참여, 결제 확인, 수령 완료로 이어지는 상태 흐름을 정리했습니다.
- 게시글과 채팅방이 자연스럽게 연결되도록 백엔드 데이터 흐름을 설계했습니다.

---

## 접근과 이슈

MySQL을 선택한 이유는 사용자, 게시글, 참여 기록, 채팅방 사이의 관계가 명확했기 때문입니다. 예상보다 어려웠던 부분은 단순 CRUD보다 “현재 공동구매가 어떤 상태인지”를 안정적으로 표현하는 일이었습니다.

---

## 결과

- 기숙사 공동구매 흐름을 다루는 풀스택 프로토타입을 구현했습니다.
- 실제 사용자 행동을 기준으로 DB 상태와 서비스 흐름을 설계하는 경험을 얻었습니다.
- 신뢰를 만드는 서비스는 인증뿐 아니라 상태 기록과 명확한 프로세스가 필요하다는 점을 배웠습니다.
