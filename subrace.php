<?php include 'header.php';?>

<?php include 'nav.php';?>

<section id="character-options">
  <div id="character-breadcrumbs" class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-10-desktop is-offset-1-desktop">
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li><a>Home</a></li>
                <li><a href="index.php">Character Builder</a></li>
                <li class="is-active"><a aria-current="page">Race</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="character-title" class="hero is-light">
    <div class="container">
      <div class="columns">
        <div class="column is-10-desktop is-offset-1-desktop">
          <div class="columns">
            <div class="column is-9 content-box">
              <h1 class="title has-text-centered">
                CHOOSE YOUR RACE
              </h1>
            </div>
            <div class="column is-3 content-home">
              <a href="index.php" class="button is-large">
                <span>GO BACK</span>
                <span class="icon">
                  <i class="fas fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="character-content" class="hero is-primary is-bold">
    <div class="container">
      <div class="columns">
        <div class="column is-10-desktop is-offset-1-desktop">
          <div class="columns">
            <div class="column is-9 content-box">

              <div id="character-subrace" class="hide">
                <div class="columns card-choice-container">
                  <div class="column is-5 card-choice">
                    <label>
                      <input type="radio" name="subrace" value="hill">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Hill</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-5 card-choice">
                    <label>
                      <input type="radio" name="subrace" value="mountain">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Mountain</h1>
                      </figure>
                    </label>
                  </div>
                </div>
              </div>

              <?php include 'arrows.php';?>

            </div>

            <?php include 'sidenav.php';?>

          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<?php include 'footer.php';?>
