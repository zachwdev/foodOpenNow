document.body.onload = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Your browser does not support geolocation.')
    }
}

function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude);
}