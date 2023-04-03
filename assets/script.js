var weatherCardEl = document.querySelector('#weather-card')
function weatherSearch() {
    var cityInput = document.getElementById('city-input')
    var localCityList = []
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + '&appid=9c94824efa946f7fbfd1c97e28156fbb&units=imperial';
    fetch(queryURL)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            renderWeatherCards(data);
        })
        .catch(function () {
        });
}
window.onload = function () {
    weatherSearch();
}

function renderWeatherCards(data) {
    for (let index = 0; index < data.list.length; index = index + 8) {
        var date = new Date(data.list[index].dt * 1000)
        var currentDate = date.toLocaleDateString()
        var html =
        `<div class="card col-2 card-item-padding">
            <p class="card-text">Weather Status:</p>
            <img src="https://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png" class="card-img-top" id="icon-image" alt="image placeholder">
            <div class="card-body">
                <h5 class="card-title">${currentDate}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temperature: ${data.list[index].main.temp} °F</li>
                    <li class="list-group-item">Humidity: ${data.list[index].main.humidity}%</li>
                    <li class="list-group-item">Wind Speeds: ${data.list[index].wind.speed} MPH</li>
                    <li class="list-group-item">Wind Gust: ${data.list[index].wind.gust} MPH</li>
                </ul>
            </div>
        </div>`
        weatherCardEl.insertAdjacentHTML('beforeend', html)
    }
    console.log(data)

}


document.querySelector(".add-city").addEventListener("click", weatherSearch);