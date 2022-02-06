var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

initialize();

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        match(lat, lng);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function match(lat, lng) {

}

function distance(lat1, lng1, lat2, lng2) {
    
}