var marker,
  // markerIcon = '../img/content/mapMarker.png',
  markerPosition = {
    lat: 55.01746817,
    lng: 82.92765856
  };

function initMap() {
  var mapContainer = document.getElementById('map');
  
  var mapCenter = {
    lat: 55.01773882, 
    lng: 82.91489124
  };

  var mapOptions = {
    zoom: 15,
    center: mapCenter,
    // disableDefaultUI: true,
    gestureHandling: 'none'
  };

  var googleMap = new google.maps.Map(mapContainer, mapOptions);

  $.getJSON("../json/googleMapStyle.json", function(data) {
    googleMap.setOptions({
      styles: data
    });
  });

  var markerOptions = {
    map: googleMap,
    position: markerPosition,
    // icon: markerIcon,
    animation: google.maps.Animation.DROP
  };

  marker = new google.maps.Marker(markerOptions);
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}