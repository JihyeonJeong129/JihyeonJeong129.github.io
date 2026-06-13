---
layout: page
title: Moisam
description: Dormitory group purchasing platform
img: assets/img/moisam.png
importance: 2
category: Backend
lang: en
ref: moisam
---

<p>
<img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black">
<img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white">
<img alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white">
<img alt="WebSocket" src="https://img.shields.io/badge/WebSocket-010101?style=flat">
<img alt="OAuth" src="https://img.shields.io/badge/Google%20OAuth%202.0-4285F4?style=flat&logo=google&logoColor=white">
<img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white">
</p>

## Overview

Moisam is a dormitory-focused group-purchasing platform for Ajou University students. It was built to replace informal SNS-based group buys with a more structured flow for recruitment, participation, payment status, and group communication.

- **Project type:** team project
- **Domain:** closed-community commerce / campus service
- **Core stack:** React, Node.js, Express, MySQL, Google OAuth, WebSocket
- **My focus:** database schema design, backend data flow, and purchase-state modeling

---

## Problem & Motivation

Dormitory students often buy daily necessities together to reduce delivery fees or unit cost. Informal group purchases through chat rooms or SNS have several recurring problems:

- Participants are difficult to verify.
- Payment and receipt status are easy to lose in chat history.
- Organizers must manually track who joined, paid, and received items.
- Trust is weak because the process depends on screenshots and verbal confirmation.

The project goal was to turn this informal process into a structured platform with clear records and status transitions.

---

## My Role

My main contribution was backend and database-oriented.

- Designed the relational schema for users, posts, participation, comments, chat rooms, and chat messages.
- Modeled the participation lifecycle from joining a post to payment confirmation and completion.
- Helped define API behavior around post creation, participation records, comments, and chat-room creation.
- Focused on data consistency so that recruitment count, participant state, and completion state could be tracked reliably.

---

## Technical Approach

### Why MySQL

The service had strongly related entities: users create posts, posts have participants, participants belong to chat rooms, and each purchase has status changes. A relational database was a natural fit because the core problem was not just storing content but preserving relationships and constraints.

### Why OAuth

Google OAuth reduced the need to manage passwords directly and made account onboarding simpler. For a closed community, authentication also became the first step toward verifying whether a user belonged to the intended student group.

### Why WebSocket

Group buying requires coordination after participants join. Real-time chat was included because delivery location, payment confirmation, and receipt confirmation are conversation-heavy workflows.

---

## Implementation & Problem Solving

The main design challenge was state management. A post is not just a board entry; it moves through recruitment, participation, payment, distribution, and completion.

To handle this, the schema separated the post itself from participation records. This made it possible to track each participant individually while still calculating the overall status of the group purchase.

The chat-room design also followed the purchase flow: a room could be created for confirmed participants, keeping operational communication close to the relevant post.

---

## Unexpected Issues

- **Escrow-like flow complexity:** Even a simple payment model creates edge cases around confirmation, cancellation, and partial participation.
- **Trust design:** Authentication alone does not solve trust. The service also needed visible status records and a predictable process.
- **Small user pool:** A dormitory-only service is safer and more focused, but growth depends on enough active residents using the same platform.

---

## Results & Impact

- Built a full-stack prototype for a dormitory group-purchasing workflow.
- Produced a normalized database design that covered core commerce and communication entities.
- Practiced backend design around real user actions instead of static CRUD alone.
- Learned how product trust depends on both technical design and user-flow clarity.

---

## Lessons Learned

This project made me think more carefully about backend state. The difficult part was not only creating posts or saving chat messages, but making sure the service could represent real-world purchase progress without confusing users.
