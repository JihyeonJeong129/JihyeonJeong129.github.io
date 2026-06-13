---
layout: post
title: "ESXi VM 자동 백업 스크립트 작성기 — ghettoVCB에서 자체 스크립트로"
date: 2026-04-05 21:30:00 +0900
description: Hades(VMware ESXi) 위에서 돌아가는 VM들을 NAS로 정기 백업하기 위해 거친 시행착오와 RPO/RTO 정의 기록.
tags: home-lab esxi backup disaster-recovery shell-script devops
categories: home-lab
lang: ko
ref: esxi-vm-backup
permalink: /ko/blog/2026/esxi-vm-backup-script/
giscus_comments: true
related_posts: false
search_exclude: true
toc:
  beginning: true
---

> **본 글은 작성 중입니다 (placeholder).** 실제 스크립트 코드와 1회 복구 훈련(DR drill) 결과를 추가해 정식 회고로 확장 예정.

## 시작 — "백업이 있긴 한데 복구는 안 해봤다"

[Hades]({{ '/projects/node---hades/' | relative_url }}) 노드는 VMware ESXi 위에서 약 8개의 VM(개인 서비스, 테스트베드, Mattermost, PhotoPrism 등)을 돌리고 있습니다.  
백업이라고 부를 만한 건 다음 두 가지뿐이었습니다.

1. ESXi 데이터스토어 → NAS HDD 수동 `cp` (분기 1회 정도)
2. 중요 VM 디스크 vmdk를 외장 HDD로 분기 복사

문제는 **한 번도 복구 시나리오를 돌려본 적이 없다는 것**. 채용 공고들에서 흔히 보는 "RPO/RTO를 정의하고 운영한 경험"이 0이었습니다.

## RPO / RTO 정의

| VM 분류 | 예시 | RPO | RTO |
|---|---|---|---|
| Critical | Mattermost, NAS 메타 DB | 24h | 2h |
| Important | PhotoPrism, JupyterHub | 7d | 8h |
| Sandbox | 테스트 VM | best-effort | best-effort |

이 표를 만든 것만으로도 "어디에 시간을 써야 하는지"가 명확해졌습니다.

## 후보 검토

- **ghettoVCB** — 표준 도구, 그러나 ESXi 8.x 호환성과 알림 체계가 부족
- **Veeam Community** — 무료지만 라이선스/소켓 제한, 학습 가치는 낮음
- **자체 셸 스크립트** ✅ — 학습 목적·커스터마이즈에 가장 적합

## 자체 스크립트 설계 (예정)

```bash
# pseudo
for vm in $(target_list); do
  vim-cmd snapshot.create $vm "auto-backup"
  ovftool ... "$vm" "$NAS_PATH/$(date +%F)/$vm.ova"
  vim-cmd snapshot.removeall $vm
  log_to_loki "$vm" "$status"
done
prune_older_than 30d
notify_discord "$summary"
```

## TODO

- [ ] OVF 백업 시 incremental 불가 → 차분 전략 검토 (rsync + thin disk)
- [ ] Loki로 백업 로그 수집 (이전 글의 모니터링 스택과 연결)
- [ ] **DR drill: 다른 노드에서 실제 복구 시도 → RTO 측정**
- [ ] 백업 무결성 자동 검증 (sha256 + 부팅 테스트)
- [ ] "복구 실패 시 알람" 룰 추가

## 배운 것 (현재까지)

> *백업이 있다 ≠ 복구가 된다.* 복구 훈련을 한 번 돌리고 나면 백업 스크립트 절반은 다시 쓰게 된다.
