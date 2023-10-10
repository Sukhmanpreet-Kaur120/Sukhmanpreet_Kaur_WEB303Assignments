/*
    Assignment #4
    {Sukhmanpreet Kaur}
*/

$(function () {
    // your code here
    if(!navigator.geolocation){
        console.log("The browser doesn't support location.");
    }
    else{
        navigator.geolocation.getCurrentPosition(success,fail);
        function success(pos){
            let tude = pos.coords.latitude.toFixed(2);
            let long = pos.coords.longitude.toFixed(2);
            let acc = pos.coords.accuracy.toFixed(2);
            $("#locationhere").html("<p>Latitude: " +tude +"</p>" +"<p>Longitude: " +long +"</p>" +
            "<p>Accuracy: " +acc/1000 +" killometers</p>");
            localStorage.setItem("loc",JSON.stringify({ latitude: tude, longitude: long }));
            let storeLoc = localStorage.getItem("loc");
            if (storeLoc) {
                storeLoc = JSON.parse(storeLoc);
                let storeLatitude = storeLoc.latitude;
                let storeLongitude = storeLoc.longitude;
                let dist = calcDistanceBetweenPoints(tude, long, storeLatitude, storeLongitude);
                $("#locationhere").append("<p>Stored location: Latitude " +storeLatitude +" Longitude " +storeLongitude +"</p>"+
                "<p> Distance traveled: " +(dist/1000).toFixed(2) +" killometers</p>");
                $("header").append("<h1>Welcome Back!</h1>");
                $("header").append("<h1> You have traveled " +(dist / 1000).toFixed(2) +" killometers.</h1>");
        }
            else {
                $("header").append("<h1>Welcome to E Corp!</h1>");
            }}
            function fail() {
            $("#locationhere").html("<h1>Please allow your geolocation</h1>");
        }
    }
    
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


