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
                <li><a href="class.php">Class</a></li>
                <li class="is-active"><a aria-current="page">Subclass</a></li>
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
                CHOOSE YOUR SUBCLASS
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

              <div id="character-subclass">
                <div class="columns card-choice-container">
                  <div class="column is-5 card-choice hide" data-subclass="land">
                    <label>
                      <input type="radio" name="subclass" value="circle-of-the-land">
                      <figure class="image is-square">
                        <img src="assets/land.jpg" alt="Circle of the Land">
                        <h1 class="title is-4 has-text-centered">Circle of the Land</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-5 card-choice hide" data-subclass="moon">
                    <label>
                      <input type="radio" name="subclass" value="circle-of-the-moon">
                      <figure class="image is-square">
                        <img src="assets/moon.jpg" alt="Circle of the Moon">
                        <h1 class="title is-4 has-text-centered">Circle of the Moon</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice hide" data-subclass="devotion">
                    <label>
                      <input type="radio" name="subclass" value="oath-of-devotion">
                      <figure class="image is-square">
                        <img src="assets/devotion.jpg" alt="Oath of Devotion">
                        <h1 class="title is-4 has-text-centered">Oath of Devotion</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice hide" data-subclass="ancients">
                    <label>
                      <input type="radio" name="subclass" value="oath-of-the-ancients">
                      <figure class="image is-square">
                        <img src="assets/ancients.jpg" alt="Oath of the Ancients">
                        <h1 class="title is-4 has-text-centered">Oath of the Ancients</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice hide" data-subclass="vengeance">
                    <label>
                      <input type="radio" name="subclass" value="oath-of-vengeance">
                      <figure class="image is-square">
                        <img src="assets/vengeance.jpg" alt="Oath of Vengeance">
                        <h1 class="title is-4 has-text-centered">Oath of Vengeance</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice hide" data-subclass="thief">
                    <label>
                      <input type="radio" name="subclass" value="thief">
                      <figure class="image is-square">
                        <img src="assets/thief.jpg" alt="Thief">
                        <h1 class="title is-4 has-text-centered">Thief</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice hide" data-subclass="assassin">
                    <label>
                      <input type="radio" name="subclass" value="assassin">
                      <figure class="image is-square">
                        <img src="assets/assassin.jpg" alt="Assassin">
                        <h1 class="title is-4 has-text-centered">Assassin</h1>
                      </figure>
                    </label>
                  </div>
                  <div class="column is-4 card-choice hide" data-subclass="arcane-trickster">
                    <label>
                      <input type="radio" name="subclass" value="arcane-trickster">
                      <figure class="image is-square">
                        <img src="assets/arcane-trickster.png" alt="Arcane Trickster">
                        <h1 class="title is-4 has-text-centered">Arcane Trickster</h1>
                      </figure>
                    </label>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select a subclass.
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
