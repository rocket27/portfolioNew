document.addEventListener('DOMContentLoaded', function() {
  let hero = document.querySelector('.hero');

  if (hero) {
    let scrollParallax = (function() {
      let 
        bg = document.querySelector('.hero__bg'),
        sectionText = document.querySelector('.hero__titleBg'),
        user = document.querySelector('.hero__userBlock');
    
      return {
        move: function(block, windowScroll, strateAmount) {
          let 
            strate = windowScroll / -strateAmount + '%',
            transformString = 'translate3d(0,' + strate + ', 0)',
            style = block.style;
    
          style.transform = transformString;
          style.webkitTransform = transformString;
        },
    
        init: function(wScroll) {
          this.move(bg, wScroll, 45);
          this.move(sectionText, wScroll, 10);
          this.move(user, wScroll, 4);
        }
      }
    }());
    
    window.onscroll = function() {
      let wScroll = window.pageYOffset;
    
      scrollParallax.init(wScroll);
    }
  }
});