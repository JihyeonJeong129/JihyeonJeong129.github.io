---
layout: default
permalink: /ko/blog/
title: 블로그
nav: false
lang: ko
ref: blog
---

<div class="post">

  <div class="header-bar">
    <h1>블로그</h1>
    <p class="desc">홈랩 운영 회고 · 장애 기록 · 인프라 학습 노트</p>
  </div>

  <ul class="post-list">

    {% assign postlist = site.posts | where: "lang", "ko" %}

    {% for post in postlist %}

    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>
      <h3>
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ read_time }}분 읽기 &nbsp; &middot; &nbsp;
        {{ post.date | date: '%Y년 %m월 %d일' }}
      </p>
      <p class="post-tags">
        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
        {% if tags != "" %}
          &nbsp; &middot; &nbsp;
          {% for tag in post.tags %}
            <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
            {% unless forloop.last %}&nbsp;{% endunless %}
          {% endfor %}
        {% endif %}
        {% if categories != "" %}
          &nbsp; &middot; &nbsp;
          {% for category in post.categories %}
            <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
            {% unless forloop.last %}&nbsp;{% endunless %}
          {% endfor %}
        {% endif %}
      </p>
    </li>

    {% endfor %}

  </ul>

</div>
