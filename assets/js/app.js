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

  // //weather app - BETA
  // var openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";
  // var lat;
  // var lon;

  // var question = confirm(
  //   "Do you want this app to track your location? Ok for Yes , Cancel for No"
  // );
  // if (question === true) {
  //   alert(
  //     "This application will now track your location. Please go to your browser's setting and enable location."
  //   );
  //   getLocation();
  // } else {
  //   $("#info").text("Enter a city on the search box!");
  //   $("#info2").text(
  //     "Forget the weather person on your local cable network. Today, smartphone and web apps provide up-to-the-minute weather alerts and updates that can’t be found anywhere else."
  //   );
  // }
  // if (window.navigator && window.navigator.geolocation) {
  //   window.navigator.geolocation.getCurrentPosition(function (position) {
  //     $.getJSON(openWeatherMap, {
  //       lat: position.coords.latitude,
  //       lon: position.coords.longitude,
  //       units: "imperial",
  //       APPID: "987370c9088242014b673e9c345ee3d9",
  //     }).done(function (weather) {
  //       // console.log(weather);
  //       var res = weather;
  //       var name = res.name;
  //       var icon = res.weather[0].icon;
  //       var weather = res.weather[0].description;
  //       var temp = Math.floor(res.main.temp);
  //       var humidity = res.main.humidity;
  //       var windSpeed = res.wind.speed;

  //       $("#cityName").text(name);
  //       $("#icon").attr(
  //         "src",
  //         "http://openweathermap.org/img/wn/" + icon + ".png"
  //       );
  //       $("#weather").html("<b>Description: </b>" + weather);
  //       $("#temperature").html("<b>Temperature: </b>" + temp + " °F");
  //       $("#humidity").html("<b>Humidity: </b>" + humidity + "%");
  //       $("#windSpeed").html("<b>Wind Speed: </b>" + windSpeed + " MPH");
  //     });
  //   });
  // }

  // setInterval(weather, 300000);

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
  // $(".tooltipped").tooltip(); - idea in progress
});
