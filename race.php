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
                <li><a href="#">Character Builder</a></li>
                <li class="is-active"><a href="#" aria-current="page">Race</a></li>
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
              <a class="button is-large">
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
              <div class="columns card-choice-container">
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="dwarf">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Dwarf</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="elf">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Elf</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="halfling">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Halfling</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="human">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Human</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="dragonborn">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Dragonborn</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="gnome">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Gnome</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="half-elf">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Half-Elf</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="half-orc">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Half-Orc</h1>
                    </figure>
                  </label>
                </div>
                <div class="column is-4 card-choice">
                  <label>
                    <input type="radio" name="race" value="tiefling">
                    <figure class="image is-square">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      <h1 class="title is-4 has-text-centered">Tiefling</h1>
                    </figure>
                  </label>
                </div>
              </div>
              <div id="next" class="columns">
                <div class="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
                  <div class="button-set has-text-centered">
                    <a class="button is-light is-medium" href="#">
                      <span class="icon is-small">
                        <i class="fas fa-angle-left"></i>
                      </span>
                      <span class="is-hidden-mobile">Back</span>
                    </a>
                    <a class="button is-light is-medium" href="subrace.php">
                      <span class="is-hidden-mobile">Next</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-3 content-links">
              <aside class="menu">
                <ul class="menu-list">
                  <li class="is-active">
                    <a>
                      <span class="icon lnr-dna"></span>
                      <span>Race</span>
                      <span class="lock">
                        <i class="fas fa-check"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-dagger"></span>
                      <span>Class</span>
                      <span class="lock">
                        <i class="fas fa-check"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-briefcase"></span>
                      <span>Background</span>
                      <span class="lock">
                        <i class="fas fa-check"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-hammer-wrench"></span>
                      <span>Skills</span>
                      <span class="lock">
                        <i class="fas fa-lock"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-chart-bars"></span>
                      <span>Attributes</span>
                      <span class="lock">
                        <i class="fas fa-lock"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-heart-pulse"></span>
                      <span>Health</span>
                      <span class="lock">
                        <i class="fas fa-lock"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-magic-wand"></span>
                      <span>Spells</span>
                      <span class="lock">
                        <i class="fas fa-lock"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-portrait"></span>
                      <span>Name</span>
                      <span class="lock">
                        <i class="fas fa-lock"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon lnr-document"></span>
                      <span>Summary</span>
                      <span class="lock">
                        <i class="fas fa-lock"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<?php include 'footer.php';?>
