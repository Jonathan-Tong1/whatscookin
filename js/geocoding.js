
const users = [{
    "name": "Brenda",
    "gender": "female",
    "location": [43.00085106547584, -81.27926717578396],
    "cuisine": ["italian", "japanese", "greek"],
    "preference": ["vegan", "peanut-free"],
    "experience": [1],
    "utensils": [3]
},
{
    "name": "Conner",
    "gender": "male",
    "location": [42.991080519332996, -81.24163941978082],
    "cuisine": ["hispanic", "mediterranean", "greek"],
    "preference": ["vegan", "peanut-free"],
    "experience": [3],
    "utensils": [2]
},
{
    "name": "Sasha",
    "gender": "other",
    "location": [42.98997398187246, -81.25369863144066],
    "cuisine": ["italian", "chinese", "greek"],
    "preference": ["vegan", "peanut-free"],
    "experience": [3],
    "utensils": [3]
},
{
    "name": "Jennifer",
    "gender": "female",
    "location": [43.004649807775756, -81.26682915324247],
    "cuisine": ["lebanese", "japanese", "greek"],
    "preference": ["vegan", "peanut-free"],
    "experience": [1],
    "utensils": [2]
},
{
    "name": "Eric",
    "gender": "male",
    "location": [43.01979711894438, -81.27749640685002],
    "cuisine": ["italian", "moroccan", "greek"],
    "preference": ["vegan", "peanut-free"],
    "experience": [2],
    "utensils": [3]
},
{
    "name": "Frank",
    "gender": "male",
    "location": [43.02093858081859, -81.27753020056839],
    "cuisine": ["italian", "Thai", "greek"],
    "preference": ["vegan", "peanut-free"],
    "experience": [0],
    "utensils": [0]
}]

const publicLoc = [
    [42.98880464048201, -81.24839858642186],
    [42.99749880123185, -81.18325884411269],
    [42.962355561148826, -81.2970148882916],
    [42.944211244171655, -81.25258957534575],
    [42.98038275374684, -81.21529873061996],
    [43.010250654832184, -81.27629123137179]]

const locName = ['Victoria Park','East Lions Park','Civic Garden','Earl Nichols','Crouch Neighbourhood Resource Centre','Western']


var geocoder;
var map;
function initialize() {
    geocoder = new google.maps.Geocoder();
}

initialize();

function initMap(myLatLng, friend1, friend2, friend3) {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });

    new google.maps.Marker({
        position: friend1,
        map,
        title: "Hello World!",
    });

    new google.maps.Marker({
        position: friend2,
        map,
        title: "Hello World!",
    });

    new google.maps.Marker({
        position: friend3,
        map,
        title: "Hello World!",
    });
}

function codeAddress() {
    show("results");
    var address = document.getElementById('address').value;
    var c1 = document.getElementById('cuisine1').value;
    var c2 = document.getElementById('cuisine2').value;
    var c3 = document.getElementById('cuisine3').value;
    var lvl = document.getElementById('cooklvl').value;
    var utensil = document.getElementById('utensil').value;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
            console.log("Success.")
            
            let indices = findFriends(findPublicLocation(lat, lng))
            console.log(indices);
            let i = 1;
            for (x in indices) {
                document.getElementById("name-"+i).innerHTML = users[indices[x]].name;
                console.log(users[indices[x]].name);
                document.getElementById("food-preference"+i).innerHTML = users[indices[x]].cuisine[0];
                i++;
            }
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function findPublicLocation(lat, lng) {

    let distances = [];
    let i = 0;
    for (var x in publicLoc) {
        distances[i] = distance(publicLoc[x][0], publicLoc[x][1], lat, lng);
        console.log(distances[i]);
        i++;
    }

    const min = Math.min(...distances);
    const index = distances.indexOf(min);

    document.getElementById("location").innerHTML = locName[index];
    return index;
}

function findFriends(index) {

    let distances = [];
    let i = 0;
    let index1;
    let index2;
    let index3;

    for (var x in users) {
        distances[i] = distance(users[x].location[0], users[x].location[1], lat, lng);
        console.log(distances[i]);
        i++;
    }

    index1 = distances.indexOf(Math.min(...distances))
    let distances2 = [...distances];
    distances2.splice(index1, 1);
    index2 = distances.indexOf(Math.min(...distances2))
    let distances3 = [...distances2];
    distances3.splice(index2, 1);
    index3 = distances.indexOf(Math.min(...distances3))

    let indices = [index1, index2, index3]

    let friend1 = {lat: users[index1].location[0] , lng: users[index1].location[0]};
    let friend2 = {lat: users[index2].location[0] , lng: users[index2].location[0]};
    let friend3 = {lat: users[index3].location[0] , lng: users[index3].location[0]};

    let myLatLng = {lat: publicLoc[index][0] , lng: publicLoc[index][1]};
    initMap(myLatLng,friend1,friend2,friend3);

    return indices;
}


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