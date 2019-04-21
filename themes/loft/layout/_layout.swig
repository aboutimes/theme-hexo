<!doctype html>

<html lang="{{ config.language }}">
<head>
  {% include '_partials/head.swig' %}
  <title>{% block title %}{% endblock %}</title>
  {% include '_third-party/analytics/index.swig' %}
</head>

<body>

  {% set container_class = "container " %}
  {% if theme.sidebar.position %}
    {% set container_class = container_class + 'sidebar-position-' + theme.sidebar.position %}
  {% endif %}

  <div class="{{ container_class }} {% block page_class %}{% endblock %} ">
    <!-- <div class="headband"></div> -->

    <header id="header" class="header">
      <div class="header-inner"> {%- include '_partials/header.swig' %} 
      </div>
      
    </header>

    <main id="main" class="main">
      <div class="main-inner" id="maininner">
        <div class="content-wrap">
          <div id="content" class="content">
            {% block content %}{% endblock %}
          </div>
          {% include '_partials/comments.swig' %}
        </div>
        {% if theme.sidebar.display !== 'remove' %}
          {% block sidebar %}{% endblock %}
        {% endif %}
      </div>
    </main>

    <footer id="footer" class="footer">
      <div class="footer-inner">
        {% include '_partials/footer.swig' %}
        {% include '_third-party/analytics/busuanzi-counter.swig' %}
        {% block footer %}{% endblock %}
      </div>
    </footer>

    {% if not theme.sidebar.b2t %}
      <div class="back-to-top">
        <svg style="vertical-align: middle;" class="icon" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M504.962 328.269q-102.937 102.937-412.627 412.627-6.159 6.159-13.197 6.159-7.038 0-12.317-6.159-6.159-6.159-6.159-12.317 0-6.159 6.159-13.197 144.287-144.287 431.983-431.983 6.159-6.159 13.197-6.159 6.159 0 12.317 6.159 0.88 0.88 1.76 1.76 107.336 107.336 431.103 430.223 6.159 6.159 6.159 12.317 0 7.038-6.159 13.197-6.159 6.159-13.197 6.159-6.159 0-12.317-6.159-138.129-137.249-414.387-412.627-6.159-6.159-12.317 0z" />
        </svg>
        {% if theme.sidebar.scrollpercent %}
          <span id="scrollpercent"><span>0</span>%</span>
        {% endif %}
      </div>
    {% endif %}

  </div>

  {% include '_scripts/vendors.swig' %}
  {% include '_scripts/commons.swig' %}

  {% set scheme_script = '_scripts/schemes/' + 'Muse' | lower + '.swig' %}
  {% include scheme_script %}

  {% block script_extra %}
    {% include '_scripts/pages/post-details.swig' %}
  {% endblock %}

  {% include '_scripts/boostrap.swig' %}

  {% include '_third-party/comments/index.swig' %}
  {% include '_third-party/search/index.swig' %}
  {% include '_third-party/analytics/lean-analytics.swig' %}
  {% include '_third-party/seo/baidu-push.swig' %}
  {% include '_third-party/rating.swig' %}
  {% include '_third-party/mathjax.swig' %}
  {% include '_third-party/scroll-cookie.swig' %}
  {% include '_third-party/exturl.swig' %}
</body>
</html>
