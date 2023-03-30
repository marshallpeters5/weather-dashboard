function weatherSearch(city) {
    var key = '9c94824efa946f7fbfd1c97e28156fbb'
    var city;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + '&appid=' + APIKey;
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