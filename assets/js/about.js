$(document).on("click", "#btnA", function (e) {
  e.preventDefault();

  $("article").html(
    `
    <div class="container z-depth-4" id="about">
    <div class="row">
      <div class="col s12 m10 l8 mp-5 white-text">
      <img src="./assets/img/iC_Avatar.png" id="about-circle" class="hoverable z-depth-5"/>
      <h6 class="badge indigo hoverable">&nbsp;&nbsp;&nbsp;&nbsp;.about ian</h6>
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
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 l8 white-text pl-5 pr-5 align-items-center" id="skills">
        <h6 class="indigo text-secondary">.skills</h6>
        <h6 class="">Programming Languages &amp; Tools</h6>
        <ul class="list-inline dev-icons center">
        <span style="font-size: 36px;">
          <li class="list-inline-item">
            <i class="fab fa-html5" title="HTML 5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt" title="CSS3"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square" title="JavaScript"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node" title="Node.js"></i>
          </li>
          <li class="list-inline-item" title="NPM">
            <i class="fab fa-npm"></i>
          </li>
          <li class="list-inline-item" title="Git">
            <i class="fab fa-git"></i>
          </li>
          <li class="list-inline-item" title="Gitlab">
            <i class="fab fa-gitlab"></i>
          </li>
          <li class="list-inline-item" title="Bootstrap">
            <i class="fab fa-bootstrap"></i>
          </li>
          <li class="list-inline-item" title="MySQL, MongoDb, IndexedDb, NoSQL">
            <i class="fa fa-database"></i>
          </li>
          <li class="list-inline-item" title="React">
            <i class="fab fa-react"></i>
          </li>
          </span>
        </ul>

        <div class="subheading mb-3">Technologies</div>
        <ul class="fa-ul mb-0">
          <p>
            GitHub, Mongoose, AJAX, Sequelize, npm, CDN, REST, HTTP, API, momentJS, localStorage, Agile
            Development, Request-response pattern, Promises, CLI, Postman, MVC, NoSQL, SQL,
            Single Page Application, Progressive Web Application, SEO, ORM , ODM, Design Patterns, Scrum , Kanban,
            Inquirer.js, Test Driven Development, Jest, Mongo/Mongoose, MySQL Workbench, Handlebars, Continuous
            Integration, Linter, Context API, VS Code, jQuery
          </p>

        </ul>
      </div>
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
      <h6 class="badge indigo hoverable">&nbsp;&nbsp;&nbsp;&nbsp;.about ian</h6>
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
        For more, please got to <a class="hoverable" id="btnA">about</a> or check out my <a class="hoverable" id="btnP">portfolio</a>. If you'd like to reach out, <a class="hoverable" id="btnC">connect with me</a>..
      </div>
    </div>
  </div>
`
  );
});
