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
                <li><a href="race.php">Race</a></li>
                <li class="is-active"><a aria-current="page">Subrace</a></li>
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
                CHOOSE YOUR SUBRACE
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

              <div id="character-subrace">
                <div class="columns card-choice-container">
                  <div class="column is-5 card-choice hide" data-subrace="hill">
                    <label>
                      <input type="radio" name="subrace" value="hill">
                      <figure class="image is-square">
                        <img src="assets/hill.jpg" alt="Hill Dwarf">
                        <h1 class="title is-4 has-text-centered">Hill</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-5 card-choice hide" data-subrace="mountain">
                    <label>
                      <input type="radio" name="subrace" value="mountain">
                      <figure class="image is-square">
                        <img src="assets/mountain.jpg" alt="Mountain Dwarf">
                        <h1 class="title is-4 has-text-centered">Mountain</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-5 card-choice hide" data-subrace="high">
                    <label>
                      <input type="radio" name="subrace" value="high">
                      <figure class="image is-square">
                        <img src="assets/high.jpg" alt="High Elf">
                        <h1 class="title is-4 has-text-centered">High</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-5 card-choice hide" data-subrace="wood">
                    <label>
                      <input type="radio" name="subrace" value="wood">
                      <figure class="image is-square">
                        <img src="assets/wood.jpg" alt="Wood Elf">
                        <h1 class="title is-4 has-text-centered">Wood</h1>
                      </figure>
                    </label>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select a subrace.
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
