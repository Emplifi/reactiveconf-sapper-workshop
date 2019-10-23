<script>
  import CTA from '../components/CTA.svelte';

  export let bannerTitle;
  export let bannerSubtitle;
  export let themeBannerFullHeight = false;
  export let hasButton = false;
  export let bannerImg;
</script>

<style>
  .hero-banner {
    padding-top: 164px;
    padding-bottom: 64px;
    padding-right: 25px;
    padding-left: 25px;
    max-width: 100vw;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: none;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    text-align: center;
    transition: background-color 1s;
  }

  .homepage {
    background-image: url('img-2.jpg');
  }

  .about {
    background-image: url('img-3.jpg');
  }

  .offer {
    background-image: url('img-4.jpg');
  }

  .hero-banner:before {
    content: '';
    background: rgba(25, 32, 46, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  h1,
  p {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 36px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    font-weight: 300;
    margin-bottom: 24px;
  }

  .full-height h1 {
    font-size: 36px;
  }

  @media only screen and (min-width: 768px) {
    .full-height {
      height: 100vh;
    }

    .full-height h1 {
      font-size: 108px;
    }

    p {
      font-size: 20px;
    }
  }
</style>

<div class="hero-banner">
  <h1>Change this header!</h1>
  <p>And this subtitle</p>
  <CTA linkHref="#" linkTheme="link-light" linkTitle="Book a table" />
</div>
