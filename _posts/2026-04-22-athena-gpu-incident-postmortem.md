---
layout: post
title: "[장애기록] Athena 노드 GPU 인식 실패 — Tesla P100이 사라진 30분"
date: 2026-04-22 02:14:00 +0900
description: JupyterHub 사용자가 "GPU가 안 보인다"고 신고한 사건. 원인 분석부터 임시 조치, 재발 방지까지의 전체 타임라인.
tags: home-lab incident postmortem nvidia gpu xen jupyterhub
categories: home-lab
lang: ko
ref: athena-gpu-incident
permalink: /ko/blog/2026/athena-gpu-postmortem/
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

> **본 글은 작성 중입니다 (placeholder).** 실제 장애 사례 기반 포스트모템 템플릿으로, 향후 동일 형식으로 모든 장애를 기록할 예정.

## 요약 (TL;DR)

- **영향**: [Athena](/projects/node---athena/) 노드의 JupyterHub 사용자 4명이 약 28분 동안 GPU 사용 불가
- **원인 (가설)**: Xen DomU에서 PCI passthrough된 Tesla P100 한 장이 IOMMU 그룹 충돌로 detach
- **복구**: VM 재부팅 + DomU 커널 모듈 재로드로 정상화
- **재발 방지**: 부팅 시 `nvidia-smi` health check를 systemd 유닛으로 추가, 실패 시 Discord 알람

## 타임라인 (KST)

| 시각 | 이벤트 |
|---|---|
| 01:42 | 사용자 A: "JupyterHub에서 `torch.cuda.is_available()`가 False" 신고 |
| 01:46 | SSH 접속 → `nvidia-smi`: GPU 0만 보임, GPU 1 누락 |
| 01:50 | `dmesg` 확인 → `NVRM: GPU at 0000:af:00.0 has fallen off the bus` |
| 01:55 | Dom0 → DomU detach/attach 시도 실패 |
| 02:05 | 영향 받은 DomU 강제 재부팅 |
| 02:10 | `nvidia-smi` 양쪽 GPU 정상 인식 |
| 02:14 | JupyterHub 세션 재기동, 사용자 신고 종결 |

## 5 Whys (간이 분석)

1. **왜 GPU가 사라졌나?** → 커널 로그상 PCIe 링크가 한순간에 끊김
2. **왜 링크가 끊겼나?** → IOMMU 그룹 재할당 중 타이밍 이슈로 추정
3. **왜 IOMMU 그룹이 흔들렸나?** → 같은 시점에 다른 DomU가 부팅되며 passthrough 디바이스를 잠시 점유
4. **왜 그게 충돌이 됐나?** → Xen 측 PCI passthrough 설정에 명시적 잠금이 없음
5. **왜 명시적 잠금이 없었나?** → 초기 구성 시 단일 GPU VM만 가정했고, 멀티 GPU VM 시나리오 검증 부족

## 액션 아이템

- [ ] Xen DomU 부팅 순서 명시화 (`xl create` 의존성 정의)
- [ ] `nvidia-smi` health check systemd timer (1분 주기) → 실패 시 Discord webhook
- [ ] PCI passthrough 디바이스 ↔ DomU 매핑 문서화 ([Athena 페이지](/projects/node---athena/)에 다이어그램 추가)
- [ ] 동일 사건 재발 시 자동 DomU 재부팅 vs. 수동 개입 정책 결정
- [ ] **이 포스트모템 템플릿을 모든 장애 기록의 표준 양식으로 채택**

## 회고

> 채용 공고에서 자주 보는 *"장애 대응 경험"* 이라는 항목이 사실은 이런 사건들의 누적이라는 걸 절실히 느꼈다.  
> 28분짜리 작은 사건이지만, **타임라인을 분 단위로 적어두면 다음 사건에서 의사결정 속도가 확연히 빨라진다.**
