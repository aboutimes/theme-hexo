{% extends '_layout.swig' %}
{% import '_macro/post-collapse.swig' as post_template %}
{% import '_macro/sidebar.swig' as sidebar_template %}

{% block title %}{{ __('title.category') }}: {{ page.category }} | {{ config.title }}{% endblock %}

{% block page_class %} page-category {% endblock %}

{% block content %}

  <section id="posts" class="posts-collapse">

    <div class="collection-title">
      <{% if theme.seo %}h2{% else %}h1{% endif %}>{#
      #}{{ page.category }}{#
      #}
      <span class="category-page-counter" style="font-size: 16px;font-weight: 300;">
        {% set cheers %}
        {% set posts_length = site.posts.length %}
        {{ _p("counter.category_posts", page.posts.length) }}
      </span>
      <!-- <small>{{  __('title.category')  }}</small> -->
      </{% if theme.seo %}h2{% else %}h1{% endif %}>

    </div>

    {% for post in page.posts %}

      {# Show year #}
      {% set year %}
      {% set post.year = date(post.date, 'YYYY') %}

      {% if post.year !== year %}
        {% set year = post.year %}
        <div class="collection-title">
          <h2 class="archive-year motion-element" id="archive-year-{{ year }}">{{ year }}</h2>
        </div>
      {% endif %}
      {# endshow #}

      {{ post_template.render(post) }}
    {% endfor %}
  </section>

  {% include '_partials/pagination.swig' %}

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(false) }}
{% endblock %}
