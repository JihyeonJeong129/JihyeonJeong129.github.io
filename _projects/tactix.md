---
layout: page
title: TACTIX
description: RAG-based Aircraft Maintenance Support System
img: assets/img/tactix.jpg
importance: 1
category: Backend
lang: en
ref: tactix
---

<p>
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white">
<img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white">
<img alt="LangChain" src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat&logoColor=white">
<img alt="RAG" src="https://img.shields.io/badge/RAG-FF6F00?style=flat">
<img alt="FAISS" src="https://img.shields.io/badge/FAISS-0467DF?style=flat">
<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white">
<img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black">
</p>

## Overview

TACTIX is a prototype for an aircraft-maintenance knowledge support system. The goal was to help technicians retrieve relevant manual sections and troubleshooting steps faster than manual document search, especially in environments where internet access is restricted.

- **Project type:** team project / applied backend and AI system
- **Domain:** aircraft maintenance support, technical-document retrieval
- **Core stack:** Python, FastAPI, LangChain-style RAG pipeline, FAISS, Docker, Linux
- **Primary focus:** document ingestion, retrieval flow, role-aware access, and deployability in a closed network

---

## Problem & Motivation

Maintenance work depends on manuals, previous cases, and experienced personnel. In practice, this creates several problems:

- Relevant information is spread across long technical documents.
- Less-experienced maintainers need more time to identify the correct procedure.
- A generic chatbot is risky because maintenance answers must be grounded in source documents.
- Military or closed-network environments cannot rely on external cloud APIs as the default assumption.

The project therefore focused on a **retrieval-first AI assistant**: the system should retrieve grounded evidence first, then generate or organize guidance from that evidence.

---

## My Role

I worked on the backend and system-design side of the project.

- Designed the RAG-oriented backend flow from document ingestion to answer generation.
- Structured the data-processing pipeline for manual text extraction, cleaning, chunking, and metadata attachment.
- Planned deployment constraints for an air-gapped or restricted network environment.
- Connected the project with my home-lab infrastructure to test server-side deployment and GPU-backed experimentation.

---

## Technical Approach

### Why RAG

RAG was selected because the system had to answer from maintenance manuals and incident records instead of relying only on model memory. This made it easier to:

- return answers with document context,
- keep domain knowledge updatable by replacing or re-indexing documents,
- reduce unsupported or hallucinated responses,
- separate the retrieval layer from the model layer.

### Why FastAPI and FAISS

FastAPI was a practical choice for building a small API service around retrieval and answer-generation endpoints. FAISS was suitable for a prototype because it can run locally and does not require an external managed vector database.

The intended architecture was:

1. Parse maintenance documents.
2. Clean and split text into chunks.
3. Attach metadata such as document name, section, and equipment context.
4. Embed chunks and store them in a local vector index.
5. Retrieve candidate chunks for a user question.
6. Generate a grounded response with references to retrieved context.

---

## Implementation & Problem Solving

The most important implementation decision was to keep the pipeline modular. Document processing, indexing, retrieval, and response formatting were treated as separate steps so that each part could be tested independently.

This mattered because document quality was uneven. Some sections were procedural, while others were tables, warnings, or abbreviations. A single chunking strategy did not work equally well for every document type, so the pipeline had to support later tuning of chunk size, metadata fields, and retrieval filters.

---

## Unexpected Issues

- **Grounding vs. readability:** The most useful answer was not always the most fluent answer. Maintenance support needed traceable evidence, so the response format had to prioritize references and step order.
- **Closed-network assumption:** Many AI examples assume cloud APIs, but this project had to consider local deployment from the beginning.
- **Domain ambiguity:** Similar equipment terms can appear in different procedures, so metadata filtering became as important as semantic similarity.

---

## Results & Impact

- Built a clear prototype architecture for a maintenance-focused RAG system.
- Defined a document pipeline that can be expanded with additional manuals and historical cases.
- Connected backend AI design with realistic deployment constraints such as role-based access and restricted networks.
- Strengthened my understanding of how backend systems, AI retrieval, and operational constraints meet in a high-stakes domain.

---

## Lessons Learned

This project taught me that AI features are only useful when the surrounding system is reliable. For maintenance support, retrieval quality, permissions, update flow, and deployment constraints matter as much as the language model itself.
