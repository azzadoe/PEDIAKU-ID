---
layout: default
title: PPT Template
permalink: /categories/ppt
---
<!-- Sertakan Bootstrap CSS (pastikan tidak duplikat jika sudah ada di layout utama) -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<div class="container my-5">
  <h1 class="mb-4">Postingan dalam kategori "Tutorial"</h1>
  <div class="row">
    {% assign tutorial_posts = site.posts | where_exp:"post", "post.categories contains 'tutorial'" %}
    {% if tutorial_posts.size > 0 %}
      {% for post in tutorial_posts %}
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            {% if post.thumbnail %}
              <img src="{{ post.thumbnail }}" class="card-img-top" alt="{{ post.title }}">
            {% else %}
              <!-- Ganti dengan path ke default thumbnail jika tidak ada -->
              <img src="/assets/images/default-thumbnail.jpg" class="card-img-top" alt="Default Thumbnail">
            {% endif %}
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text text-muted">
                <small>{{ post.date | date: "%d %B %Y" }}</small>
              </p>
              <a href="{{ post.url }}" class="btn btn-primary mt-auto">Baca Selengkapnya</a>
            </div>
          </div>
        </div>
      {% endfor %}
    {% else %}
      <div class="col-12">
        <p>Tidak ada postingan dalam kategori ini.</p>
      </div>
    {% endif %}
  </div>
</div>