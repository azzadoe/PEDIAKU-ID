---
layout: default
title: PPT Template
permalink: /categories/ppt
---
<!-- Sertakan Bootstrap CSS (jika belum ada di layout utama) -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<style>
  /* Styling tambahan untuk tampilan modern ala Themeforesh */
  .card {
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  .card-img-overlay {
    background: rgba(0, 0, 0, 0.6);
  }
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #fff;
  }
  .card-text {
    color: #ddd;
  }
</style>

<div class="container my-5">
  <h1 class="mb-4 text-center">Artikel Template PPT</h1>
  <div class="row">
    {% assign template_posts = site.posts | where_exp:"post", "post.categories contains 'template-ppt'" %}
    {% if template_posts.size > 0 %}
      {% for post in template_posts %}
        <div class="col-md-4 mb-4">
          <div class="card bg-dark text-white">
            {% if post.image %}
              <img src="{{ post.image }}" class="card-img" alt="{{ post.title }}">
            {% else %}
              <img src="/assets/images/default-image.jpg" class="card-img" alt="Default Image">
            {% endif %}
            <div class="card-img-overlay d-flex flex-column justify-content-end">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text"><small>{{ post.date | date: "%d %B %Y" }}</small></p>
              <a href="{{ post.url }}" class="btn btn-primary">Baca Selengkapnya</a>
            </div>
          </div>
        </div>
      {% endfor %}
    {% else %}
      <div class="col-12">
        <p class="text-center">Tidak ada artikel Template PPT.</p>
      </div>
    {% endif %}
  </div>
</div>