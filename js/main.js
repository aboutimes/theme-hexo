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

    // if (theme.leancloud.app_id && theme.leancloud.app_key) {
    //   this.statistic();
    // }
    this.backToTop();
    this.highlight();
    // this.tagCount();
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
    let $backToTop = document.querySelector('#back-to-top');
    let $webBody = document.querySelector('#web-body');

    window.addEventListener('scroll', () => { 
      if (document.body.scrollTop > 100) {
        $backToTop.style.visibility = 'visible';
        $backToTop.style.opacity = '1';
      } else {
        $backToTop.style.visibility = 'hidden';
        $backToTop.style.opacity = '0';
      }
    });

    $backToTop.onclick = function(){ 
      if (typeof window.getComputedStyle(document.body).scrollBehavior == 'undefined' || 
        window.getComputedStyle(document.body).scrollBehavior!='smooth') {
        // 兼容不支持 scroll-behavior 浏览器
        scrollToTop();
      }else{
        $webBody.scrollTop = 0;
      }
    };
  };

  const scrollToTop = () => {
    let sTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(sTop);
    if (sTop > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, sTop - sTop / 8)
    }
  }

  /**
   * Code hightlight
   */
  Blog.prototype.highlight = function() {
    let class_highlight = document.querySelector('figure.highlight');
    if (class_highlight) {
      class_highlight.classList.add('hljs');
    }
    let sapn_line = document.querySelectorAll('span.line span:first-child');
    if (sapn_line) {
      [].forEach.call(sapn_line,function(el,i){
        const classes = el.getAttribute('class').split(' ');
        if (classes.length === 1) {
          el.classList.add('hljs-' + classes[0]);
        }
      });
    }
    
  }

 
  let config = window.config;
  let blog = new Blog(config);
  blog.setup();

}(window))