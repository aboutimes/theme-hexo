{% macro render(is_post) %}
{% set display_toc = is_post and theme.toc.enable or is_page and theme.toc.enable %}
  {% if display_toc and toc(page.content).length > 1 %}
  <div class="sidebar-toggle">
    <div class="sidebar-toggle-line-wrap">
      <span class="sidebar-toggle-line sidebar-toggle-line-first"></span>
      <span class="sidebar-toggle-line sidebar-toggle-line-middle"></span>
      <span class="sidebar-toggle-line sidebar-toggle-line-last"></span>
    </div>
  </div>
  <aside id="sidebar" class="sidebar">
    <div class="sidebar-inner" id="sidebarinner">
        
        <ul class="sidebar-nav motion-element">
          <li class="sidebar-nav-toc sidebar-nav-active" data-target="post-toc-wrap" >
            {{ __('sidebar.toc') }}
          </li>
        </ul>

      {% if display_toc and toc(page.content).length > 1 %}
      <!--noindex-->
        <section class="post-toc-wrap motion-element sidebar-panel sidebar-panel-active">
          <div class="post-toc">
              {% set toc = toc(page.content, { "class": "nav", list_number: page.toc_number }) %}
              <div class="post-toc-content">{{ toc }}</div>
          </div>
        </section>
      <!--/noindex-->
      {% endif %}
      {% if theme.sidebar.b2t %}
        <div class="back-to-top">
          <svg style="vertical-align: middle;" class="icon" fill="#999" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M504.962 328.269q-102.937 102.937-412.627 412.627-6.159 6.159-13.197 6.159-7.038 0-12.317-6.159-6.159-6.159-6.159-12.317 0-6.159 6.159-13.197 144.287-144.287 431.983-431.983 6.159-6.159 13.197-6.159 6.159 0 12.317 6.159 0.88 0.88 1.76 1.76 107.336 107.336 431.103 430.223 6.159 6.159 6.159 12.317 0 7.038-6.159 13.197-6.159 6.159-13.197 6.159-6.159 0-12.317-6.159-138.129-137.249-414.387-412.627-6.159-6.159-12.317 0z" />
          </svg>
          {% if theme.sidebar.scrollpercent %}
            <span id="scrollpercent"><span>0</span>%</span>
          {% endif %}
        </div>
      {% endif %}
    </div>
  </aside>
  {% endif %}
{% endmacro %}
