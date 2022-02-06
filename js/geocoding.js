var geocoder;
var map;
function initialize() {
    geocoder = new google.maps.Geocoder();
    //var latlng = new google.maps.LatLng(-34.397, 150.644);
    // var mapOptions = {
    //     zoom: 8,
    //     center: latlng
    // }
    //map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

initialize();

function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
            console.log("Success.")
            //match(lat, lng);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function match(lat, lng) {
    for (let i = 0; i < 10; i++) {
        userData = JSON.parse(users);
        if (distance(lat, lng, userData[i].location[0], userData[i].location[1]) > distance(lat, lng, userData[i + 1].location[0], userData[i + 1].location[1])) {
            i++;
        }
    }
}

function distance(lat1, lng1, lat2, lng2) {

}

const users =     
}