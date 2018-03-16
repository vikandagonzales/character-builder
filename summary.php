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
                <li class="is-active"><a aria-current="page">Summary</a></li>
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
                NAME
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

              <div id="character-summary">
                <div class="columns">
                  <div class="column is-2 abilities">
                    <div class="card">
                      <div class="card-content has-text-centered">
                        <p class="subtitle">
                          Strength
                        </p>
                        <p class="title" id="str-mod">
                          0
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="str">
                            10
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card">
                      <div class="card-content has-text-centered">
                        <p class="subtitle">
                          Dexterity
                        </p>
                        <p class="title" id="dex-mod">
                          0
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="dex">
                            10
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card">
                      <div class="card-content has-text-centered">
                        <p class="subtitle">
                          Constitution
                        </p>
                        <p class="title" id="con-mod">
                          0
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="con">
                            10
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card">
                      <div class="card-content has-text-centered">
                        <p class="subtitle">
                          Intelligence
                        </p>
                        <p class="title" id="int-mod">
                          0
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="int">
                            10
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card">
                      <div class="card-content has-text-centered">
                        <p class="subtitle">
                          Wisdom
                        </p>
                        <p class="title" id="wis-mod">
                          0
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="wis">
                            10
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card">
                      <div class="card-content has-text-centered">
                        <p class="subtitle">
                          Charisma
                        </p>
                        <p class="title" id="cha-mod">
                          0
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="cha">
                            10
                          </span>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="card horizontal">
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="prof-bonus">
                            0
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span>
                            Proficiency Bonus
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card skills">
                      <p class="subtitle">
                        Saving Throws
                      </p>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="saving-str" type="checkbox" name="saving">
                        <label for="saving-str"><span class="blank">0</span>Strength</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="saving-dex" type="checkbox" name="saving">
                        <label for="saving-dex"><span class="blank">0</span>Dexterity</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="saving-con" type="checkbox" name="saving">
                        <label for="saving-con"><span class="blank">0</span>Constitution</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="saving-int" type="checkbox" name="saving">
                        <label for="saving-int"><span class="blank">0</span>Intelligence</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="saving-wis" type="checkbox" name="saving">
                        <label for="saving-wis"><span class="blank">0</span>Wisdom</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="saving-cha" type="checkbox" name="saving">
                        <label for="saving-cha"><span class="blank">0</span>Charisma</label>
                      </div>
                    </div>
                    <div class="card skills">
                      <p class="subtitle">
                        Skills
                      </p>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="acrobatics" type="checkbox" name="skill">
                        <label for="acrobatics"><span class="blank">0</span>Acrobatics</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="animal-handling" type="checkbox" name="skill">
                        <label for="animal-handling"><span class="blank">0</span>Animal Handling</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="arcana" type="checkbox" name="skill">
                        <label for="arcana"><span class="blank">0</span>Arcana</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="athletics" type="checkbox" name="skill">
                        <label for="athletics"><span class="blank">0</span>Athletics</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="deception" type="checkbox" name="skill">
                        <label for="deception"><span class="blank">0</span>Deception</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="history" type="checkbox" name="skill">
                        <label for="history"><span class="blank">0</span>History</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="insight" type="checkbox" name="skill">
                        <label for="insight"><span class="blank">0</span>Insight</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="intimidation" type="checkbox" name="skill">
                        <label for="intimidation"><span class="blank">0</span>Intimidation</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="investigation" type="checkbox" name="skill">
                        <label for="investigation"><span class="blank">0</span>Investigation</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="medicine" type="checkbox" name="skill">
                        <label for="medicine"><span class="blank">0</span>Medicine</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="nature" type="checkbox" name="skill">
                        <label for="nature"><span class="blank">0</span>Nature</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="perception" type="checkbox" name="skill">
                        <label for="perception"><span class="blank">0</span>Perception</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="performance" type="checkbox" name="skill">
                        <label for="performance"><span class="blank">0</span>Performance</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="persuasion" type="checkbox" name="skill">
                        <label for="persuasion"><span class="blank">0</span>Persuasion</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="religion" type="checkbox" name="skill">
                        <label for="religion"><span class="blank">0</span>Religion</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="sleight-of-hand" type="checkbox" name="skill">
                        <label for="sleight-of-hand"><span class="blank">0</span>Sleight of Hand</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="stealth" type="checkbox" name="skill">
                        <label for="stealth"><span class="blank">0</span>Stealth</label>
                      </div>
                      <div class="field">
                        <input class="is-checkradio is-small is-circle" id="survival" type="checkbox" name="skill">
                        <label for="survival"><span class="blank">0</span>Survival</label>
                      </div>
                    </div>
                    <div class="card horizontal">
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="passive-wisdom">
                            0
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span>
                            Passive Wisdom
                          </span>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="card main">
                      <header class="card-header">
                        <p class="card-header-title">
                          <span id="race" class="capitalize">
                            Race
                          </span>
                        </p>
                        <p class="card-header-title">
                          <span id="level" class="capitalize">
                            Level
                          </span>
                        </p>
                      </header>
                      <div class="card-content has-text-centered">
                        <p id="class" class="title capitalize">
                          Class
                        </p>
                        <p id="subclass" class="subtitle capitalize">
                          Subclass
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="background" class="capitalize">
                            Background
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span id="alignment" class="capitalize">
                            Alignment
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card stacked has-text-centered">
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="ac" class="title">
                            0
                          </span>
                          <span class="subtitle">
                            Armor Class
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span id="initiative" class="title">
                            0
                          </span>
                          <span class="subtitle">
                            Initiative
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span id="speed" class="title">
                            0
                          </span>
                          <span class="subtitle">
                            Speed
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="card stacked has-text-centered">
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span id="hp" class="title">
                            0
                          </span>
                          <span class="subtitle">
                            Hit Points
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span id="hd" class="title">
                            0
                          </span>
                          <span class="subtitle">
                            Hit Die
                          </span>
                        </p>
                      </footer>
                    </div>
                    <div class="columns">
                      <div class="column is-6">
                        <div class="card skills">
                          <p class="subtitle">
                            Tools
                            <ul id="tool">
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div class="column is-6">
                        <div class="card skills">
                          <p class="subtitle">
                            Languages
                            <ul id="language">
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <?php include 'sidenav.php';?>

          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<?php include 'footer.php';?>
