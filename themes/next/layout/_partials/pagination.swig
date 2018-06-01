{% if page.prev or page.next %}
  <nav class="pagination">
    {{
      paginator({
        prev_text: '<i class="icon-left"></i>',
        next_text: '<i class="icon-right"></i>',
        mid_size: 1
      })
    }}
  </nav>
{% endif %}
