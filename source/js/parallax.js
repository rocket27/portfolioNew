document.addEventListener('DOMContentLoaded', function() { // Аналог $(document).ready(function(){
  let parallaxContainer = document.getElementById('parallax');

  if (parallaxContainer) {
    let layers = parallaxContainer.children;

    let moveLayers = function(e) {
      let
        initialX = (window.innerWidth / 2) - e.pageX,
        initialY = (window.innerHeight / 2) - e.pageY;

      [].slice.call(layers).forEach(function(layer, i) {
        let
          divider = i / 100, 
          positionX = initialX * divider,
          positionY = initialY * divider,
          layerStyle = layer.style,
          transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';
    
        layerStyle.transform = transformString;
      });
    }

    window.addEventListener('mousemove', moveLayers);
  }
});

// var 
//   parallaxContainer = document.getElementById('parallax'),
//   layers = parallaxContainer.children;

// var moveLayers = function(e) {

//   var 
//     initialX = (window.innerWidth / 2) - e.pageX,
//     initialY = (window.innerHeight / 2) - e.pageY;

//   [].slice.call(layers).forEach(function(layer, i) {

//     var
//       divider = i / 100, 
//       positionX = initialX * divider,
//       positionY = initialY * divider,
//       layerStyle = layer.style,
//       transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';

//     layerStyle.transform = transformString;

//   });
// }

// window.addEventListener('mousemove', moveLayers);