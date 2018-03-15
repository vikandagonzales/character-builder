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
                <li class="is-active"><a aria-current="page">Tool Proficiencies</a></li>
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
                CHOOSE YOUR TOOL PROFICIENCIES
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

              <div id="character-tool">
                <article id="instructions" class="message is-primary hide">
                  <div class="message-body">
                    <span id="skill-addition" class="hide">Your character choices have also granted you the following <span id="skill-given"></span> tool proficiencies.</span>
                    <span id="skill-extras" class="hide">In addition, please select <span id="skill-artisan" class="hide"><span id="skill-artisan-number"></span> artisan's tool<span class="plural hide">s</span></span><span class="comma hide">, </span><span class="and hide"> and </span><span id="skill-gaming" class="hide"><span id="skill-gaming-number"></span> gaming set<span class="plural hide">s</span></span><span class="comma hide">, </span><span class="and hide"> and </span><span id="skill-music" class="hide"><span id="skill-music-number"></span> musical instrument<span class="plural hide">s</span></span>.</span>
                  </div>
                </article>
                <div class="columns">
                  <div class="column is-4 hide" data-tool="disguise-kit">
                    <div class="field">
                      <input class="is-checkradio" id="disguise-kit" type="checkbox" name="tool">
                      <label for="disguise-kit">Disguise Kit</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-tool="forgery-kit">
                    <div class="field">
                      <input class="is-checkradio" id="forgery-kit" type="checkbox" name="tool">
                      <label for="forgery-kit">Forgery Kit</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-tool="herbalism-kit">
                    <div class="field">
                      <input class="is-checkradio" id="herbalism-kit" type="checkbox" name="tool">
                      <label for="herbalism-kit">Herbalism Kit</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-tool="navigators-tools">
                    <div class="field">
                      <input class="is-checkradio" id="navigators-tools" type="checkbox" name="tool">
                      <label for="navigators-tools">Navigator's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-tool="poisoners-kit">
                    <div class="field">
                      <input class="is-checkradio" id="poisoners-kit" type="checkbox" name="tool">
                      <label for="poisoners-kit">Poisoner's Kit</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-tool="thieves-tools">
                    <div class="field">
                      <input class="is-checkradio" id="thieves-tools" type="checkbox" name="tool">
                      <label for="thieves-tools">Thieves' Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-tool="land-vehicles">
                    <div class="field">
                      <input class="is-checkradio" id="land-vehicles" type="checkbox" name="tool">
                      <label for="land-vehicles">Land Vehicles</label>
                    </div>
                  </div>
                  <div class="column is-4 hide" data-tool="water-vehicles">
                    <div class="field">
                      <input class="is-checkradio" id="water-vehicles" type="checkbox" name="tool">
                      <label for="water-vehicles">Water Vehicles</label>
                    </div>
                  </div>
                </div>
                <h1 id="header-artisan" class="title is-4 hide"><span class="icon lnr-pickaxe"></span>Artisan's Tools</h1>
                <div class="columns">
                  <div class="column is-4 is-small hide" data-tool="alchemists-supplies">
                    <div class="field">
                      <input class="is-checkradio is-small" id="alchemists-supplies" type="checkbox" name="artisan">
                      <label for="alchemists-supplies">Alchemist's Supplies</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="brewers-supplies">
                    <div class="field">
                      <input class="is-checkradio is-small" id="brewers-supplies" type="checkbox" name="artisan">
                      <label for="brewers-supplies">Brewer's Supplies</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="calligraphers-supplies">
                    <div class="field">
                      <input class="is-checkradio is-small" id="calligraphers-supplies" type="checkbox" name="artisan">
                      <label for="calligraphers-supplies">Calligrapher's Supplies</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="carpenters-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="carpenters-tools" type="checkbox" name="artisan">
                      <label for="carpenters-tools">Carpenter's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="cobblers-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="cobblers-tools" type="checkbox" name="artisan">
                      <label for="cobblers-tools">Cobbler's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="cooks-utensils">
                    <div class="field">
                      <input class="is-checkradio is-small" id="cooks-utensils" type="checkbox" name="artisan">
                      <label for="cooks-utensils">Cook's Utensils</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="glassblowers-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="glassblowers-tools" type="checkbox" name="artisan">
                      <label for="glassblowers-tools">Glassblower's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="jewelers-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="jewelers-tools" type="checkbox" name="artisan">
                      <label for="jewelers-tools">Jeweler's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="leatherworkers-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="leatherworkers-tools" type="checkbox" name="artisan">
                      <label for="leatherworkers-tools">Leatherworker's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="masons-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="masons-tools" type="checkbox" name="artisan">
                      <label for="masons-tools">Mason's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="painters-supplies">
                    <div class="field">
                      <input class="is-checkradio is-small" id="painters-supplies" type="checkbox" name="artisan">
                      <label for="painters-supplies">Painter's Supplies</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="potters-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="potters-tools" type="checkbox" name="artisan">
                      <label for="potters-tools">Potter's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="smiths-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="smiths-tools" type="checkbox" name="artisan">
                      <label for="smiths-tools">Smith's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="tinkers-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="tinkers-tools" type="checkbox" name="artisan">
                      <label for="tinkers-tools">Tinker's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="weavers-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="weavers-tools" type="checkbox" name="artisan">
                      <label for="weavers-tools">Weaver's Tools</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="woodcarvers-tools">
                    <div class="field">
                      <input class="is-checkradio is-small" id="woodcarvers-tools" type="checkbox" name="artisan">
                      <label for="woodcarvers-tools">Woodcarver's Tools</label>
                    </div>
                  </div>
                </div>
                <h1 id="header-gaming" class="title is-4 hide"><span class="icon lnr-dice"></span>Gaming Set</h1>
                <div class="columns">
                  <div class="column is-4 is-small hide" data-tool="dice-set">
                    <div class="field">
                      <input class="is-checkradio is-small" id="dice-set" type="checkbox" name="gaming">
                      <label for="dice-set">Dice Set</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="dragonchess-set">
                    <div class="field">
                      <input class="is-checkradio is-small" id="dragonchess-set" type="checkbox" name="gaming">
                      <label for="dragonchess-set">Dragonchess Set</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="playing-card-set">
                    <div class="field">
                      <input class="is-checkradio is-small" id="playing-card-set" type="checkbox" name="gaming">
                      <label for="playing-card-set">Playing Card Set</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="three-dragon-ante-set">
                    <div class="field">
                      <input class="is-checkradio is-small" id="three-dragon-ante-set" type="checkbox" name="gaming">
                      <label for="three-dragon-ante-set">Three-Dragon Ante Set</label>
                    </div>
                  </div>
                </div>
                <h1 id="header-music" class="title is-4 hide"><span class="icon lnr-music-note3"></span>Musical Instrument</h1>
                <div class="columns">
                  <div class="column is-4 is-small hide" data-tool="bagpipes">
                    <div class="field">
                      <input class="is-checkradio is-small" id="bagpipes" type="checkbox" name="music">
                      <label for="bagpipes">Bagpipes</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="drum">
                    <div class="field">
                      <input class="is-checkradio is-small" id="drum" type="checkbox" name="music">
                      <label for="drum">Drum</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="dulcimer">
                    <div class="field">
                      <input class="is-checkradio is-small" id="dulcimer" type="checkbox" name="music">
                      <label for="dulcimer">Dulcimer</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="flute">
                    <div class="field">
                      <input class="is-checkradio is-small" id="flute" type="checkbox" name="music">
                      <label for="flute">Flute</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="lute">
                    <div class="field">
                      <input class="is-checkradio is-small" id="lute" type="checkbox" name="music">
                      <label for="lute">Lute</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="lyre">
                    <div class="field">
                      <input class="is-checkradio is-small" id="lyre" type="checkbox" name="music">
                      <label for="lyre">Lyre</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="horn">
                    <div class="field">
                      <input class="is-checkradio is-small" id="horn" type="checkbox" name="music">
                      <label for="horn">Horn</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="pan-flute">
                    <div class="field">
                      <input class="is-checkradio is-small" id="pan-flute" type="checkbox" name="music">
                      <label for="pan-flute">Pan Flute</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="shawm">
                    <div class="field">
                      <input class="is-checkradio is-small" id="shawm" type="checkbox" name="music">
                      <label for="shawm">Shawm</label>
                    </div>
                  </div>
                  <div class="column is-4 is-small hide" data-tool="viol">
                    <div class="field">
                      <input class="is-checkradio is-small" id="viol" type="checkbox" name="music">
                      <label for="viol">Viol</label>
                    </div>
                  </div>
                </div>
                <article id="error" class="message is-danger hide">
                  <div class="message-body">
                    Please select the allotted number of tool proficiencies.
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
