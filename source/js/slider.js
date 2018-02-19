var slider = (function() {
  var counter = 1,
    duration = 750,
    inProcess = false;

  // var changeDescription = function() {
  //   var items = $('.letter'),
  //     startColor = 0x16a006,
  //     enumerator = 0;

  //   function each() {
  //     var item = items.eq(enumerator),
  //       timer;
      
  //     item.css({
  //       'background-color' : '#' + startColor.toString(16)
  //     });
      
  //     startColor = startColor + 0x000002;
      
  //     enumerator++;
      
  //     if (enumerator == items.length) {
  //       if (timer) clearTimeout(timer);
        
  //       enumerator = 0;  
  //     }
      
  //     timer = setTimeout(each, 25);
  //   }

  //   each();
  // }

  var changeFigure = function(pointer) {
    var items = $('.sliderFigure')
      .find($('.sliderFigure__item')),
      activeItem = items
        .filter('.sliderFigure__item_active');

    var reqItem;

    var fnctn = function(className) {
      activeItem.animate({
        'opacity' : '0'
      }, duration);
  
      reqItem.animate({
        'opacity' : '1'
      }, duration, function() {
        activeItem.removeClass(className);
  
        $(this).addClass(className);
  
        inProcess = false;
      });
    }

    if (pointer == 'next') {
      if (counter >= items.length) counter = 0;
      
      reqItem = items.eq(counter);

      fnctn('sliderFigure__item_active');
    } else {
      if (counter <= 0) counter = items.length;

      reqItem = items.eq(counter - 1);

      fnctn('sliderFigure__item_active');
    }

  }

  var moveSlide = function(container, direction, pointer) {
    var items = $('.sliderControl__item', container), // аналогично var items = container.find($('.sliderControl__item'));
      activeItem = items.filter('.sliderControl__item_active'),
      direction = direction == 'down' ? 100 : -100,
      reqItem;
      
    var sliderStart = function(className) {
      activeItem.animate({
        'top' : direction + '%'
      }, duration);
  
      reqItem.animate({
        'top' : '0'
      }, duration, function() {
        activeItem.removeClass(className)
          .css('top', -direction + '%');
  
        $(this).addClass(className);
  
        inProcess = false;
      });
    }

    if (pointer == 'next') {
      if (counter >= items.length) counter = 0;
      
      reqItem = items.eq(counter);

      sliderStart('sliderControl__item_active');
    } else {
      if (counter <= 0) counter = items.length;

      reqItem = items.eq(counter - 1);

      sliderStart('sliderControl__item_active');
    }

  }

  return {
    init: function () {
      $('.sliderControl__button_down').on('click', function(e) {
        e.preventDefault();

        // console.log('До нажатия кнопки "Down", counter = ' + counter);

        if (!inProcess) {
          inProcess = true;

          changeFigure('next');
          moveSlide($('.sliderControl_slideDown'), 'down', 'next');
          moveSlide($('.sliderControl_slideUp'), 'up', 'next');
        }
        
        counter++;

        // console.log('После нажатия кнопки "Down", counter = ' + counter);

      });

      $('.sliderControl__button_up').on('click', function(e) {
        e.preventDefault();
        
        // console.log('До нажатия кнопки "Up", counter = ' + counter);
        
        counter--;

        if (!inProcess) {
          inProcess = true;
          
          changeFigure('prev');
          moveSlide($('.sliderControl_slideDown'), 'down', 'prev');
          moveSlide($('.sliderControl_slideUp'), 'up', 'prev');  
        }
        
        // console.log('После нажатия кнопки "Up", counter = ' + counter);

      });

      // $('.slider__projectLink').on('click', function(e) {
      //   e.preventDefault();

      //   changeDescription();
      // });
    }
  }

}());

$(function () {
  slider.init();
});