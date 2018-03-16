<?php include 'header.php';?>

<?php include 'nav.php';?>

<section id="character-cards" class="hero is-medium is-dark is-bold">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
          <h1 class="title has-text-centered">
            Greetings, adventurer.
          </h1>
          <h1 class="subtitle has-text-centered">
            Click on the cards below to start creating your character.
          </h1>
          <progress class="progress is-primary" value="30" max="100">30%</progress>
          <div class="button-set has-text-centered">
            <a class="button is-medium is-static">
              <span class="icon">
                <i class="fas fa-save"></i>
              </span>
              <span class="is-hidden-mobile">Save File</span>
            </a>
            <a class="button is-medium is-static">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span class="is-hidden-mobile">Export PDF</span>
            </a>
            <a class="button is-medium is-primary" href="#">
              <span class="icon">
                <i class="fas fa-file"></i>
              </span>
              <span class="is-hidden-mobile">Start Over</span>
            </a>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-4" id="nav-race">
          <a href="race.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-dna"></span>
                    Race
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-level">
          <a href="level.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-star"></span>
                    Level
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-class">
          <a href="class.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-dagger"></span>
                    Class
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                    <span class="lock" data-id="lock">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-alignment">
          <a href="alignment.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-theater"></span>
                    Alignment
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-background">
          <a href="background.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-file-search"></span>
                    Background
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-proficiencies">
          <a href="profiencies.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-hammer-wrench"></span>
                    Proficiencies
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                    <span class="lock" data-id="lock">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-abilities">
          <a href="abilities.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-chart-bars"></span>
                    Abilities
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                    <span class="lock" data-id="lock">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-name">
          <a href="name.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-portrait"></span>
                    Name
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4" id="nav-summary">
          <a href="summary.php">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content is-clearfix">
                  <p class="is-pulled-left">
                    <span class="lnr-document"></span>
                    Summary
                  </p>
                  <p class="is-pulled-right">
                    <span class="lock" data-id="times">
                      <i class="fas fa-times"></i>
                    </span>
                    <span class="lock" data-id="check">
                      <i class="fas fa-check"></i>
                    </span>
                    <span class="lock" data-id="lock">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>

<?php include 'footer.php';?>
