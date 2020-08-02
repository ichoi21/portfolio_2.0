$(document).on("click", "#btnA", function (e) {
  e.preventDefault();

  $("article").html(
    `
    <div class="container z-depth-4 white-text" id="about" style="padding: 25px;">
      <div class="row">
        <div class="col s12">
          <img src="./assets/img/iC_Avatar.png" id="about-circle" class="z-depth-3"/>
          <div class="row">
          <span class="badge indigo hoverable">&nbsp;&nbsp;&nbsp;&nbsp;.about ian</span>
          </br>
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
            Coding development to untapped areas where subcontractors lack technology not yet fully exposed to the industry
            could be a potential game-changer on scaling, flexing, and adaptable operational capabilities.
          </br>
          </br>
            For more, please got to <a class="hoverable white-text" id="btnA">about</a> or check out my <a class="hoverable white-text" id="btnP">portfolio</a>. If you'd like to reach out, <a class="hoverable white-text" id="btnC">connect with me</a>..
          </div>
        </div>
      </div>
      <div class="row" id="skills">
      <div class="col s12">
        <span class="badge deep-orange hoverable">&nbsp;&nbsp;&nbsp;&nbsp;.skills</span>
        </br>
        <span class="btn-flat white-text">Programming Languages &amp; Tools</span>
        <div class="nav-wrapper">
        <ul class="dev-icons center">
          <span style="font-size: 36px;" class="deep-orange-text">
          <i class="fab fa-html5 hoverable" title="HTML 5"></i>
          <i class="fab fa-css3-alt hoverable"></i>
          <i class="fab fa-js-square hoverable"></i>
          <i class="fab fa-node hoverable"></i>
          <i class="fab fa-npm hoverable"></i>
          <i class="fab fa-git hoverable"></i>
          <i class="fab fa-gitlab hoverable"></i>
          <i class="fab fa-bootstrap hoverable"></i>
          <i class="fa fa-database hoverable"></i>
          <i class="fab fa-react hoverable"></i>
          </span>
        </ul>
      </div>
      <div class="btn-flat white-text">Technologies</div>
      <ul class="fa-ul mb-0">
        GitHub, Mongoose, AJAX, Sequelize, npm, CDN, REST, HTTP, API, momentJS, localStorage, Agile
        Development, Request-response pattern, Promises, CLI, Postman, MVC, NoSQL, SQL,
        Single Page Application, Progressive Web Application, SEO, ORM , ODM, Design Patterns, Scrum , Kanban,
        Inquirer.js, Test Driven Development, Jest, Mongo/Mongoose, MySQL Workbench, Handlebars, Continuous
        Integration, Linter, Context API, VS Code, jQuery
      </ul>
      </div>
      </div>
    </div>
 `
  );
});

$(document).ready(function () {
  $("article").html(
    `
  <div class="container white-text z-depth-4" id="about" style="padding: 25px;">
    <div class="row">
      <div class="col s12" style="padding-top: 30px; padding-right: 30px;">
      <img src="./assets/img/iC_Avatar.png" id="about-circle" class="z-depth-3"/>
        <div class="row" style="padding-left: 30px">
          <span class="badge indigo hoverable">&nbsp;&nbsp;&nbsp;&nbsp;.about ian</span>
          </br>
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
            Coding development to untapped areas where subcontractors lack technology not yet fully exposed to the industry
            could be a potential game-changer on scaling, flexing, and adaptable operational capabilities.
          </br>
          </br>
            For more, please got to <a class="hoverable white-text" id="btnA">about</a> or check out my <a class="hoverable white-text" id="btnP">portfolio</a>. If you'd like to reach out, <a class="hoverable white-text" id="btnC">connect with me</a>..
        </div>
      </div>
    </div>
`
  );
});
