$(document).ready(function () {
  //header
  $("header").append(
    `    
  <div class="container pb-5" id="nav-container">
  <nav
    class="navbar navbar-light justify-content-md-between justify-content-center shadow-lg"
    id="top-nav">
    <a class="navbar-brand text-center rounded-circle shadow-lg"
      href="github.io/ichoi21/portfolio_2.0"
      id="logo">IC</a>

    <ul class="nav flex-nowrap" id="nav-links">
      <li class="nav-item">
        <a class="nav-link" href="#411">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      <li class="nav-item" id="dynamic-time">
      <a class="nav-link" href="#">TIME</a>
      </li>
    </ul>
  </nav>
  `
  );
  //main
  $("main").append(
    `
  <div class="container" id="nav-container">
  <h4 class="text-center fixed-center">
  2.0 Coming to a Browser Near You.
  </h4>
  </div>
  `
  );
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
