$(document).on("click", "#btnA", function (e) {
  e.preventDefault();

  $("article").html(
    `
  <div class="container" id="about">
    <div class="row">
      <div class="col-sm-12 mt-5 p-5 shadow-lg">
      <img src="./assets/img/iC_Avatar.png" id="about-circle"/>
      <p>.about ian</p>
      <p>
I am a Mechanical Engineer in the construction industry.
I am currently working at a MEP contractor as a Director/Sr Project Manager overseeing
the HVAC dept while tackling both mechanical and plumbing projects in both the public
and private sectors.
<br>
With my previous work experience and passionate strive on individual efficiency,
I've taken on a full stack boot-camp program to better understand coding in effort to find ways
to expand alternate methods to maximize efficiencies in the construction industry.
Coding development to untap areas where subcontractors lack technology not yet fully exposed to the industry
could be a potential game-changer on scaling, flexing, and adaptable operational capabilities.
      </p>
      </div>
    </div>
  </div>
`
  );
});

$(document).ready(function () {
  $("article").html(
    `
  <div class="container z-depth-4" id="about">
    <div class="row">
      <div class="col-sm-12 p-5 white-text">
      <img src="./assets/img/iC_Avatar.png" id="about-circle" class="hoverable z-depth-5"/>
      <h3 class="badge indigo hoverable">&nbsp;&nbsp;&nbsp;&nbsp;.about ian</h3>
      </br>
        I am a Mechanical Engineer in the construction industry.
        I am currently working at a MEP contractor as a Director/Sr Project Manager overseeing
        the HVAC dept while tackling both mechanical and plumbing projects in both the public
        and private sectors.
      </br>
      </br>
        With my previous work experience and passionate strive on individual efficiency,
        I've taken on a full stack boot-camp program to better understand coding in effort to find ways
        to expand alternate methods to maximize efficiencies in the construction industry.
        Coding development to untap areas where subcontractors lack technology not yet fully exposed to the industry
        could be a potential game-changer on scaling, flexing, and adaptable operational capabilities.
      </br>
      </br>
        Please check out my <a class="hoverable" id="btnP">portfolio</a>. If you'd like to reach out, <a class="hoverable" id="btnC">connect with me</a>..
      </div>
    </div>
  </div>
`
  );
});
