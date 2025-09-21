---
layout: page
title: Advanced Data Analytics Semi-Professional (ADsP)
img: /assets/img/certification_awards/adsp.png 
description: 
location: Korea Data Agency, Date of Certification:23.09.15
photos:
  - /assets/img/certification_awards/adsp.png 
importance: 4
category: certifications
---

<style>
.carousel-container {
  max-width: 800px;
  margin: 2rem auto;
}

.carousel-inner img {
  max-height: 500px;
  object-fit: contain;
  border-radius: 1rem;
  display: block;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.carousel-caption {
  background-color: rgba(0,0,0,0.5);
  padding: 1rem;
  border-radius: 0.5rem;
}

.photo-meta {
  text-align: center;
  margin-bottom: 2rem;
}
.photo-meta h2 {
  margin-bottom: 0.5rem;
}
.photo-meta .location {
  color: #888;
  font-size: 0.9rem;
}
.photo-meta .description {
  color: #444;
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>

<div class="carousel-container">
  <div id="photoCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      {% for photo in page.photos %}
      <li data-target="#photoCarousel" data-slide-to="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}"></li>
      {% endfor %}
    </ol>

    <div class="carousel-inner">
      {% for photo in page.photos %}
      <div class="carousel-item {% if forloop.first %}active{% endif %}">
        <img src="{{ photo }}" class="d-block w-100" alt="Photo {{ forloop.index }}">
      </div>
      {% endfor %}
    </div>

    <a class="carousel-control-prev" href="#photoCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#photoCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

<div class="photo-meta">
  <div class="location">{{ page.location }}</div>
  <div class="description">{{ page.description }}</div>
</div>
