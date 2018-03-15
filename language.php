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
                <li class="is-active"><a aria-current="page">Languages</a></li>
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
                CHOOSE YOUR LANGUAGES
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

              <div id="character-language">
                <article id="instructions" class="message is-primary hide">
                  <div class="message-body">
                    Your character choices grant you knowledge of the following <span id="language-given"></span> languages. <span id="language-additional" class="hide">Please select <span id="language-number"></span> more.</span>
                  </div>
                </article>
                <div class="columns">
                  <div class="column is-4 hide" data-language="common">
                    <div class="field">
                      <input class="is-checkradio" id="common" type="checkbox" name="language">
                      <label for="common">Common</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="dwarvish">
                    <div class="field">
                      <input class="is-checkradio" id="dwarvish" type="checkbox" name="language">
                      <label for="dwarvish">Dwarvish</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="elvish">
                    <div class="field">
                      <input class="is-checkradio" id="elvish" type="checkbox" name="language">
                      <label for="elvish">Elvish</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="giant">
                    <div class="field">
                      <input class="is-checkradio" id="giant" type="checkbox" name="language">
                      <label for="giant">Giant</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="gnomish">
                    <div class="field">
                      <input class="is-checkradio" id="gnomish" type="checkbox" name="language">
                      <label for="gnomish">Gnomish</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="goblin">
                    <div class="field">
                      <input class="is-checkradio" id="goblin" type="checkbox" name="language">
                      <label for="goblin">Goblin</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="halfling">
                    <div class="field">
                      <input class="is-checkradio" id="halfling" type="checkbox" name="language">
                      <label for="halfling">Halfling</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="orc">
                    <div class="field">
                      <input class="is-checkradio" id="orc" type="checkbox" name="language">
                      <label for="orc">Orc</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="abyssal">
                    <div class="field">
                      <input class="is-checkradio" id="abyssal" type="checkbox" name="language">
                      <label for="abyssal">Abyssal*</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="celestial">
                    <div class="field">
                      <input class="is-checkradio" id="celestial" type="checkbox" name="language">
                      <label for="celestial">Celestial*</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="draconic">
                    <div class="field">
                      <input class="is-checkradio" id="draconic" type="checkbox" name="language">
                      <label for="draconic">Draconic*</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="deep-speech">
                    <div class="field">
                      <input class="is-checkradio" id="deep-speech" type="checkbox" name="language">
                      <label for="deep-speech">Deep Speech*</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="infernal">
                    <div class="field">
                      <input class="is-checkradio" id="infernal" type="checkbox" name="language">
                      <label for="infernal">Infernal*</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="primordial">
                    <div class="field">
                      <input class="is-checkradio" id="primordial" type="checkbox" name="language">
                      <label for="primordial">Primordial*</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="sylvan">
                    <div class="field">
                      <input class="is-checkradio" id="sylvan" type="checkbox" name="language">
                      <label for="sylvan">Sylvan*</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-language="undercommon">
                    <div class="field">
                      <input class="is-checkradio" id="undercommon" type="checkbox" name="language">
                      <label for="undercommon">Undercommon*</label>
                    </div>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select the allotted number of languages.
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
