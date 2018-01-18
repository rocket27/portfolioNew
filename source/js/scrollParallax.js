'use strict'

document.addEventListener('DOMContentLoaded', function() {
  let hero = document.querySelector('.hero'),
    heroBlog = document.querySelector('.heroBlog');

  if (hero && !heroBlog) {

    let scrollParallax = (function() {
      let 
        bg = document.querySelector('.hero__bg'),
        sectionText = document.querySelector('.hero__titleBg'),
        user = document.querySelector('.hero__userBlock');
    
      return {
        move: function(block, windowScroll, strateAmount) {
          let 
            strate = windowScroll / strateAmount + '%',
            transformString = 'translate3d(0,' + strate + ', 0)',
            style = block.style;
    
          style.transform = transformString;
          style.webkitTransform = transformString;
        },
    
        init: function(wScroll) {
          this.move(bg, wScroll, 45);
          this.move(sectionText, wScroll, 5);
          this.move(user, wScroll, -10);
        }
      }
    }());
    
    window.onscroll = function() {
      let wScroll = window.pageYOffset;
    
      scrollParallax.init(wScroll);
    }

  } else if (heroBlog) {

    let scrollParallax = (function() {
      let 
        bg = document.querySelector('.hero__bg'),
        user = document.querySelector('.heroBlog__userImage'),
        title = document.querySelector('.heroBlogTitle'),
        text = document.querySelector('.heroBlog__description');
    
      return {
        move: function(block, windowScroll, strateAmount) {
          let 
            strate = windowScroll / strateAmount + '%',
            transformString = 'translate3d(0,' + strate + ', 0)',
            style = block.style;
    
          style.transform = transformString;
          style.webkitTransform = transformString;
        },
    
        init: function(wScroll) {
          this.move(bg, wScroll, 30);
          this.move(user, wScroll, 7);
          this.move(title, wScroll, 5);
          this.move(text, wScroll, -30);
        }
      }
    }());
    
    window.onscroll = function() {
      let wScroll = window.pageYOffset;
    
      scrollParallax.init(wScroll);
    }
  }
});