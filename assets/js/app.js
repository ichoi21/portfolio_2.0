$(document).ready(function () {
  //header
  $("header").append(
    `    
  <div class="container pb-5 fixed-top" id="nav-container">
  <nav
    class="navbar navbar-light justify-content-md-between justify-content-center shadow-lg"
    id="top-nav">
    <a class="navbar-brand text-center rounded-circle shadow-lg"
      href="github.io/ichoi21/portfolio_2.0"
      id="logo">IC</a>


    <ul class="nav flex-nowrap" id="nav-links">
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      <li class="nav-item" id="dynamic-time">
      </li>
    </ul>
  </nav>
  `
  );

  var autoTime = function () {
    var currentDT = moment().format("llll");
    $("#dynamic-time").html(currentDT);
  };
  autoTime();
  setInterval(autoTime, 1000);

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
