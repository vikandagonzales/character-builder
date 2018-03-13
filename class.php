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
                <li class="is-active"><a aria-current="page">Class</a></li>
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
                CHOOSE YOUR CLASS
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

              <div id="character-class">
                <div class="columns card-choice-container">
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="class" value="druid">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Druid</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="class" value="paladin">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Paladin</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="class" value="rogue">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Rogue</h1>
                      </figure>
                    </label>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select a class.
                  </div>
                </article>
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
