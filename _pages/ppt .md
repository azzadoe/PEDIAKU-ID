---
layout: default
title: PPT Template
permalink: /ppt
---
<!-- Sertakan Bootstrap CSS (pastikan tidak duplikat jika sudah ada di layout utama) -->
<link rel="stylesheet" href="https://codescandy.com/coach/bootstrap-5/assets/css/theme.min.css">

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

<!--start online yoga-->
<section class="pt-lg-8 pt-6 py-xxl-10">
    <div class="container">
        <!--row-->
        <div class="row d-flex align-items-center">
            <div class="col-xxl-5 col-lg-6 col-12">
                <!--content-->
                <div>
                    <h5 class="text-muted mb-4">Pediaku id ppt free download</h5>
                    <h2 class="mb-3 fw-bold">
                        Selamat Datang di
                        <span class="text-bottom-line">Pediaku ID PPT,</span>
                        Download Template PPT Gratis Sepuasnya
                    </h2>
                    <p class="mb-4">
                        Pediaku ID PPT free download adalah situs tempat download template ppt gratis paling top, dan gratis 100%
                    </p>
                    <!--button-->
                    <div class="d-grid d-lg-block">
                        <a href="#" class="btn btn-secondary">Lihat Koleksi PPT</a>
                        <a href="#" class="btn btn-outline-secondary ms-lg-1 mt-2 mt-lg-0">Tutorial PPT</a>
                    </div>
                </div>
            </div>
            <!--col-->
            <div class="col-xxl-6 offset-xxl-1 col-lg-6 col-12">
                <!--image-->
                <div class="text-center d-none d-lg-block">
                    <img src="/assets/images/powerpoint.png" alt="PPT template gratis" class="img-fluid" />
                </div>
                <!--image-->
            </div>
        </div>
    </div>
</section>
<!--end of online yoga-->

<section class="py-lg-8 py-xxl-16 py-6 bg-light">
				<div class="container">
					<!-- row -->
					<div class="row">
						<div class="col-xxl-8 offset-xxl-2 col-lg-6 offset-lg-3 col-md-12 col-12">
							<div class="text-center mb-lg-9 mb-5">
								<!-- content -->
								<h2 class="fw-bold mb-3">
									<span class="text-bottom-line">Upcoming Courses</span>
								</h2>
								<p class="mb-0">Sign up for upcoming weekly classes and events orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<!-- content -->
							</div>
						</div>
					</div>


<div class="container my-5">
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

</div>
</section>