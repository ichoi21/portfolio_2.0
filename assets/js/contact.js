$(document).on("click", "#btnC", function (e) {
  e.preventDefault();
  $("article").html(
    `
  <div class="container z-depth-4" id="contact">
    <div class="row center-align">
    <h5 class="white-text">Contact Me</h5>
    </div>
    <div class="row center-align">
      <div class="col-sm-12 mt-5 p-2">
      <ul class="list-inline">
        <li class="list-inline-item hoverable circle">
        <a class="contact-logo rounded-circle white-text"
          href="https://www.linkedin.com/in/ichoi21/" target="blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        </li>
        <li class="list-inline-item hoverable circle">
        <a class="contact-link rounded-circle white-text text-center" href="https://www.illiest.com" target="blank">il
        </a>
        </li> 
        <li class="list-inline-item hoverable circle">
        <a class="contact-logo rounded-circle white-text"
          href="https://github.com/ichoi21" target="blank">
          <i class="fab fa-github"></i>
        </a>
        </li>
      </ul>
      </div> 
    </div>
  </div>
`
  );
});
