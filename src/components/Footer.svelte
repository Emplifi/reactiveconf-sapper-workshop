<script>
  import SocialMedia from '../components/SocialMedia.svelte';
</script>

<style>
  footer {
    background-color: #f4f4f4;
  }

  .overview-grid {
    padding: 72px 0 12px 0;
    display: grid;
    row-gap: 24px;
  }

  .block {
    text-align: center;
  }

  .block__title {
    color: #252525;
    font-weight: 700;
    line-height: 1.4em;
    font-size: 24px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  .block__perex {
    font-size: 1em;
  }

  @media (min-width: 768px) {
    .overview-grid {
      row-gap: 0;
      column-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .block {
      align-items: flex-start;
    }

    .block__title {
      font-size: 24px;
    }

    .block__perex {
      font-size: 1em;
    }
  }
</style>

<footer>
  <div class="container">
    <div class="overview-grid">
      <section class="block">
        <h2 class="block__title">Address</h2>
        <p class="block__perex">
          NerdCafé Restaurant
          <br />
          40 Park Ave, Brooklyn, New York 70250
        </p>
      </section>
      <section class="block">
        <h2 class="block__title">Reservation</h2>
        <p class="block__perex">
          000-111-222
          <br />
          contact@example.com
        </p>
      </section>
      <section class="block">
        <h2 class="block__title">Open Hours</h2>
        <p class="block__perex">
          Monday - Friday: 10 AM - 11 PM
          <br />
          Saturday - Sunday: 9 AM - 1 PM
        </p>
      </section>
    </div>
    <SocialMedia />
  </div>
</footer>
