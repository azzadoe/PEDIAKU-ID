---
layout: default
title: PPT Template
permalink: /categories/ppt
---
<!-- Sertakan Bootstrap CSS (pastikan tidak duplikat jika sudah ada di layout utama) -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<<div class="container my-5">
  <h1 class="mb-5 text-center">Template Pilihan</h1>
  <div class="row">
    {% assign template_posts = site.posts | where_exp:"post", "post.categories contains 'template'" %}
    {% if template_posts.size > 0 %}
      {% for post in template_posts %}
        <div class="col-md-4 mb-4">
          <div class="card h-100 border-0 shadow-sm card-template">
            <div class="position-relative">
              {% if post.image %}
                <img src="/{{ post.image }}" class="card-img-top" alt="{{ post.title }}">
              {% else %}
                <img src="/assets/images/default-thumbnail.jpg" class="card-img-top" alt="Default Thumbnail">
              {% endif %}
              <div class="overlay position-absolute w-100 h-100 top-0 start-0 d-flex flex-column justify-content-end" style="background: rgba(0,0,0,0.4); opacity: 0; transition: opacity 0.3s;">
                <div class="p-3">
                  <h5 class="card-title text-white">{{ post.title }}</h5>
                </div>
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <p class="card-text text-muted"><small>{{ post.date | date: "%d %B %Y" }}</small></p>
              <a href="{{ post.url }}" class="btn btn-primary mt-auto">Baca Selengkapnya</a>
            </div>
          </div>
        </div>
      {% endfor %}
    {% else %}
      <div class="col-12">
        <p class="text-center">Tidak ada postingan terkait template.</p>
      </div>
    {% endif %}
  </div>
</div>

<!-- Custom CSS tambahan untuk tampilan modern -->
<style>
  .card-template .card-img-top {
    object-fit: cover;
    height: 220px;
  }
  .card-template .position-relative:hover .overlay {
    opacity: 1;
  }
  /* Tambahan responsive spacing jika diperlukan */
  @media (max-width: 768px) {
    .card-template .card-img-top {
      height: 180px;
    }
  }
</style>

<!-- Sertakan Bootstrap CSS (jika belum ada di layout utama) -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
