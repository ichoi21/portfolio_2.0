$(document).on("click", "#btnP", function (e) {
  e.preventDefault();

  $("article").html(
    `
    <div class="container z-depth-3" id="portfolio" style="padding: 25px;">
      <div class="content-section-heading text-center">
        <span class="badge white hoverable" style="font-size: 24px;">&nbsp;&nbsp;&nbsp;&nbsp;.portfolio</span>
        <h5 class="btn-flat">recent projects</h5>
      </div>
      <div class="row">
        <div class="col s12 m4 l4 carousel-item">
          <div class="card small hoverable grey lighten-1">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="./assets/img/shoe_p2.png" />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Shoequelize<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Shoequelize<i class="material-icons right">close</i></span>
              <p>
                Demonstration of sequelize, bcryptjs, passport, and authentication. Also evolved to
                <a class="hoverable black-text" href="https://materializecss.com/" target="blank">MaterializeCSS</a>. Start collecting your shoes now!
              </p>
              <div class="fixed-action-btn">
                <a class="badge blue accent-2 white-text"><i class="material-icons">attach_file</i></a>
                <ul>
                  <li>
                    <a class="grey-text hoverable" href="https://github.com/ichoi21/shoequelize/" target="blank"> GH - Repo </a>
                  </li>
                  <li>
                    <a class="grey-text hoverable" href="https://ic-shoequelize.herokuapp.com/" target="blank"> Website</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <div class="col s12 m4 l4 carousel-item">
            <div class="card small hoverable grey lighten-1">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="./assets/img/css_p1.png" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"
                  >Coffee Shop <b class="badge red white-text">Search!</b
                  ><i class="material-icons right">more_vert</i></span
                >
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"
                  >Coffee Shop <b class="badge red white-text">Search!</b
                  ><i class="material-icons right">close</i></span
                >
                <p>
                  Demonstration of HTML/CSS/early JS. Let us help you find a cup
                  of Joe now!
                </p>
                <div class="fixed-action-btn">
                  <a class="badge blue accent-2 white-text">
                    <i class="material-icons">attach_file</i>
                  </a>
                  <ul>
                    <li>
                      <a
                        class="grey-text hoverable"
                        href="https://github.com/ichoi21/CSSearch/"
                        target="blank"> GH - Repo</a>
                    </li>
                    <li>
                      <a
                        class="grey-text hoverable"
                        href="https://ichoi21.github.io/CSSearch/home.html"
                        target="blank"> Website</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m4 l4 carousel-item">
            <div class="card small hoverable grey lighten-1">
              <div
                class="card-image waves-effect waves-block waves-light grey lighten-1"
              >
                <img class="activator" src="./assets/img/dayplanner_ex.png" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Day Planner<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Day Planner<i class="material-icons right">close</i></span>
                <p>
                  Demonstration of JS using local storage. Start planning your day!
                </p>
                <div class="fixed-action-btn">
                  <a class="badge blue accent-2 white-text"><i class="material-icons">attach_file</i></a>
                  <ul>
                    <li>
                      <a
                        class="grey-text hoverable"
                        href="https://github.com/ichoi21/HWK05/"
                        target="blank"> GH - Repo</a>
                    </li>
                    <li>
                      <a class="grey-text hoverable" href="https://ichoi21.github.io/HWK05/" target="blank"> Website </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l6 carousel-item">
            <div class="card small hoverable grey lighten-1">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="./assets/img/weatapp_ex.png" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"
                  >Weather Dashboard <b class="material-icons"> nights_stay </b
                  ><i class="material-icons right">more_vert</i></span
                >
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Weather Dashboard <b class="material-icons"> nights_stay </b><i class="material-icons right">close</i></span>
                <p>
                  Demonstration of JS incorporate API to grab request between client/servers. Let's find out if its raining if your area!
                </p>
                <div class="fixed-action-btn">
                  <a class="badge blue accent-2 white-text">
                    <i class="material-icons">attach_file</i>
                  </a>
                  <ul>
                    <li>
                      <a class="grey-text hoverable" href="https://github.com/ichoi21/HWK06/" target="blank"> GH - Repo </a>
                    </li>
                    <li>
                      <a class="grey-text hoverable" href="https://ichoi21.github.io/HWK06/" target="blank"> Website </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l6 carousel-item">
            <div class="card small hoverable grey lighten-1">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="./assets/img/illiest.png" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">illiest<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">illiest<i class="material-icons right">close</i></span>
                <p>
                  Demonstration of previous WIX site on side gig. - will be updated with own creation soon!
                </p>
                <div class="fixed-action-btn">
                  <a class="badge blue accent-2 white-text"><i class="material-icons">attach_file</i></a>
                  <ul>
                    <li>
                      <a class="grey-text hoverable" href="https://www.illiest.com/" target="blank"> Website</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
`
  );
});
