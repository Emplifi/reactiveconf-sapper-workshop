<style>
  .overview-grid {
    padding: 54px 0;
    display: grid;
    row-gap: 32px;
  }

  .block {
    text-align: center;
  }

  .block__ico {
    max-width: 46px;
    margin-bottom: 16px;
  }

  .block__title {
    color: #252525;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.4em;
    font-size: 1.6em;
  }

  .block__perex {
    font-size: 1em;
  }

  section {
    background-color: #f4f4f4;
  }

  @media (min-width: 768px) {
    .block {
      text-align: left;
      display: flex;
    }

    .block__ico {
      margin-right: 25px;
      max-width: 75px;
    }
  }

  @media (min-width: 992px) {
    .overview-grid {
      row-gap: 0;
      column-gap: 30px;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .block {
      align-items: flex-start;
    }

    .block__title {
      font-size: 20px;
    }

    .block__perex {
      font-size: 14px;
    }
  }
</style>

<section>
  <div class="container">
    <div class="overview-grid">
      <div class="block">
        <img src="img/ico-1.png" alt="" class="block__ico" />
        <div>
          <h2 class="block__title">Fresh Food</h2>
          <p class="block__perex">
            Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.
          </p>
        </div>
      </div>
      <div class="block">
        <img src="img/ico-2.png" alt="" class="block__ico" />
        <div>
          <h2 class="block__title">Chef's Specials</h2>
          <p class="block__perex">
            Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.
          </p>
        </div>
      </div>
      <div class="block">
        <img src="img/ico-3.png" alt="" class="block__ico" />
        <div>
          <h2 class="block__title">Good Wine</h2>
          <p class="block__perex">
            Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
