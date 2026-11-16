---
layout: page
title: Blog
permalink: /posts/
---
[Subscribe to this Blog](/feed.xml)

<ul class="entries">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="small">{{ post.date | date: "%e %b %Y" }}</span>
    {% if post.summary %}<br><span class="small">{{ post.summary }}</span>{% endif %}
  </li>
{% endfor %}
</ul>
