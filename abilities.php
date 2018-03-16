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
                <li class="is-active"><a aria-current="page">Abilities</a></li>
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
                ENTER YOUR ABILITY SCORES
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

              <div id="character-abilities">
                <div class="columns" id="legend">
                  <div class="column is-2">
                    Ability
                  </div>
                  <div class="column is-2">
                    Score
                  </div>
                  <div class="column is-2">
                    Bonus
                  </div>
                  <div class="column is-2">
                    Total
                  </div>
                  <div class="column is-2">
                    Modifier
                  </div>
                  <div class="column is-2">
                    Cost
                  </div>
                </div>
                <div class="columns" id="strength">
                  <div class="column is-2">
                    <h1 class="title is-4">STR</h1>
                  </div>
                  <div class="column is-2">
                    <div class="field">
                      <div class="control">
                        <input class="input" name="str" type="number" min="8" max="15" value="8">
                      </div>
                    </div>
                  </div>
                  <div class="column is-2">
                    <span data-ability="bonus">0</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="score">8</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="mod">-1</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="cost">1</span>
                  </div>
                </div>
                <div class="columns" id="dexterity">
                  <div class="column is-2">
                    <h1 class="title is-4">DEX</h1>
                  </div>
                  <div class="column is-2">
                    <div class="field">
                      <div class="control">
                        <input class="input" name="dex" type="number" min="8" max="15" value="8">
                      </div>
                    </div>
                  </div>
                  <div class="column is-2">
                    <span data-ability="bonus">0</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="score">8</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="mod">-1</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="cost">1</span>
                  </div>
                </div>
                <div class="columns" id="constitution">
                  <div class="column is-2">
                    <h1 class="title is-4">CON</h1>
                  </div>
                  <div class="column is-2">
                    <div class="field">
                      <div class="control">
                        <input class="input" name="con" type="number" min="8" max="15" value="8">
                      </div>
                    </div>
                  </div>
                  <div class="column is-2">
                    <span data-ability="bonus">0</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="score">8</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="mod">-1</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="cost">1</span>
                  </div>
                </div>
                <div class="columns" id="intelligence">
                  <div class="column is-2">
                    <h1 class="title is-4">INT</h1>
                  </div>
                  <div class="column is-2">
                    <div class="field">
                      <div class="control">
                        <input class="input" name="int" type="number" min="8" max="15" value="8">
                      </div>
                    </div>
                  </div>
                  <div class="column is-2">
                    <span data-ability="bonus">0</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="score">8</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="mod">-1</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="cost">1</span>
                  </div>
                </div>
                <div class="columns" id="wisdom">
                  <div class="column is-2">
                    <h1 class="title is-4">WIS</h1>
                  </div>
                  <div class="column is-2">
                    <div class="field">
                      <div class="control">
                        <input class="input" name="wis" type="number" min="8" max="15" value="8">
                      </div>
                    </div>
                  </div>
                  <div class="column is-2">
                    <span data-ability="bonus">0</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="score">8</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="mod">-1</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="cost">1</span>
                  </div>
                </div>
                <div class="columns" id="charisma">
                  <div class="column is-2">
                    <h1 class="title is-4">CHA</h1>
                  </div>
                  <div class="column is-2">
                    <div class="field">
                      <div class="control">
                        <input class="input" name="cha" type="number" min="8" max="15" value="8">
                      </div>
                    </div>
                  </div>
                  <div class="column is-2">
                    <span data-ability="bonus">0</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="score">8</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="mod">-1</span>
                  </div>
                  <div class="column is-2">
                    <span data-ability="cost">1</span>
                  </div>
                </div>
                <div class="columns" id="cost">
                  <div class="column is-2">
                    Points remaining
                  </div>
                  <div class="column is-2">
                    <span id="points"></span>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please distribute all 27 points.
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
