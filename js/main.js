(function(window) {
  'use strict';

  function Blog(config) {
    this.config = config;
  }


  /**
   * Initial
   */
  Blog.prototype.setup = function() {
    let theme = this.config;

    if (theme.fancybox) {
      this.fancybox();
    }
    // if (theme.leancloud.app_id && theme.leancloud.app_key) {
    //   this.statistic();
    // }
    this.backToTop();
    this.popupMenu();
    this.highlight();
    // this.tagCount();
  };


  /**
   * FancyBox
   */
  Blog.prototype.fancybox = function() {
    if ($.fancybox) {
      $('.blog-post').each(function() {
        $(this).find('img').each(function() {
          let href = 'href="' + this.src + '"';
          let title = 'title="' + this.alt + '"';
          $(this).wrap('<a class="fancybox" ' + href + ' ' + title + '></a>');
        });
      });
      $('.fancybox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic'
      });
    }
  };


  /**
   * Reading Times
   */
  Blog.prototype.statistic = function() {

  };


  /**
   * Back To The Top
   */
  Blog.prototype.backToTop = function() {
    let $backToTop = $('#back-to-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $backToTop.fadeIn(1000);
      } else {
        $backToTop.fadeOut(1000);
      }
    });

    $backToTop.click(function() {
      $('body,html').animate({scrollTop: 0});
    });
  };


  /**
   * Compute tags FIXME: css not work
   */
  Blog.prototype.tagCount = function() {
    let $counts = $('.tag-count');
    if ($counts.length === 0) {
      return;
    }
    $counts.each(function(index) {
      let count = $(this);
      if (count.text() === 1) {
        count.css('color', 'red');
      }
    });
  }


  /**
   * Responsive menu
   */
  Blog.prototype.popupMenu = function() {
    $('.toggle-button').click(function(){
      $('#menu').slideToggle(300);
    });

    $(document).on('click tap swipe','div',function(e) {
      if ($("#menu").is(":visible")) {
        if (!$(e.target).is('.toggle-button') && !$(e.target).parents().is('.toggle-button')) {
          $('#menu').slideUp(300);
        }
      }
    });
    $(window).resize(function() {  
      if ($("#menu").is(":visible")) {
        $('#menu').slideUp(300);
      }
    });  
  };


  /**
   * Code hightlight
   */
  Blog.prototype.highlight = function() {
    $('figure.highlight').addClass('hljs');
    $('figure.highlight .code .line > span').each(function () {
      const classes = $(this).attr('class').split(' ');
      if (classes.length === 1) {
          $(this).addClass('hljs-' + classes[0]);
      }
    });
  }

 
  let config = window.config;
  let blog = new Blog(config);
  blog.setup();

}(window))