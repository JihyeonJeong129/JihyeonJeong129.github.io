---
layout: post
title: "Home Lab 모니터링 스택 구축 회고 — Prometheus + Grafana + Loki"
date: 2026-03-12 22:00:00 +0900
description: 3-노드(Athena / Hades / Daedalus) 홈랩에 모니터링 스택을 도입하면서 마주한 설계 결정과 시행착오 기록.
tags: home-lab monitoring prometheus grafana loki devops
categories: home-lab
lang: ko
ref: home-lab-monitoring-stack
permalink: /ko/blog/2026/home-lab-monitoring-stack/
giscus_comments: true
related_posts: false
search_exclude: true
toc:
  beginning: true
---

> **본 글은 작성 중입니다 (placeholder).** 향후 실제 운영 데이터(스크린샷, 알람 룰, 장애 사례)를 추가해 정식 회고 글로 확장 예정입니다.

## 배경

3-노드 홈랩([Athena]({{ '/projects/node---athena/' | relative_url }}), [Hades]({{ '/projects/node---hades/' | relative_url }}), [Daedalus]({{ '/projects/node---daedalus/' | relative_url }}))을 운영하면서 다음 문제를 자주 겪었습니다.

- VM 게스트 OS가 죽어도 알 길이 없음 → 다음 날 SSH 접속 시도하다가 발견
- ZFS 풀 사용량이 임계치를 넘은 채로 며칠간 방치된 사례
- GPU 온도가 단발성으로 튀어도 로그가 휘발됨

"운영 중이다"라고 말하려면 **관측(observability)** 이 먼저 갖춰져야 한다는 걸 받아들이고 모니터링 스택을 도입했습니다.

## 스택 선택 과정

| 후보 | 채택 여부 | 사유 |
|---|---|---|
| Zabbix | ❌ | 학습 곡선·UI 부담, 컨테이너 친화적이지 않음 |
| Netdata | △ | 노드별 단일 대시보드는 좋지만 장기 보존·알람 룰 통합이 약함 |
| **Prometheus + Grafana + Loki** | ✅ | 사실상 표준, 대부분의 채용 공고와 동일 |
| Datadog/New Relic | ❌ | 비용, 자체 학습 목적과 어긋남 |

## 아키텍처 (예정)

```
[node_exporter / cadvisor / nvidia_smi_exporter]  ─┐
                                                   ├─→ Prometheus (Hades)
[promtail (각 노드)] ──→ Loki (Hades) ─────────────┘
                                                   ↓
                                                Grafana (Hades)
                                                   ↓
                                          Alertmanager → Discord webhook
```

## TODO (다음 글들에서 다룰 예정)

- [ ] node_exporter 설치 및 systemd 유닛 작성
- [ ] NVIDIA Tesla P100 메트릭 수집 설정 (`nvidia_gpu_exporter`)
- [ ] ZFS 풀 사용률 알람 임계치 정의 (warning 70% / critical 85%)
- [ ] Loki에 ESXi syslog 포워딩
- [ ] Alertmanager → Discord webhook 연동
- [ ] 첫 한 달 운영하면서 받은 false-positive 알람 정리
- [ ] 실제 장애를 잡아낸 첫 케이스 회고

## 메모

> 모니터링은 "쌓는 것"이 아니라 "지우는 것"이라는 말이 맞다. 알람 1주일 받아보면 90%는 노이즈고, 그걸 거르는 과정이 진짜 작업.
