$(document).ready(function () {
  //header
  $("header").html(
    `

    <nav>
      <div class="nav-wrapper blue-grey lighten-1" style="padding: 5px">
        <a href="/" class="brand-logo btn-floating red darken-1 btn-large no-uppercase">ic</a>
        <a href="/" data-target="mobileNav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><b class="btn-flat white-text" id="dynamic-time"></b></li>
          <li><a class="btn-flat" id="btnA">about</a></li>
          <li><a class="btn-flat" id="btnP">portfolio</a></li>
          <li><a class="btn-flat" id="btnC">contact</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav deep-orange accent-2" id="mobileNav">
      <div class="center-align" style="padding: 30px">
        <a href="/" class="brand-logo btn-floating red darken-1 btn-large">ic</a>
      </div>
      <li><a class="btn-flat waves-effect" id="btnA">about</a></li>
      <li><a class="btn-flat waves-effect" id="btnP">portfolio</a></li>
      <li><a class="btn-flat waves-effect" id="btnC">contact</a></li>
    </ul>
    `
  );

  //current time using moment.js
  var autoTime = function () {
    var currentDT = moment().format("llll");
    $("#dynamic-time").html(currentDT);
  };
  autoTime();
  setInterval(autoTime, 1000);

  // //weather app - BETA
  var openWeatherMap = "https://api.openweathermap.org/data/2.5/weather";
  var lat;
  var lon;

  var question = confirm(
    "This app wants to track your location? Ok for Yes , Cancel for No"
  );
  if (location.protocol === "http:") {
    openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";
    getLocation();
  } else {
    openWeatherMap = "https://api.openweathermap.org/data/2.5/weather";
    $("#weather").text(
      "Forget the weather person on your local cable network. Today, smartphone and web apps provide up-to-the-minute weather alerts and updates that can’t be found anywhere else."
    );
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(weather);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function weather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const units = "&units=imperial";
    const APPID = "&appid=987370c90882420";
    const code = "14b673e9c345ee3d9";

    $.ajax({
      url:
        openWeatherMap + "?lat=" + lat + "&lon=" + lon + units + APPID + code,
      type: "GET",
      dataType: "json",
      success: function (weather) {
        // console.log(url);
        console.log(weather);
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
          "https://openweathermap.org/img/wn/" + icon + ".png"
        );
        $("#weather").html("<b>Description: </b>" + weather);
        $("#temperature").html("<b>Temperature: </b>" + temp + " °F");
        $("#humidity").html("<b>Humidity: </b>" + humidity + "%");
        $("#windSpeed").html("<b>Wind Speed: </b>" + windSpeed + " MPH");
      },
    });
  }

  setInterval(weather, 300000);

  //widgets
  $("widgets").html(
    `    
  <div class="container z-depth-4">
    <div class="row">
      <div class="card col s4 m5 l5 offset-m1 offset-l1 center" style="background-color: transparent;">
        <div>
          <h5 class="font-weight-bold" id="cityName"></h5>
            <div class="weatherImage"><img id="icon" /></div>
        </div>
      </div>
      <div class="card col s4 m5 l5" style="background-color: transparent;">
        <div class="pb-4" id="currentWeather">
        <ul>
          <li id="weather"></li>
          <li id="temperature"></li>
          <li id="humidity"></li>
          <li id="windSpeed"></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  `
  );

  // footer
  $("footer").append(
    ` 
    <div class="page-footer center-align blue-grey lighten-2 z-depth-2 black-text">
      With the help of Google, open source, and all other dev .. consolidated
      by i21. 2020.
    </div>
    <script src="assets/js/about.js"></script>
    <script src="assets/js/portfolio.js"></script>
    <script src="assets/js/contact.js"></script>
    `
  );

  //materialize activation for sidenav, carousel
  $(".sidenav").sidenav();
  $(".fixed-action-btn").floatingActionButton({ direction: "left" });
  $(".carousel").carousel();
  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4500);
  }
  // $(".tooltipped").tooltip(); - idea in progress
});
