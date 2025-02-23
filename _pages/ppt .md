---
layout: default
title: PPT Template
permalink: /categories/ppt
---
<!-- Sertakan Bootstrap CSS (pastikan tidak duplikat jika sudah ada di layout utama) -->
  <link rel="stylesheet" type="text/css" href="https://wizixo.webestica.com/assets/css/style.css" />

<style>
  /* Styling modern untuk card ala Envato Market */
  .card-modern {
    border: none;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .card-modern:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
  .card-modern .card-img-top {
    object-fit: cover;
    height: 200px;
    transition: transform 0.3s;
  }
  .card-modern:hover .card-img-top {
    transform: scale(1.05);
  }
  .card-modern .card-body {
    padding: 1.5rem;
  }
  .card-modern .card-title a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: color 0.3s;
  }
  .card-modern .card-title a:hover {
    color: #007bff;
  }
</style>

<section class="p-0 bg-grad position-relative landing-banner all-text-white">
	<div class="container h-100">
		<!-- banner image -->
		<div class="col-8 col-ms-8 col-lg-7 banner-mockup p-0">
			<img src="assets/images/banner/mockup.png" alt="">
		</div>
		<!-- banner content -->
		<div class="row d-flex align-items-center banner-content h-100">
			<div class="col-12 col-sm-8 col-lg-6 mt-2 mt-md-0 pe-0 pe-sm-5 pe-lg-5">
				<p class="transparent-bg-1 d-inline-block rounded py-1 px-3 mb-3">- Super Easy way to build perfect website</p>
				<!-- <p class="bg-danger d-inline-block rounded py-1 px-3 mb-3">🏠 Stay at Home. Save 30%. Use the code <b>"StayHome30"</b> until Apr, 12</p> -->
				<h1 class="display-5 fw-normal">Meet Wizixo - Creative Agency Multi-Purpose Theme</h1> 
				<h6 class="mb-4 fw-light">Ultimate all-around theme specially designed for the agency, marketing firms, portfolio, creative, startup, landing page and corporate.</h6>
				<a class="btn btn-dark me-4 mb-0" href="https://themes.getbootstrap.com/product/wizixo-multipurpose-corporate-theme/" target="_blank">Purchase Now!</a>
			</div>
		</div>
	</div>
</section>

<div class="container my-5">
  <h1 class="mb-4">Postingan dalam kategori "Tutorial"</h1>
  <div class="row">
    {% assign colors = "#FDEBD0,#D6EAF8,#E8DAEF,#D5F5E3,#FCF3CF" | split: "," %}
    {% assign tutorial_posts = site.posts | where_exp:"post", "post.categories contains 'tutorial'" %}
    {% if tutorial_posts.size > 0 %}
      {% for post in tutorial_posts %}
        {% assign bg_color = colors[forloop.index0 | modulo: colors.size] %}
        <div class="col-md-4 mb-4">
          <div class="card card-modern h-100 shadow-sm">
            {% if post.image %}
              <img src="/{{ post.image }}" class="card-img-top" alt="{{ post.title }}">
            {% else %}
              <img class="card-img-top featured-image img-fluid" src="/assets/images/default-thumbnail.jpg" alt="Default Thumbnail">
            {% endif %}
            <div class="card-body d-flex flex-column" style="background-color: {{ bg_color }};">
              <h5 class="card-title">
                <a href="{{ post.url }}">{{ post.title }}</a>
              </h5>
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