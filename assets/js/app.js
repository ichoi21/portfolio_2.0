$(document).ready(function () {
  //header
  $("header").append(
    `    
  <div class="container pb-5 fixed-top" id="nav-container">
  <nav
    class="navbar navbar-light justify-content-md-between justify-content-center shadow-lg"
    id="top-nav">
    <a class="navbar-brand text-center rounded-circle shadow-lg"
      href=""
      id="logo">IC</a>


    <ul class="nav flex-nowrap" id="nav-links">
      <li class="nav-item">
        <a class="nav-link" href="#about">about</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#portfolio">portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">contact</a>
      </li>
    </ul>
  </nav>
  </div>
  `
  );

  //widgets
  $("widgets").html(
    `    
  <div class="container shadow-lg">
      <div class="row text-center justify-content-md-center align-items-center" >
        <div class="card col-sm-4 m-2 center  bg-secondary text-light">
          <div id="dynamic-time"></div>
          <div>
            <h3 class="font-weight-bold" id="cityName"></h3>
            <div class="weatherImage">
            <img id="icon" />
          </div>
        </div>
      </div>
      <div class="card col-sm-4 m-2 bg-secondary text-light">
        <div class="pb-4" id="currentWeather">
          <div id="weather"></div>
          <div id="temperature"></div>
          <div id="humidity"></div>
          <div id="windSpeed"></div>
        </div>
      </div>
  </div>
  `
  );

  //current time using moment.js
  var autoTime = function () {
    var currentDT = moment().format("llll");
    $("#dynamic-time").html(currentDT);
  };
  autoTime();
  setInterval(autoTime, 1000);

  //weather app
  var openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";
  if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function (position) {
      $.getJSON(openWeatherMap, {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        units: "imperial",
        APPID: "987370c9088242014b673e9c345ee3d9",
      }).done(function (weather) {
        // console.log(weather);
        var res = weather;
        var name = res.name;
        var icon = res.weather[0].icon;
        var weather = res.weather[0].description;
        var temp = Math.floor(res.main.temp);
        var humidity = res.main.humidity;
        var windSpeed = res.wind.speed;

        $("#cityName").text(name);
        $("#icon").attr(
          "src",
          "http://openweathermap.org/img/wn/" + icon + ".png"
        );
        $("#weather").html("<b>Description: </b>" + weather);
        $("#temperature").html("<b>Temperature: </b>" + temp + " °F");
        $("#humidity").html("<b>Humidity: </b>" + humidity + "%");
        $("#windSpeed").html("<b>Wind Speed: </b>" + windSpeed + " MPH");
      });
    });
  }

  setInterval(weather, 300000);

  // footer
  $("footer").append(
    ` 
    <h6 class="footer text-center fixed-bottom small">
      With the help of Gooogle, open source, and all other devs .. consolidated
      by i21. 2020.
    </h6>
    `
  );
});
