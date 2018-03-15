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
                <li class="is-active"><a aria-current="page">Expertise</a></li>
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
                CHOOSE YOUR EXPERTISE
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

              <div id="character-expertise">
                <article id="instructions" class="message is-primary hide">
                  <div class="message-body">
                    Your class grants you expertise in <span id="expertise-number"></span> skills or tools you are already proficient in. Please select them.
                  </div>
                </article>
                <div class="columns">
                  <div class="column is-4 hide" data-expertise="acrobatics">
                    <div class="field">
                      <input class="is-checkradio" id="acrobatics" type="checkbox" name="expertise">
                      <label for="acrobatics">Acrobatics</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="animal-handling">
                    <div class="field">
                      <input class="is-checkradio" id="animal-handling" type="checkbox" name="expertise">
                      <label for="animal-handling">Animal Handling</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="arcana">
                    <div class="field">
                      <input class="is-checkradio" id="arcana" type="checkbox" name="expertise">
                      <label for="arcana">Arcana</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="athletics">
                    <div class="field">
                      <input class="is-checkradio" id="athletics" type="checkbox" name="expertise">
                      <label for="athletics">Athletics</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="deception">
                    <div class="field">
                      <input class="is-checkradio" id="deception" type="checkbox" name="expertise">
                      <label for="deception">Deception</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="history">
                    <div class="field">
                      <input class="is-checkradio" id="history" type="checkbox" name="expertise">
                      <label for="history">History</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="insight">
                    <div class="field">
                      <input class="is-checkradio" id="insight" type="checkbox" name="expertise">
                      <label for="insight">Insight</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="intimidation">
                    <div class="field">
                      <input class="is-checkradio" id="intimidation" type="checkbox" name="expertise">
                      <label for="intimidation">Intimidation</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="investigation">
                    <div class="field">
                      <input class="is-checkradio" id="investigation" type="checkbox" name="expertise">
                      <label for="investigation">Investigation</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="medicine">
                    <div class="field">
                      <input class="is-checkradio" id="medicine" type="checkbox" name="expertise">
                      <label for="medicine">Medicine</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="nature">
                    <div class="field">
                      <input class="is-checkradio" id="nature" type="checkbox" name="expertise">
                      <label for="nature">Nature</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="perception">
                    <div class="field">
                      <input class="is-checkradio" id="perception" type="checkbox" name="expertise">
                      <label for="perception">Perception</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="performance">
                    <div class="field">
                      <input class="is-checkradio" id="performance" type="checkbox" name="expertise">
                      <label for="performance">Performance</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="persuasion">
                    <div class="field">
                      <input class="is-checkradio" id="persuasion" type="checkbox" name="expertise">
                      <label for="persuasion">Persuasion</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="religion">
                    <div class="field">
                      <input class="is-checkradio" id="religion" type="checkbox" name="expertise">
                      <label for="religion">Religion</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="sleight-of-hand">
                    <div class="field">
                      <input class="is-checkradio" id="sleight-of-hand" type="checkbox" name="expertise">
                      <label for="sleight-of-hand">Sleight of Hand</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="stealth">
                    <div class="field">
                      <input class="is-checkradio" id="stealth" type="checkbox" name="expertise">
                      <label for="stealth">Stealth</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="survival">
                    <div class="field">
                      <input class="is-checkradio" id="survival" type="checkbox" name="expertise">
                      <label for="survival">Survival</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-expertise="thieves-tools">
                    <div class="field">
                      <input class="is-checkradio" id="thieves-tools" type="checkbox" name="expertise">
                      <label for="thieves-tools">Thieves' Tools</label>
                    </div>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select the allotted number of skills or tools to have expertise in.
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
