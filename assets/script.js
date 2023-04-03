function weatherSearch() {
    var cityInput = document.getElementById('city-input')
    console.log(cityInput.value)
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + '&appid=9c94824efa946f7fbfd1c97e28156fbb&units=imperial';
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

document.querySelector(".add-city").addEventListener("click", weatherSearch);