<?php include 'header.php';?>

<?php include 'nav.php';?>

<section class="hero is-medium is-dark is-bold">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
          <div class="content">
            <h1 class="title has-text-centered">Title</h1>
            <p class="has-text-justified">
              Some text.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hero is-medium is-light is-bold">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
          <div class="content has-text-centered">
            <h1 class="title">Header</h1>
            <h3 class="title">Sub-header</h3>
            <a class="email button is-primary is-medium" href="#">
              <span class="icon is-small">
                <i class="fas fa-envelope"></i>
              </span>
              <span>Some button</span>
            </a>
            <?php include 'social.php';?>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'footer.php';?>
