---
layout: page
title: TACTIX
description: RAG-based Aircraft Maintenance Support System
img: assets/img/tactix.jpg
importance: 3
category: BackEnd
---

<!-- ===== 프로젝트 개요 ===== -->
## Overview
This project introduces **TACTIX**, an AI-assisted **aircraft maintenance knowledge retrieval and support system**.  
It aims to address challenges in modern military maintenance operations where **manpower reduction, expertise gaps, and increasing complexity of equipment** make fast and accurate maintenance support essential.

- **Background & Motivation**:  
  - Declining manpower and growing concerns over **maintenance quality and efficiency**  
  - Maintenance requires not only repetition but also **manual interpretation, historical knowledge, and contextual judgment**  
  - Current practice suffers from **time-consuming Q&A loops** and **expertise variance** among personnel  
  - A need for an **AI-driven knowledge exploration system** emerged, leveraging **LLM + Expert System + RAG** for efficient access to maintenance manuals and historical records  

---

### Key Features
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/tactix/feature_llm.jpg"
       title="LLM Integration"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/tactix/feature_expert.jpg"
       title="Expert System Logic"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/tactix/feature_rag.jpg"
       title="RAG Document Retrieval"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Hybrid architecture: **LLM for flexible reasoning**, **Expert System for rule-based decision support**, and **RAG for document-grounded retrieval**.
</div>

- **Hybrid AI System**:  
  - Combines **LLM** (contextual answers), **Rule-based Expert System** (domain logic), and **RAG** (document-grounded retrieval)  
  - Provides **step-by-step maintenance guidance** instead of just information lookup  
- **Vector Database**:  
  - Preprocessed and chunked manuals + history data stored as embeddings  
  - Enables **<5 sec retrieval latency** with 95%+ accuracy  
- **Secure Deployment**:  
  - Designed for **air-gapped military networks** (no internet required)  
  - User access controlled by **rank/role-based permissions**  

---

### System Architecture
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/tactix/architecture.jpg"
       title="TACTIX System Architecture"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The system integrates **data preprocessing, vector DB, RAG pipeline, LLM inference, and rule-based expert modules**,  
  all secured within a closed military intranet environment.
</div>

---

### Data Processing Pipeline
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/tactix/datapipeline.jpg"
       title="Data Processing Flow"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Maintenance manuals and history logs undergo **text extraction, cleaning, and chunking**.  
  Processed data is embedded into a **vector DB with metadata**, enabling semantic search for context-aware responses.
</div>

---

### Use Case Scenario
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/tactix/scenario.jpg"
       title="Scenario Example"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Example: An F-16 HUD display malfunction during pre-flight checks.  
  - **System Response**: Provides step-by-step checks (power supply, signal module, BIT results),  
    references past incidents, and links the relevant manual section directly.  
  This enables even less-experienced personnel to perform accurate troubleshooting.
</div>

---

### Demo Video
<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
    title="TACTIX Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

- **Outcomes**:  
  - Reduced **document lookup time** drastically by shifting from manual search to AI-driven retrieval  
  - Enabled **standardized, step-by-step troubleshooting** even for less experienced personnel  
  - Provided a **secure, military-grade AI system** with potential expansion to predictive maintenance and fleet-wide knowledge sharing  
  - Contributes to **smarter maintenance environments** and **higher operational readiness** in manpower-limited settings  
