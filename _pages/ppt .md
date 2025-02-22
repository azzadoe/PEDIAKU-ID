---
layout: default
title: PPT Template
permalink: /categories/ppt
---
<ul>
  {% assign tutorial_posts = site.posts | where_exp:"post", "post.categories contains 'tutorial'" %}
  {% if tutorial_posts.size > 0 %}
    {% for post in tutorial_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%d %B %Y" }}
      </li>
    {% endfor %}
  {% else %}
    <li>Tidak ada postingan dalam kategori ini.</li>
  {% endif %}
</ul>