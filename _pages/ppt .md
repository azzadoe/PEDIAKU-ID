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
            {% if post.image %}
            <div class="hover hover-5 text-white rounded">
              <img src="/{{ post.image }}" class="card-img-top" alt="{{ post.title }}">
            {% else %}
              <!-- Ganti dengan path ke default thumbnail jika tidak ada -->
              <img class="card-img-top featured-image img-fluid" src="/assets/images/default-thumbnail.jpg" alt="Default Thumbnail">
            {% endif %}
            <div class="hover-overlay"></div>
          <div class="hover-5-content">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title"><a href="{{ post.url }}"> {{ post.title }} </a> </h5>
                          </div>
          </div>
        </div>
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
