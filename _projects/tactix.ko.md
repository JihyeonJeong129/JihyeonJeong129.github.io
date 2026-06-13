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

## 개요

TACTIX는 항공기 정비 매뉴얼과 과거 정비 지식을 더 빠르게 찾기 위한 RAG 기반 정비 지원 시스템 프로토타입입니다.

- **분야:** 백엔드 / AI 검색 시스템
- **기술:** Python, FastAPI, RAG, FAISS, Docker
- **초점:** 문서 전처리, 검색 파이프라인, 폐쇄망 배포 가능성

---

## 문제와 목표

정비 업무는 긴 매뉴얼과 숙련자의 경험에 크게 의존합니다. 필요한 절차를 찾는 데 시간이 오래 걸리고, 경험 차이에 따라 판단 품질이 달라질 수 있습니다. 이 프로젝트는 정비 문서를 기반으로 근거 있는 답변을 제공하는 시스템을 목표로 했습니다.

---

## 내 역할

- 문서 수집 이후 전처리, 청킹, 메타데이터 구성 흐름을 설계했습니다.
- 검색 결과를 기반으로 답변을 구성하는 백엔드 구조를 정리했습니다.
- 인터넷 접근이 제한된 환경에서도 동작할 수 있는 배포 방향을 고려했습니다.

---

## 접근과 이슈

RAG를 선택한 이유는 답변이 모델의 기억이 아니라 문서 근거에 기반해야 했기 때문입니다. 예상보다 어려웠던 점은 매뉴얼 문서의 구조가 일정하지 않아, 청크 크기와 메타데이터 설계가 검색 품질에 큰 영향을 준다는 점이었습니다.

---

## 결과

- 정비 문서 기반 검색/응답 시스템의 프로토타입 구조를 만들었습니다.
- AI 기능을 실제 운영 제약, 권한, 폐쇄망 환경과 함께 고려하는 경험을 얻었습니다.
- 백엔드, 문서 검색, 인프라 배포 관점을 함께 다룬 프로젝트였습니다.
