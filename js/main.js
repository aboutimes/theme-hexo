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
    this.popupMenu();
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
      if (typeof window.getComputedStyle(document.body).scrollBehavior == 'undefined') {
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
   * Compute tags FIXME: css not work
   */
  // Blog.prototype.tagCount = function() {
  //   let $counts = $('.tag-count');
  //   console.log($counts);
  //   if ($counts.length === 0) {
  //     return;
  //   }
  //   $counts.each(function(index) {
  //     let count = $(this);
  //     if (count.text() === 1) {
  //       count.css('color', 'red');
  //     }
  //   });
  // }


  /**
   * Responsive menu
   */
  Blog.prototype.popupMenu = function() {
    document.querySelector('.toggle-button').onclick = function(){
      menuToggle('menu');
    };
    
    ['resize','click','tap','swipe'].forEach(function(item,index){
      // 点击、滑动非 toggle-button 区域，则隐藏菜单
      window.addEventListener(item, (e) => {
        let areaDom = e.target.parentNode?e.target.parentNode:false;
        
        if (areaDom) {
          if (!areaDom.matches('.toggle-button') && !areaDom.parentNode.matches('.toggle-button')) {
            menuToggle('menu', 'onlyhide');
          }
        }else {
          menuToggle('menu', 'onlyhide');
        }
        
        // if (!$(e.target).is('.toggle-button') && !$(e.target).parents().is('.toggle-button')) {
        //   menuToggle('menu', 'onlyhide')
        // }
      });
    });
  };

  /*
  显示、隐藏菜单
   */
  function menuToggle(id, is_only_hide){
    let menuDom = document.querySelector('#' + id);
    let isShow = menuDom.style.visibility?menuDom.style.visibility:'hidden';
    
    if(isShow == 'hidden' && is_only_hide!="onlyhide") {
      menuDom.style.maxHeight = '150px';
      menuDom.style.opacity = '1';
      menuDom.style.visibility = 'visible';
    }
    if(isShow == 'visible'){
      menuDom.style.visibility = 'hidden';
      menuDom.style.opacity = '0';
      menuDom.style.maxHeight = '0';  
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