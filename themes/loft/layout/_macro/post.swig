{% macro render(post, is_index, post_extra_class) %}

  {% set headlessPost = Array.prototype.indexOf.call(['quote', 'picture'], post.type) > -1 %}

  {% set post_class = 'post post-type-' + post.type | default('normal') %}
  {% set post_class = post_class + ' ' + post_extra_class | default('') %}
  {% if post.sticky > 0 %}
    {% set post_class = post_class + ' ' + 'post-sticky' %}
  {% endif %}

  <article class="{{ post_class }}" ">
    <link itemprop="mainEntityOfPage" href="{{ config.url }}{{ url_for(post.path) }}">

    <span hidden itemprop="author">
      <meta itemprop="name" content="{{ theme.author }}">
      <meta itemprop="description" content="{{ theme.signature }}">
      <meta itemprop="image" content="{{ url_for( theme.avatar | default(theme.images + '/avatar.gif') ) }}">
    </span>

    <span hidden itemprop="publisher">
      <meta itemprop="name" content="{{ config.title }}">
    </span>

    {% if not headlessPost %}
      <header class="post-header">

        {# Not to show title for quote posts that do not have a title #}
        {% if not (is_index and post.type === 'quote' and not post.title) %}
          <{% if theme.seo %}h2{% else %}h1{% endif %} class="post-title" itemprop="name headline">{#
          #}{# Link posts #}{#
          #}{% if post.link %}
              {% if post.sticky > 0 %}
                {{ post.sticky }}
                <span class="post-sticky-flag" title="{{ __('post.sticky') }}">
                  <i class="fa fa-thumb-tack"></i>
                </span>
              {% endif %}
              <a class="post-title-link post-title-link-external" target="_blank" href="{{ url_for(post.link) }}" itemprop="url">
                {{ post.title or post.link }}
                <i class="fa fa-external-link"></i>
              </a>
            {% else %}{#
            #}{% if is_index %}
                {% if post.sticky > 0 %}
                  <span class="post-sticky-flag" title="{{ __('post.sticky') }}">
                    <i class="fa fa-thumb-tack"></i>
                  </span>
                {% endif %}
                <a class="post-title-link" href="{{ url_for(post.path) }}" >{#
                #}{{ post.title | default(__('post.untitled'))}}{#
              #}</a>{#
            #}{% else %}{{ post.title }}{% endif %}{#
          #}{% endif %}{#
        #}</{% if theme.seo %}h2{% else %}h1{% endif %}>
        {% endif %}

        <div class="post-meta">
          <span class="post-time">
            {% if theme.post_meta.created_at %}
              <svg style="vertical-align: middle;" class="icon" fill='#999' width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M744.571429 550.857143l-292.571429 292.571428q-5.714286 5.142857-13.142857 5.142858t-13.142857-5.142858l-164.571429-164.571428q-5.142857-5.714286-5.142857-13.142857t5.142857-12.571429l26.285714-26.285714q5.142857-5.142857 12.571429-5.142857t13.142857 5.142857l125.714286 125.714286 253.714286-253.714286q5.714286-5.142857 13.142857-5.142857t12.571428 5.142857l26.285715 26.285714q5.142857 5.142857 5.142857 12.571429t-5.142857 13.142857zM73.142857 950.857143h804.571429V365.714286H73.142857v585.142857zM292.571429 256V91.428571q0-8-5.142858-13.142857t-13.142857-5.142857h-36.571428q-8 0-13.142857 5.142857t-5.142858 13.142857v164.571429q0 8 5.142858 13.142857t13.142857 5.142857h36.571428q8 0 13.142857-5.142857t5.142858-13.142857z m438.857142 0V91.428571q0-8-5.142857-13.142857t-13.142857-5.142857h-36.571428q-8 0-13.142858 5.142857t-5.142857 13.142857v164.571429q0 8 5.142857 13.142857t13.142858 5.142857h36.571428q8 0 13.142857-5.142857t5.142857-13.142857z m219.428572-36.571429v731.428572q0 29.714286-21.714286 51.428571t-51.428571 21.714286H73.142857q-29.714286 0-51.428571-21.714286t-21.714286-51.428571V219.428571q0-29.714286 21.714286-51.428571t51.428571-21.714286h73.142857v-54.857143q0-37.714286 26.857143-64.571428T237.714286 0h36.571428q37.714286 0 64.571429 26.857143t26.857143 64.571428v54.857143h219.428571v-54.857143q0-37.714286 26.857143-64.571428t64.571429-26.857143h36.571428q37.714286 0 64.571429 26.857143t26.857143 64.571428v54.857143h73.142857q29.714286 0 51.428571 21.714286t21.714286 51.428571z" />
              </svg>
              <time title="{{ __('post.created') }}" itemprop="dateCreated datePublished" datetime="{{ moment(post.date).format() }}" style="color:#222;vertical-align: middle;">
                {{ date(post.date, config.date_format) }}
              </time>
            {% endif %}

            {% if theme.post_meta.created_at and theme.post_meta.updated_at %}
              <span class="post-meta-divider">|</span>
            {% endif %}

            {% if theme.post_meta.updated_at %}
              <span class="post-meta-item-icon">
                <i class="icon-calendar-o"></i>
              </span>
              {% if theme.post_meta.item_text %}
                <span class="post-meta-item-text">{{ __('post.modified') }}</span>
              {% endif %}
              <time title="{{ __('post.modified') }}" itemprop="dateModified" datetime="{{ moment(post.updated).format() }}">
                {{ date(post.updated, config.date_format) }}
              </time>
            {% endif %}
          </span>


          {% if post.categories and post.categories.length and theme.post_meta.categories %}
            <span class="post-category">
            {% if theme.post_meta.created_at or theme.post_meta.updated_at %}
              <span class="post-meta-divider">|</span>
            {% endif %}
              <!-- <span class="post-meta-item-icon">
                <i class="icon-classify"></i>
              </span> -->

              {% for cat in post.categories %}
                {% if cat.name=="见闻" %}
                <svg style="vertical-align: middle;" class="icon" fill='#999' width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 512 512">
                  <path d="M386.168,494.644H160.541c-4.79,0-8.678,3.879-8.678,8.678s3.888,8.678,8.678,8.678h225.627
                    c4.79,0,8.678-3.879,8.678-8.678C394.846,498.523,390.96,494.644,386.168,494.644z"/>
                  <path d="M308.067,459.932h-69.424c-4.79,0-8.678,3.879-8.678,8.678v34.712c0,4.799,3.888,8.678,8.678,8.678h69.424
                    c4.79,0,8.678-3.879,8.678-8.678V468.61C316.746,463.811,312.858,459.932,308.067,459.932z M299.389,494.644h-52.068v-17.356
                    h52.068V494.644z"/>
                  <path d="M461.728,375.695l-43.39-43.39c-3.393-3.393-8.878-3.393-12.271,0s-3.393,8.878,0,12.271l43.39,43.39
                    c1.692,1.692,3.914,2.543,6.135,2.543s4.443-0.85,6.135-2.543C465.121,384.573,465.121,379.088,461.728,375.695z"/>
                  <path d="M468.783,312.485c-4.053-2.569-9.416-1.354-11.976,2.699c-40.136,63.471-108.718,101.359-183.452,101.359
                    c-119.626,0-216.949-97.323-216.949-216.949c0-74.726,37.888-143.308,101.35-183.443c4.053-2.56,5.259-7.914,2.699-11.967
                    c-2.569-4.053-7.923-5.276-11.976-2.699C79.958,44.813,39.051,118.871,39.051,199.593c0,129.198,105.108,234.305,234.305,234.305
                    c80.722,0,154.78-40.917,198.127-109.447C474.033,320.399,472.835,315.045,468.783,312.485z"/>
                  <path d="M296.603,418.13c-1.77-1.649-4.148-2.447-6.561-2.291c-12.236,0.946-20.575,0.981-33.393,0
                    c-2.447-0.156-4.782,0.659-6.552,2.291c-1.77,1.64-2.777,3.948-2.777,6.361v44.119c0,4.799,3.888,8.678,8.678,8.678h34.712
                    c4.79,0,8.678-3.879,8.669-8.678v-44.119C299.381,422.079,298.374,419.762,296.603,418.13z M282.033,459.932h-17.356v-26.225
                    c6.066,0.269,11.316,0.26,17.356,0.009V459.932z"/>
                  <path d="M273.355,0C163.301,0,73.762,89.531,73.762,199.593s89.539,199.593,199.593,199.593s199.593-89.531,199.593-199.593
                    S383.41,0,273.355,0z M273.355,381.831c-100.491,0-182.237-81.755-182.237-182.237S172.864,17.356,273.355,17.356
                    s182.237,81.755,182.237,182.237S373.846,381.831,273.355,381.831z"/>
                  <path d="M140.643,54.61l-43.39-43.39c-3.393-3.393-8.878-3.393-12.271,0c-3.393,3.393-3.393,8.878,0,12.271l43.39,43.39
                    c1.692,1.692,3.914,2.543,6.135,2.543s4.443-0.85,6.135-2.543C144.036,63.488,144.036,58.004,140.643,54.61z"/>
                  <path d="M232.431,319.957l-5.25-5.25c-6.387-6.387-13.833-11.42-22.12-14.969l-26.763-11.472
                    c-10.787-4.634-17.755-15.195-17.755-26.936v-13.06c0-7.992-3.931-15.49-10.492-20.037c-6.561-4.547-14.961-5.58-22.433-2.786
                    l-41.672,15.629c-4.191,1.562-6.491,6.057-5.337,10.37c19.534,72.756,79.855,129.232,153.678,143.881
                    c0.573,0.121,1.137,0.174,1.701,0.174c3.801,0,7.255-2.508,8.331-6.3l3.176-11.116
                    C253.397,357.419,247.616,335.152,232.431,319.957z M230.816,373.317l-0.929,3.263c-61.292-15.048-111.26-61.857-130.308-122.082
                    l34.13-12.8c2.187-0.824,4.539-0.529,6.456,0.798c1.918,1.328,3.02,3.428,3.02,5.771v13.06c0,18.692,11.099,35.528,28.29,42.887
                    l26.763,11.472c6.248,2.681,11.863,6.474,16.679,11.29l5.25,5.25C230.902,342.962,234.981,358.704,230.816,373.317z"/>
                  <path d="M182.384,30.113c-2.716-3.358-7.48-4.2-11.186-1.987c-57.318,34.226-93.635,94.321-97.15,160.777
                    c-0.156,2.942,1.198,5.762,3.584,7.489c1.501,1.085,3.28,1.64,5.085,1.64c1.067,0,2.135-0.191,3.141-0.581l53.829-21.244
                    c12.895-5.163,19.551-19.517,15.16-32.69c-1.076-3.219-0.243-6.717,2.152-9.112l25.01-25.01
                    c8.539-8.539,13.243-19.881,13.243-31.961V66.135C195.254,53.127,190.681,40.326,182.384,30.113z M177.897,77.433
                    c0,7.437-2.898,14.431-8.166,19.69l-25.01,25.01c-7.073,7.09-9.502,17.382-6.335,26.876c1.493,4.461-0.764,9.329-5.137,11.073
                    l-40.63,16.106c6.743-52.493,36.022-99.467,80.514-128.798c3.107,5.78,4.764,12.227,4.764,18.744V77.433z"/>
                  <path d="M299.389,60.746c-33.497,0-60.746,28.802-60.746,64.217c0,33.28,48.996,83.768,54.576,89.409
                    c1.631,1.658,3.853,2.577,6.17,2.577s4.539-0.92,6.17-2.577c5.58-5.649,54.576-56.129,54.576-89.409
                    C360.135,89.548,332.887,60.746,299.389,60.746z M299.381,195.671c-18.874-20.472-43.381-52.979-43.381-70.708
                    c0-25.834,19.465-46.861,43.39-46.861c23.925,0,43.39,21.027,43.39,46.861C342.78,144.367,315.47,178.15,299.381,195.671z"/>
                  <path d="M357.09,18.441c-0.79-0.364-1.631-0.607-2.491-0.729l-2.005-0.269c-2.812-0.365-5.667,0.659-7.593,2.777
                    c-1.918,2.117-2.664,5.051-2.005,7.828c3.28,13.815,6.43,44.535-4.738,51.322c-4.096,2.482-5.398,7.819-2.907,11.924
                    c2.491,4.096,7.828,5.406,11.924,2.907c16.801-10.205,17.295-35.97,15.421-53.413c55.617,31.388,91.31,90.303,92.837,154.52
                    l-15.447,11.585c-2.083,1.562-4.634,2.161-7.185,1.64c-2.551-0.495-4.695-2.005-6.031-4.235l-8.999-14.996
                    c-2.977-4.972-8.591-7.532-14.284-6.647c-5.701,0.92-10.197,5.172-11.455,10.813l-14.058,63.271
                    c-13.164,17.104-54.749,20.94-70.014,20.957c-4.79,0.009-8.669,3.888-8.669,8.687c0,4.79,3.888,8.669,8.678,8.669
                    c6.691,0,65.953-0.842,85.33-29.887c0.59-0.894,1.015-1.883,1.25-2.933l12.635-56.867l4.712,7.862
                    c3.836,6.396,10.24,10.9,17.573,12.34c7.35,1.397,14.969-0.312,20.94-4.799l18.97-14.232c2.187-1.64,3.471-4.217,3.471-6.942
                    C472.949,122.125,427.476,51.018,357.09,18.441z"/>
                  <path d="M256.259,254.872c-0.781-4.599-5.38-7.819-10.066-6.951c-9.285,1.744-20.22,2.786-33.323,3.393
                    c-2.343,0.078-4.513,1.041-6.075,2.777c-1.562,1.727-2.343,3.896-2.256,6.248c0.174,4.686,3.992,8.331,8.678,8.331
                    c0.174,0,0.26,0,0.347,0c14.058-0.607,25.687-1.822,35.753-3.645c4.165-0.781,7.116-4.339,7.116-8.591
                    C256.434,255.913,256.346,255.393,256.259,254.872z"/>
                  <path d="M175.989,254.265c-1.649-1.648-3.819-2.517-6.075-2.517c-6.075-0.087-12.149-0.087-18.05-0.087
                    c-4.773,0-8.678,3.905-8.678,8.678s3.905,8.678,8.678,8.678c5.814,0,11.715,0,17.79,0.087h0.174c4.773,0,8.678-3.905,8.678-8.678
                    C178.507,258.17,177.638,255.913,175.989,254.265z"/>
                  <path d="M299.389,199.593c-4.773,0-8.678,3.905-8.678,8.678c-0.087,10.761-3.037,18.484-9.719,24.993
                    c-3.384,3.298-3.558,8.843-0.26,12.236c1.649,1.744,3.905,2.69,6.335,2.69c2.169,0,4.339-0.868,5.988-2.343
                    c9.893-9.372,15.1-22.389,15.013-37.576C308.067,203.498,304.163,199.593,299.389,199.593z"/>
                  <path d="M308.033,95.458h-17.295c-9.581,0-17.382,7.793-17.382,17.382v17.304c0,9.589,7.801,17.382,17.391,17.382h17.295
                    c9.581,0,17.382-7.793,17.382-17.382V112.84C325.423,103.25,317.621,95.458,308.033,95.458z M308.059,130.169l-17.347-0.026
                    l0.026-17.33l17.33,0.026L308.059,130.169z"/>
                </svg>
                {% endif %}
                {% if cat.name=="笔记" %}
                <svg style="vertical-align: middle;" class="icon" fill='#999' width="1.2em" height="1.2em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M840.268442 529.277502l0 259.159458c0 28.579919-23.251563 51.831482-51.831482 51.831482L235.56304 840.268442c-28.579919 0-51.831482-23.252587-51.831482-51.831482L183.731558 235.56304c0-28.580942 23.252587-51.831482 51.831482-51.831482l276.43696 0 0-34.555004c-141.105738 0-276.43696 0-276.43696 0-47.709605 0-86.386486 38.674834-86.386486 86.386486l0 552.873919c0 47.709605 38.676881 86.386486 86.386486 86.386486l552.873919 0c47.710628 0 86.386486-38.676881 86.386486-86.386486 0 0 0-123.322723 0-259.159458l-0.343831-0.360204L840.268442 529.277502zM846.646626 237.488512l-354.401433 354.401433-60.607769-60.607769 354.401433-354.401433 60.607769 60.607769ZM379.594411 643.927705 479.007585 605.123934 418.399205 544.515554ZM862.172311 161.827689c-16.868179-16.868179-44.216038-16.868179-61.084217 0l61.084217 61.084217C879.040491 206.043726 879.040491 178.695868 862.172311 161.827689z" /></svg>
                {% endif %}
                {% if cat.name=="读书" %}
                <svg style="vertical-align: middle;" class="icon" fill='#999' width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z"/></svg>
                {% endif %}
                <span itemprop="about">
                  <a href="{{ url_for(cat.path) }}" itemprop="url" rel="index" style="vertical-align: middle;">
                    <!-- <span itemprop="name">{{ cat.name }}</span> -->
                    {{ cat.name }}
                  </a>
                </span>

                {% set cat_length = post.categories.length %}
                {% if cat_length > 1 and loop.index !== cat_length %}
                  {{ __('symbol.comma') }}
                {% endif %}
              {% endfor %}
            </span>
          {% endif %}
          <span class="post-meta-divider">|</span>
          <svg style="vertical-align: middle;" class="icon" fill='#999' width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M501.434368 0c-141.385728 0-256 114.614272-256 256s114.614272 256 256 256 256-114.614272 256-256S642.818048 0 501.434368 0zM503.228416 460.8c-113.106944 0-204.8-91.693056-204.8-204.8 0-113.108992 91.693056-204.8 204.8-204.8s204.8 91.691008 204.8 204.8C708.028416 369.106944 616.33536 460.8 503.228416 460.8z"  /><path d="M76.818432 950.798336C77.428736 710.965248 272.0256 516.73088 512 516.73088s434.571264 194.236416 435.181568 434.067456l52.789248 0C999.360512 681.811968 781.129728 463.941632 512 463.941632S24.639488 681.811968 24.029184 950.798336L76.818432 950.798336z"  />
          </svg>
          <span style="color:#222;vertical-align: middle;"> {{ post.author }}</span>
          <!-- 增加作者<span class="fa fa-user-o"> </span> -->
          {% if post.comments %}
            {% if (theme.duoshuo and theme.duoshuo.shortname) or theme.duoshuo_shortname %}
              <span class="post-comments-count">
                <span class="post-meta-divider">|</span>
                <span class="post-meta-item-icon">
                  <i class="fa fa-comment-o"></i>
                </span>
                <a href="{{ url_for(post.path) }}#comments" itemprop="discussionUrl">
                  <span class="post-comments-count ds-thread-count" data-thread-key="{{ post.path }}" itemprop="commentCount"></span>
                </a>
              </span>
            {% elseif theme.facebook_comments_plugin.enable %}
              <span class="post-comments-count">
                <span class="post-meta-divider">|</span>
                <span class="post-meta-item-icon">
                  <i class="fa fa-comment-o"></i>
                </span>
                <a href="{{ url_for(post.path) }}#comments" itemprop="discussionUrl">
                  <span class="post-comments-count fb-comments-count" data-href="{{ post.permalink }}" itemprop="commentCount">0</span> comments
                </a>
              </span>
            {% elseif theme.disqus.enable and theme.disqus.count %}
              <span class="post-comments-count">
                <span class="post-meta-divider">|</span>
                <span class="post-meta-item-icon">
                  <i class="fa fa-comment-o"></i>
                </span>
                <a href="{{ url_for(post.path) }}#comments" itemprop="discussionUrl">
                  <span class="post-comments-count disqus-comment-count"
                        data-disqus-identifier="{{ post.path }}" itemprop="commentCount"></span>
                </a>
              </span>
            {% elseif theme.hypercomments_id %}
            <!--noindex-->
              <span class="post-comments-count">
                <span class="post-meta-divider">|</span>
                <span class="post-meta-item-icon">
                  <i class="fa fa-comment-o"></i>
                </span>
                <a href="{{ url_for(post.path) }}#comments" itemprop="discussionUrl">
                  <span class="post-comments-count hc-comment-count" data-xid="{{ post.path }}" itemprop="commentsCount"></span>
                </a>
              </span>
              <!--/noindex-->
            {% elseif theme.changyan.enable and theme.changyan.appid and theme.changyan.appkey %}
              <span class="post-comments-count">
              <span class="post-meta-divider">|</span>
              <span class="post-meta-item-icon">
                <i class="fa fa-comment-o"></i>
              </span>
              {% if is_post() %}
                <a href="{{ url_for(post.path) }}#SOHUCS" itemprop="discussionUrl">
                  <span id="changyan_count_unit" class="post-comments-count hc-comment-count" data-xid="{{ post.path }}" itemprop="commentsCount"></span>
                </a>
              {% else %}
                <a href="{{ url_for(post.path) }}#SOHUCS" itemprop="discussionUrl">
                  <span id="url::{{ post.permalink }}" class="cy_cmt_count" data-xid="{{ post.path }}" itemprop="commentsCount" ></span>
                </a>
              {% endif %}
            {% endif %}
          {% endif %}

          {# LeanCould PageView #}
          {% if theme.leancloud_visitors.enable %}
             <span id="{{ url_for(post.path) }}" class="leancloud_visitors" data-flag-title="{{ post.title }}">
               <span class="post-meta-divider">|</span>
               <span class="post-meta-item-icon">
                 <i class="fa fa-eye"></i>
               </span>
               {% if theme.post_meta.item_text %}
                 <span class="post-meta-item-text">{{__('post.visitors')}} </span>
               {% endif %}
                 <span class="leancloud-visitors-count"></span>
             </span>
          {% endif %}

          {% if not is_index and theme.busuanzi_count.enable and theme.busuanzi_count.page_pv %}
            <span class="post-meta-divider">|</span>
            <span class="page-pv">{{ theme.busuanzi_count.page_pv_header }}
            <span class="busuanzi-value" id="busuanzi_value_page_pv" ></span>{{ theme.busuanzi_count.page_pv_footer }}
            </span>
          {% endif %}

          {% if theme.post_wordcount.wordcount or theme.post_wordcount.min2read %}
            <div class="post-wordcount">
              {% if theme.post_wordcount.wordcount %}
                {% if not theme.post_wordcount.separated_meta %}
                  <span class="post-meta-divider">|</span>
                {% endif %}
                <span class="post-meta-item-icon">
                  <i class="fa fa-file-word-o"></i>
                </span>
                {% if theme.post_wordcount.item_text %}
                  <span class="post-meta-item-text">{{ __('post.wordcount') }}</span>
                {% endif %}
                <span title="{{ __('post.wordcount') }}">
                  {{ wordcount(post.content) }}
                </span>
              {% endif %}

              {% if theme.post_wordcount.wordcount and theme.post_wordcount.min2read %}
                <span class="post-meta-divider">|</span>
              {% endif %}

              {% if theme.post_wordcount.min2read %}
                <span class="post-meta-item-icon">
                  <i class="fa fa-clock-o"></i>
                </span>
                {% if theme.post_wordcount.item_text %}
                  <span class="post-meta-item-text">{{ __('post.min2read') }}</span>
                {% endif %}
                <span title="{{ __('post.min2read') }}">
                  {{ min2read(post.content) }}
                </span>
              {% endif %}
            </div>
          {% endif %}

          {% if post.description and (not theme.excerpt_description or not is_index) %}
              <div class="post-description">
                  {{ post.description }}
              </div>
          {% endif %}

        </div>
      </header>
    {% endif %}

    <div class="post-body{% if theme.han %} han-init-context{% endif %}" itemprop="articleBody">

      {# Gallery support #}
      {% if post.photos and post.photos.length %}
        <div class="post-gallery">
          {% set COLUMN_NUMBER = 3 %}
          {% for photo in post.photos %}
            {% if loop.index0 % COLUMN_NUMBER === 0 %}<div class="post-gallery-row">{% endif %}
              <a class="post-gallery-img fancybox"
                 href="{{ url_for(photo) }}" rel="gallery_{{ post._id }}" itemprop="url">
                <img src="{{ url_for(photo) }}" itemprop="contentUrl"/>
              </a>
            {% if loop.index0 % COLUMN_NUMBER === 2 %}</div>{% endif %}
          {% endfor %}

          {# Append end tag for `post-gallery-row` when (photos size mod COLUMN_NUMBER) is less than COLUMN_NUMBER #}
          {% if post.photos.length % COLUMN_NUMBER > 0 %}</div>{% endif %}
        </div>
      {% endif %}

      {% if is_index %}
        {% if post.description and theme.excerpt_description %}
          {{ post.description }}
          <!--noindex-->
          <div class="post-button">
            <a class="btn" href="{{ url_for(post.path) }}">
              {{ __('post.read_more') }}
            </a>
          </div>
          <!--/noindex-->
        {% elif post.excerpt  %}
          {{ post.excerpt }}
          <!--noindex-->
          <div class="post-button">
            <a class="btn" href="{{ url_for(post.path) }}{% if theme.scroll_to_more %}#{{ __('post.more') }}{% endif %}" rel="contents">
              {{ __('post.read_more') }}
            </a>
          </div>
          <!--/noindex-->
        {% elif theme.auto_excerpt.enable %}
          {% set content = post.content | striptags %}
          {{ content.substring(0, theme.auto_excerpt.length) }}
          {% if content.length > theme.auto_excerpt.length %}...{% endif %}
          <!--noindex-->
          <div class="post-button">
            <a class="btn" href="{{ url_for(post.path) }}{% if theme.scroll_to_more %}#{{ __('post.more') }}{% endif %}" rel="contents">
              {{ __('post.read_more') }}
            </a>
          </div>
          <!--/noindex-->
        {% else %}
          {% if post.type === 'picture' %}
            <a href="{{ url_for(post.path) }}">{{ post.content }}</a>
          {% else %}
            {{ post.content }}
          {% endif %}
        {% endif %}
      {% else %}
        {{ post.content }}
      {% endif  %}
    </div>

    <div>
      {% if not is_index %}
        {% include 'wechat-subscriber.swig' %}
      {% endif %}
    </div>

    <div>
      {% if not is_index %}
        {% include 'reward.swig' %}
      {% endif %}
    </div>

    <div>
      {% if not is_index %}
        {% include 'post-copyright.swig' with { post: post } %}
      {% endif %}
    </div>

    <footer class="post-footer">
      {% if post.tags and post.tags.length and not is_index %}
        <div class="post-tags">
          {% for tag in post.tags %}
            <a href="{{ url_for(tag.path) }}" rel="tag" class="icon-tag-backup">
              <svg style="vertical-align: middle;" fill="#999" class="icon" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M329.142857 256q0-30.281143-21.430857-51.712t-51.712-21.430857-51.712 21.430857-21.430857 51.712 21.430857 51.712 51.712 21.430857 51.712-21.430857 21.430857-51.712zM938.861714 585.142857q0 30.281143-21.138286 51.419429l-280.576 281.161143q-22.308571 21.138286-52.004571 21.138286-30.281143 0-51.419429-21.138286l-408.576-409.161143q-21.723429-21.138286-36.864-57.709714t-15.140571-66.852571l0-237.714286q0-29.696 21.723429-51.419429t51.419429-21.723429l237.714286 0q30.281143 0 66.852571 15.140571t58.294857 36.864l408.576 407.990857q21.138286 22.308571 21.138286 52.004571z" />
              </svg>
             {{ tag.name }}
           </a>
          {% endfor %}
        </div>
      {% endif %}

      {% if not is_index %}
      {% if theme.rating.enable or (theme.vkontakte_api.enable and theme.vkontakte_api.like) or (theme.facebook_sdk.enable and theme.facebook_sdk.like_button) %}
        <div class="post-widgets">
        {% if theme.rating.enable %}
          <div class="wp_rating">
            <div id="wpac-rating"></div>
          </div>
        {% endif %}

        {% if (theme.vkontakte_api.enable and theme.vkontakte_api.like) or (theme.facebook_sdk.enable and theme.facebook_sdk.like_button) %}
          <div class="social-like">
            {% if theme.vkontakte_api.enable and theme.vkontakte_api.like %}
              <div class="vk_like">
                <span id="vk_like"></span>
              </div>
            {% endif %}

            {% if theme.facebook_sdk.enable and theme.facebook_sdk.like_button %}
              <div class="fb_like">
                <div class="fb-like" data-layout="button_count" data-share="true"></div>
              </div>
            {% endif %}
          </div>
        {% endif %}
        </div>
      {% endif %}
      {% endif %}

      {% if not is_index and (post.prev or post.next) %}
        <div class="post-nav">
          <div class="post-nav-next post-nav-item">
            {% if post.next %}
              <a href="{{ url_for(post.next.path) }}" rel="next" title="{{ post.next.title }}">
                <svg style="transform: translateX(calc(50% - .55em)) translateY(calc(50% - .35em));" class="icon" fill="#222" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M359.261 495.219q85.098-85.098 341.118-341.118 5.091-5.819 5.091-10.91 0-5.091-5.091-10.183-5.091-5.091-10.183-5.091-5.091 0-10.91 5.091-119.282 118.555-357.119 356.392-5.091 5.091-5.091 10.183 0 5.819 5.091 10.91 0.727 0 1.455 0.727 88.734 89.462 355.665 356.392 5.819 5.091 10.91 5.091 5.091 0 10.183-5.091 5.091-4.364 5.091-10.183 0-5.819-5.091-10.91-113.464-113.464-341.118-341.118-1.455-2.182-1.455-5.091 0-2.909 1.455-5.091z" /></svg>
                 {{ post.next.title }}
              </a>
            {% endif %}
          </div>

          <span class="post-nav-divider"></span>

          <div class="post-nav-prev post-nav-item">
            {% if post.prev %}
              <a href="{{ url_for(post.prev.path) }}" rel="prev" title="{{ post.prev.title }}">
                {{ post.prev.title }} 
                <svg style="transform: translateX(calc(50% - .55em)) translateY(calc(50% - .35em));" class="icon" fill="#222" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M673.714 495.219q-85.098-85.098-341.118-341.118-5.091-5.819-5.091-10.91 0-5.091 5.091-10.183 5.091-5.091 10.183-5.091 5.091 0 10.91 5.091 119.282 119.282 357.119 357.119 5.091 5.091 5.091 10.91 0 5.091-5.091 10.183-0.727 0.727-1.455 1.455-88.734 88.734-355.665 354.937-5.819 5.091-10.91 5.091-5.091 0-10.183-5.091-5.091-5.091-5.091-10.183 0-5.091 5.091-10.91 113.464-113.464 341.118-341.118 5.091-5.091 0-10.183z" /></svg>
              </a>
            {% endif %}
          </div>
        </div>
      {% endif %}

      {% set isLast = loop.index % page.per_page === 0 %}
      {% if is_index and not isLast %}
        <div class="post-eof"></div>
      {% endif %}
    </footer>
  </article>

{% endmacro %}
