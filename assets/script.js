function weatherSearch(city) {
    var city = 
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city.val + '&appid=9c94824efa946f7fbfd1c97e28156fbb';
    fetch(queryURL)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {
        });
}
window.onload = function () {
    weatherSearch();
}