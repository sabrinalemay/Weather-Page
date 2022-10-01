var searchBtn = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue');
var Url = "http://api.openweathermap.org/data/2.5/weather?q="
var cityName = "";
var temperature = document.querySelector('.temperature');
var humidity = document.querySelector('.humidity');
var currentDate = moment().format("M/D/YYYY");
var forcast = [$("#dayOne"),$("#dayTwo"), $("#dayThree"), $("#dayFour"), $("#dayFive")];
var wind = document.querySelector(".wind");

searchBtn.addEventListener('click', getWeather)

function getWeather(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=c7dcfbac4d6d7f4bb9b41c18434427cb')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        var cityName = $("#cityName");
        cityName.text(data.name + " " + currentDate);

        var temperature = $(".temperature");
        temperature.text(data.main.temp);

        var humidity = $(".humidity");
        humidity.text(data.main.humidity);

        var wind = $(".wind");
        wind.text(data.wind.speed);

        // var uvIndex = $(".uvIndex");
        // uvIndex.text(data.)

       for(var i = 0; i < forcast.length; i++){
           forcast[i].find(".temperature").text(data.weather[i].main.temp);
           forcast[i].find(".humidity").text(data.weather[i].main.humidity);
           forcast[i].find(".wind").text(data.weather[i].wind.speed);
       }
    })
};

function weatherForcast() {
    fetch('api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=c7dcfbac4d6d7f4bb9b41c18434427cb')
}


