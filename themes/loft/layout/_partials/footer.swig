<div class="me" style="font-weight:lighter;">
  {% if theme.social %}
    {% for name, link in theme.social %}
      <span class="links-of-author-item">
        {% if theme.social_icons.enable %}
        <a href="{{ link }}" target="_blank" title="{{ name }}" class="icon-{{ theme.social_icons[name] | default('globe') | lower }}">
          
            <!-- <i class="icon-{{ theme.social_icons[name] | default('globe') | lower }}"> </i> -->
          
          {{ name }}
        </a>
        {% endif %}
       </span>
    {% endfor %}
  {% endif %}
</div>
<ul class="links-of-blogroll-list" style="font-weight:200;">
  {% for name, link in theme.links %}
    <li class="links-of-blogroll-item"  style="display: inline-block;">
      <a href="{{ link }}" title="{{ name }}" target="_blank">{{ name }}</a>
    </li>
  {% endfor %}
</ul>
<div class="copyright" style="top:50px;font-weight:lighter;">
  {% set current = date(Date.now(), "YYYY") %}
  &copy; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  <span itemprop="copyrightYear">{{ current }}</span>  
  <span class="author" itemprop="copyrightHolder">{{ config.author }}. All rights reserved</span>
</div>
