---
layout: page
title: Sejong City Data-Driven Innovation Challenge
description: Public Transport Data Analysis for Festival Accessibility 
img: assets/img/sejong_logo.png
importance: 2
category: Data Analytics
giscus_comments: true
---

<!-- ===== 프로젝트 개요 ===== -->
## Sejong City Data-Driven Innovation Challenge: Festival Accessibility & Mobility Insights
This project applied **bus smart-card data analysis** to propose strategies for improving **festival accessibility, scalability, and visitor experience** in Sejong City.  
By analyzing transportation patterns, transfer convenience, and demand correlations with festival events, the study sought **data-driven solutions for better public mobility and event planning**:contentReference[oaicite:0]{index=0}.

- **Goals**:  
  - Enhance **festival accessibility** for external visitors using bus route modeling  
  - Identify demand drivers through **time-series and correlation analysis**  
  - Propose improvements in **festival operations and transportation policies**  

---

### Route & Transfer Analysis
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/sejong-challenge/routes.jpg"
       title="Festival Route Case Analysis"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Modeled external visitor flows under multiple cases (e.g., Terminal → City Hall, Osong Station → City Hall, Hongdae → Sejong Arts High).  
  Analyzed **minimum transfer & walking distances** to identify the most feasible access routes for visitors:contentReference[oaicite:1]{index=1}.
</div>

---

### Time-Series & Correlation Analysis
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/sejong-challenge/timeseries.jpg"
       title="Time-Series & Event Correlation"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Using SQL and PCA-based techniques, traffic trends during **Sejong Festival, Light Festival, and Fire Festival** were compared.  
  - Verified traffic spikes for **opening ceremonies, rock festivals, and countdown events**  
  - Found weaker-than-expected correlation for **airshows (Black Eagles)** and visits from certain universities:contentReference[oaicite:2]{index=2}.
</div>

---

### Key Findings
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/sejong-challenge/shuttle.jpg"
       title="Shuttle Bus Strategy"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/sejong-challenge/compact_routes.jpg"
       title="Compact Visitor Routes"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
       path="/assets/img/sejong-challenge/unique_contents.jpg"
       title="Sejong-Only Content"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Insights included:  
  - **Shuttle & circular bus operations** to solve last-mile and late-night access issues  
  - **Compact route design** in Sejong Central Park to improve convenience & local economy spillover  
  - **Strengthening Sejong-exclusive content** (e.g., gov’t complex tours, local attractions):contentReference[oaicite:3]{index=3}.
</div>

---

### Demo Video
<div class="ratio ratio-16x9 mt-3">
  <iframe
    src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
    title="Sejong Data Innovation Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

- **Outcomes**:  
  - Identified that **external visitors from universities (Korea Univ, Hongik Univ, etc.) were minimal**, requiring new engagement strategies  
  - Proposed **shuttle bus expansion, extended festival bus operations, and better route design**  
  - Suggested **“bait content” strategies** to attract outsiders and increase festival scalability  
  - Highlighted need for **food, amenities, and compact navigation** within large-scale venues like Sejong Central Park  
  - Contributed a **data-driven festival planning framework** with potential to improve both **visitor experience and local economic impact**:contentReference[oaicite:4]{index=4}  