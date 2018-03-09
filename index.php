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
            <a class="button is-primary is-medium" href="#">
              <span class="icon">
                <i class="fas fa-save"></i>
              </span>
              <span class="is-hidden-mobile">Save File</span>
            </a>
            <a class="button is-danger is-medium" href="#">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span class="is-hidden-mobile">Export PDF</span>
            </a>
            <a class="button is-light is-medium" href="#">
              <span class="icon">
                <i class="fas fa-file"></i>
              </span>
              <span class="is-hidden-mobile">Start Over</span>
            </a>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-4">
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
                    0 / 2
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-4">
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
                  0 / 2
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-clearfix">
                <p class="is-pulled-left">
                  <span class="lnr-landscape"></span>
                  Background
                </p>
                <p class="is-pulled-right">
                  0 / 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<?php include 'footer.php';?>
