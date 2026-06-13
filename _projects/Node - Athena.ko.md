---
layout: page
title: Node - Athena
description: Lenovo System X3650 기반 개인 홈 서버 (AI / 데이터 사이언스 노드)
img: assets/img/lenovo_x3650_2gpu.jpg
importance: 2
category: "Infrastructure & DevOps"
lang: ko
ref: node-athena
permalink: /ko/projects/node-athena/
---

<p>
<img alt="Lenovo X3650" src="https://img.shields.io/badge/Lenovo%20System%20X3650-E2231A?style=flat&logo=lenovo&logoColor=white">
<img alt="Xeon" src="https://img.shields.io/badge/Intel%20Xeon%20E5--2630%20v4-0071C5?style=flat&logo=intel&logoColor=white">
<img alt="Tesla P100" src="https://img.shields.io/badge/NVIDIA%20Tesla%20P100-76B900?style=flat&logo=nvidia&logoColor=white">
<img alt="JupyterHub" src="https://img.shields.io/badge/JupyterHub-F37626?style=flat&logo=jupyter&logoColor=white">
</p>

## 개요

Node - Athena는 홈랩의 연산 중심 노드입니다. AI 실험, 데이터 분석, 백엔드 프로토타입, JupyterHub 기반 작업을 처리하기 위해 구성했습니다.

- **역할:** Compute / AI / 데이터 분석
- **하드웨어:** Dual Xeon, 80 GB RAM, 2 x Tesla P100
- **기술:** Xen, Linux, Docker, JupyterHub

---

## 문제와 목표

노트북만으로는 GPU 실험, 장시간 실행 작업, 공유 노트북 환경을 안정적으로 운영하기 어려웠습니다. Athena는 이런 실험을 분리된 서버 환경에서 수행하기 위한 노드입니다.

---

## 내 역할

- 서버 환경과 가상화 구성을 직접 설정했습니다.
- JupyterHub와 Docker 기반 실험 환경을 구성했습니다.
- TACTIX, Moisam 등 프로젝트 테스트 환경으로 활용했습니다.

---

## 접근과 이슈

연산 노드를 저장소와 분리해, 실험 실패가 데이터 관리에 영향을 주지 않도록 했습니다. 예상보다 중요한 문제는 GPU/메모리 자원 관리와 오래된 실험 환경 정리였습니다.

---

## 결과

- AI와 백엔드 실험을 위한 재사용 가능한 연산 환경을 구축했습니다.
- 프로젝트를 로컬 데모가 아닌 서버 환경에서 테스트하는 경험을 얻었습니다.

---

<p class="text-muted small mt-4">
  더 자세한 내용은 <a href="{{ '/projects/Node%20-%20Athena/' | relative_url }}">영어 원본 보기</a>에서 확인할 수 있습니다.
</p>
