{% if page.comments %}
  <div class="comments" id="comments">
    <!-- 评论 -->
    <div id="showtalk">查看评论</div>
    <div id="container"></div>
    <script>
      var showtalk = document.getElementById("showtalk");
      var container = document.getElementById("container");
      var status = true;
      showtalk.onclick=function(){
        if (status == 'true') {
          if (typeof Gitment=='function') {// 如果已经缓存，不必再次加载
            var gitment = new Gitment({
              id: document.title, 
              owner: '{{ config.gitment_owner }}',
              repo: '{{ config.gitment_repo }}',
              oauth: {
                client_id: '{{ config.client_id }}',
                client_secret: '{{ config.client_secret }}',
              },
            });
            status = false;
            gitment.render('container');
            showtalk.innerHTML = '收起评论';
          }else {// 如果未加载，则先加载 js
            //动态加载 css
            $("head").append("<link>");
            var css = $("head").children(":last");
            css.attr({
              rel:  "stylesheet",
              type: "text/css",
              href: "/css/gitment.css"
            });
            //动态加载 js
            $.holdReady(true);    //hold住，等待 js 加载，后续代码不能执行
            $.getScript('/js/gitment.js',function(){
              $.holdReady(false);     //释放，js加载完成，继续执行后续代码
              // 渲染
              var gitment = new Gitment({
                id: document.title, 
                owner: '{{ config.gitment_owner }}',
                repo: '{{ config.gitment_repo }}',
                oauth: {
                  client_id: '{{ config.client_id }}',
                  client_secret: '{{ config.client_secret }}',
                },
              });
              status = false;
              gitment.render('container');
              showtalk.innerHTML = '收起评论';
            });
          }
          
        }else {
          status = true;
          container.innerHTML = '';
          showtalk.innerHTML = '查看评论';
        }
      };
    </script>
    <!-- 评论 -->
    {% if (theme.duoshuo and theme.duoshuo.shortname) or theme.duoshuo_shortname %}
      <div class="ds-thread" data-thread-key="{{ page.path }}"
           data-title="{{ page.title }}" data-url="{{ page.permalink }}">
      </div>
    {% elseif theme.facebook_sdk.enable and theme.facebook_comments_plugin.enable %}
      <div class="fb-comments"
           data-href="{{ page.permalink }}"
           data-numposts="{{ theme.facebook_comments_plugin.num_of_posts }}"
           data-width="{{ theme.facebook_comments_plugin.width }}"
           data-colorscheme="{{ theme.facebook_comments_plugin.scheme }}">
      </div>
    {% elseif theme.vkontakte_api.enable and theme.vkontakte_api.comments %}
      <div id="vk_comments"></div>
    {% elseif theme.disqus.enable %}
      <div id="disqus_thread">
        <noscript>
          Please enable JavaScript to view the
          <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
      </div>
    {% elseif theme.hypercomments_id %}
      <div id="hypercomments_widget"></div>
    {% elseif theme.youyan_uid %}
      <div id="uyan_frame"></div>
    {% elseif theme.livere_uid %}
      <div id="lv-container" data-id="city" data-uid="{{ theme.livere_uid }}"></div>
    {% elseif theme.changyan.appid and theme.changyan.appkey %}
      <div id="SOHUCS"></div>
    {% endif %}
  </div>
{% endif %}
