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
                <li class="is-active"><a aria-current="page">Skill Proficiencies</a></li>
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
                ENTER YOUR SKILL PROFICIENCIES
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

              <div id="character-skill">
                <article id="instructions" class="message is-primary hide">
                  <div class="message-body">
                    <span id="skill-addition" class="hide">Your character choices thus far have granted you the following <span id="skill-given"></span> skill proficiencies</span>. Please select <span id="skill-number"></span> more.
                  </div>
                </article>
                <div class="columns">
                  <div class="column is-4 hide" data-skill="acrobatics">
                    <div class="field">
                      <input class="is-checkradio" id="acrobatics" type="checkbox" name="skill">
                      <label for="acrobatics">Acrobatics</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="animal-handling">
                    <div class="field">
                      <input class="is-checkradio" id="animal-handling" type="checkbox" name="skill">
                      <label for="animal-handling">Animal Handling</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="arcana">
                    <div class="field">
                      <input class="is-checkradio" id="arcana" type="checkbox" name="skill">
                      <label for="arcana">Arcana</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="athletics">
                    <div class="field">
                      <input class="is-checkradio" id="athletics" type="checkbox" name="skill">
                      <label for="athletics">Athletics</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="deception">
                    <div class="field">
                      <input class="is-checkradio" id="deception" type="checkbox" name="skill">
                      <label for="deception">Deception</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="history">
                    <div class="field">
                      <input class="is-checkradio" id="history" type="checkbox" name="skill">
                      <label for="history">History</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="insight">
                    <div class="field">
                      <input class="is-checkradio" id="insight" type="checkbox" name="skill">
                      <label for="insight">Insight</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="intimidation">
                    <div class="field">
                      <input class="is-checkradio" id="intimidation" type="checkbox" name="skill">
                      <label for="intimidation">Intimidation</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="investigation">
                    <div class="field">
                      <input class="is-checkradio" id="investigation" type="checkbox" name="skill">
                      <label for="investigation">Investigation</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="medicine">
                    <div class="field">
                      <input class="is-checkradio" id="medicine" type="checkbox" name="skill">
                      <label for="medicine">Medicine</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="nature">
                    <div class="field">
                      <input class="is-checkradio" id="nature" type="checkbox" name="skill">
                      <label for="nature">Nature</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="perception">
                    <div class="field">
                      <input class="is-checkradio" id="perception" type="checkbox" name="skill">
                      <label for="perception">Perception</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="performance">
                    <div class="field">
                      <input class="is-checkradio" id="performance" type="checkbox" name="skill">
                      <label for="performance">Performance</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="persuasion">
                    <div class="field">
                      <input class="is-checkradio" id="persuasion" type="checkbox" name="skill">
                      <label for="persuasion">Persuasion</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="religion">
                    <div class="field">
                      <input class="is-checkradio" id="religion" type="checkbox" name="skill">
                      <label for="religion">Religion</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="sleight-of-hand">
                    <div class="field">
                      <input class="is-checkradio" id="sleight-of-hand" type="checkbox" name="skill">
                      <label for="sleight-of-hand">Sleight of Hand</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="stealth">
                    <div class="field">
                      <input class="is-checkradio" id="stealth" type="checkbox" name="skill">
                      <label for="stealth">Stealth</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-skill="survival">
                    <div class="field">
                      <input class="is-checkradio" id="survival" type="checkbox" name="skill">
                      <label for="survival">Survival</label>
                    </div>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select the allotted number of skill proficiencies.
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
