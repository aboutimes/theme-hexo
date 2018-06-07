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
          <i class="icon-up"></i>
          {% if theme.sidebar.scrollpercent %}
            <span id="scrollpercent"><span>0</span>%</span>
          {% endif %}
        </div>
      {% endif %}
    </div>
  </aside>
  {% endif %}
{% endmacro %}
