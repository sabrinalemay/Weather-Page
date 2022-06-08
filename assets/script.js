var searchBtn = document.querySelector('.search');
var input = document.querySelector('.input');
var Url = "http://api.openweathermap.org/data/2.5/weather?q="
var cityName = document.querySelector('.cityName');

searchBtn.addEventListener('click', function() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=c7dcfbac4d6d7f4bb9b41c18434427cb')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("Insert a city"))
})

var box = document.createElement("input").appendChild(cityName);


/*GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city*/