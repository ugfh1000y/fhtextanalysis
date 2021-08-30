---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default

---

{% for text in site.text %}
  <a href="{{ text.url | relative_url }}">
  {{ text.title }} </a><br>

{% endfor %}
