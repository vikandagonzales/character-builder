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
                <li class="is-active"><a aria-current="page">Alignment</a></li>
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
                CHOOSE YOUR ALIGNMENT
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

              <div id="character-alignment">
                <div class="columns card-choice-container">
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="lawful-good">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Lawful Good</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="neutral-good">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Neutral Good</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="chaotic-good">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Chaotic Good</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="lawful-neutral">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Lawful Neutral</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="neutral">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Neutral</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="chaotic-neutral">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Chaotic Neutral</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="lawful-evil">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Lawful Evil</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="neutral-evil">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Neutral Evil</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice">
                    <label>
                      <input type="radio" name="alignment" value="chaotic-evil">
                      <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        <h1 class="title is-4 has-text-centered">Chaotic Evil</h1>
                      </figure>
                    </label>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select a race.
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
