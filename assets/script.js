var APIKey = '9c94824efa946f7fbfd1c97e28156fbb'
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + '&appid=' + APIKey;
fetch(queryURL)