$(document).on("click", "#btnC", function (e) {
  e.preventDefault();

  $("article").html(
    `
  <div class="container z-depth-4 white-text center-align" id="contact" style="padding: 25px;">
    <div class="row">
      <span class="badge teal hoverable" style="font-size: 24px;">connect w. ian</span>
      </br>
      </br>
      If you're interested in connecting with ian, below are links where you can go to reach ian.
    </div>
    <div class="nav-wrapper">
      <ul class="center">
        <a class=" btn-floating pulse teal-text hoverable btn-large" href="https://www.linkedin.com/in/ichoi21/" target="blank" alt="Linkedin"><i class="fab fa-linkedin-in"></i>
        </a>
        &nbsp;          &nbsp;          &nbsp;
        <a class="btn-floating pulse contact-link white-text no-uppercase center-align btn-large hoverable" href="https://www.illiest.com" target="blank">il
        </a>
        &nbsp;          &nbsp;          &nbsp;
        <a class="btn-floating pulse teal-text hoverable btn-large" href="https://github.com/ichoi21" target="blank"><i class="fab fa-github" style="font-size:52px;"></i>
        </a>
      </ul>
    </div>
  </div>
`
  );
});
