---
layout: page
title: Moisam
description: Dormitory group purchasing platform
img: assets/img/moisam.png
importance: 3
category: BackEnd
---

<!-- ===== 프로젝트 개요 ===== -->
## Moida: Dormitory Group-Purchasing Platform Overview
This project introduces **Moida**, a closed-community group-purchasing platform developed for Ajou University dormitory students.  
The system was designed to reduce living costs by enabling students to buy items together in a **secure, verified, and convenient environment**, addressing the trust and coordination problems found in informal SNS-based group purchases:contentReference[oaicite:0]{index=0}.

- **Background & Goals**:  
  - Provide **safe and reliable group purchasing** for dormitory residents  
  - Solve issues of **trust, settlement confusion, and participant dropout** common in SNS-based purchases:contentReference[oaicite:1]{index=1}  
  - Build a **community-driven platform** limited to dormitory students with Google OAuth login and dormitory verification  

- **Core Features**:  
  - **Post-based recruitment system**: create and join group purchase posts  
  - **Google OAuth & student verification**: ensure only verified dormitory residents can join  
  - **Real-time chat rooms**: created automatically for each purchase group for seamless communication  
  - **Escrow-like payment model**: participants prepay to an official account, organizer gets paid only after successful distribution:contentReference[oaicite:2]{index=2}  
  - **Comment system**: pre-join inquiries and communication on each post  
  - **Completion tracking**: automatic status change once all participants confirm receipt  

- **Database & Implementation**:  
  - Designed with **ER diagrams and normalized schema** (User, Post, Participation, Comment, Chatroom, Chatmessage tables):contentReference[oaicite:3]{index=3}  
  - Adopted **UUID identifiers** for security and uniqueness  
  - Frontend: React (post creation, forms, comments, chat)  
  - Backend: API-driven with real-time WebSocket chat  

---

### Home & Post Creation
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/moida-project/home_post.jpg"
       title="Home Screen & Post Creation"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Users can view all active group-buying posts in real time and create new posts with product info, category, deadline, and per-person price.  
  Posts are stored in the **Post table** and linked to the author via Google OAuth authentication.
</div>

---

### Participation & Escrow Payment
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/moida-project/participation.jpg"
       title="Participation & Payment"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Participants join via a dedicated form; their info is pre-filled from the **User table**.  
  Payments are marked as complete only after **bank transfer confirmation**, enabling the escrow model where the organizer is paid after distribution:contentReference[oaicite:4]{index=4}.
</div>

---

### Real-Time Chat & Completion
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/moida-project/chatroom.jpg"
       title="Chatroom & Completion"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Once a group is confirmed, a **chatroom** is automatically generated for participants.  
  Final delivery details are posted here, and each participant confirms receipt, changing the transaction status to "Completed."
</div>

---

### Demo Video
<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
    title="Moisam Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

- **Outcomes**:  
  - Delivered a **secure, dormitory-exclusive group-purchase system**  
  - Eliminated **trust issues and settlement confusion** common in SNS group buys  
  - Provided a foundation for **expansion to university-wide or local community use**, with potential ties to local stores and businesses:contentReference[oaicite:5]{index=5}  
  - Highlighted both the **strengths (security, trust, escrow)** and **challenges (user pool size, participation requirements)** for scaling:contentReference[oaicite:6]{index=6}  