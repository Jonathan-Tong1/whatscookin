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
            console.log(distance(users[0].user1.location[0],users[0].user1.location[1],lat,lng));
            console.log("Success.")
            //match(lat, lng);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function match(lat, lng) {
    let distances = [];
    for (let i = 0; i<6; i++) {
        distance[i] = distance(users[0].user1.location[0],users[0].user1.location[1], publicLoc[0].park1[0],publicLoc[0].park1[1]);
    }

    return Math.min(...distances); //
}

const
    getFirstIndexOfMinValue = array =>
        array.reduce((r, v, i, a) => v <= a[r] ? r : i, -1);   


//distance between two coord
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function distance(lat1, lng1, lat2, lng2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLng = deg2rad(lng2 - lng1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

const users = [{
    "user1": {
        "name": "Brenda",
        "location": [43.00085106547584, -81.27926717578396],
        "cuisine": ["italian", "japanese", "greek"],
        "preference": ["vegan", "peanut-free"],
        "experience": [3],
        "utensils": [3]
    },
    "user2": {
        "name": "Conner",
        "location": [42.991080519332996, -81.24163941978082],
        "cuisine": ["italian", "japanese", "greek"],
        "preference": ["vegan", "peanut-free"],
        "experience": [3],
        "utensils": [3]
    },
    "user3": {
        "name": "Sasha",
        "location": [42.98997398187246, -81.25369863144066],
        "cuisine": ["italian", "japanese", "greek"],
        "preference": ["vegan", "peanut-free"],
        "experience": [3],
        "utensils": [3]
    },
    "user4": {
        "name": "Jennifer",
        "location": [43.004649807775756, -81.26682915324247],
        "cuisine": ["italian", "japanese", "greek"],
        "preference": ["vegan", "peanut-free"],
        "experience": [3],
        "utensils": [3]
    },
    "user5": {
        "name": "Eric",
        "location": [-100.23123, -100.12312],
        "cuisine": ["italian", "japanese", "greek"],
        "preference": ["vegan", "peanut-free"],
        "experience": [3],
        "utensils": [3]
    },
    "user6": {
        "name": "Frank",
        "location": [-100.23123, -100.12312],
        "cuisine": ["italian", "japanese", "greek"],
        "preference": ["vegan", "peanut-free"],
        "experience": [3],
        "utensils": [3]
    }
}]

const publicLoc = [{
    "park1": [42.98880464048201, -81.24839858642186],
    "park2": [42.99749880123185, -81.18325884411269],
    "park3": [42.962355561148826, -81.2970148882916],
    "park4": [42.944211244171655, -81.25258957534575],
    "park5": [42.98038275374684, -81.21529873061996],
    "park6": [43.010250654832184, -81.27629123137179],
}]




