$(document).ready(function () {
  //header
  $("header").html(
    `
  <div class="container fixed-top" id="nav-container">
  <nav>
    <div class="nav-wrapper blue-grey lighten-1" style="padding: 5px">
      <a href="/" class="brand-logo btn-floating red darken-1 btn-large">ic</a>
      <a href="/" data-target="mobileNav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a class="btn-flat" id="btnA">about</a></li>
        <li><a class="btn-flat" id="btnP">portfolio</a></li>
        <li><a class="btn-flat" id="btnC">contact</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav deep-orange accent-1" id="mobileNav">
    <div class="center-align" style="padding: 30px">
      <a href="/" class="brand-logo btn-floating red darken-1 btn-large">ic</a>
    </div>
    <li><a class="btn-flat" id="btnA">about</a></li>
    <li><a class="btn-flat" id="btnP">portfolio</a></li>
    <li><a class="btn-flat" id="btnC">contact</a></li>
  </ul>
  </div>
  `
  );

  //widgets
  $("widgets").html(
    `    
  <div class="container z-depth-4">
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
      With the help of Google, open source, and all other dev .. consolidated
      by i21. 2020.
    </h6>
    <script src="assets/js/about.js"></script>
    <script src="assets/js/portfolio.js"></script>
    <script src="assets/js/contact.js"></script>
    `
  );

  //materialize activation for sidenav, carousel
  $(".sidenav").sidenav();
  $(".fixed-action-btn").floatingActionButton({ direction: "left" });
  $(".carousel").carousel();
  $(".tooltipped").tooltip();
});
