<script>
  import OpenHours from '../components/OpenHours.svelte';
  import CTA from '../components/CTA.svelte';
  import Title from '../components/PageTitle.svelte';
  import HeroBanner from '../components/HeroBanner.svelte';

  let showMore = false;

  function handleShowMore() {
    showMore ? (showMore = false) : (showMore = true);
  }
</script>

<style>
  section {
    padding-top: 54px;
    padding-bottom: 32px;
    text-align: center;
    background-color: #f4f4f4;
  }

  .subtitle {
    font-size: 24px;
    font-style: italic;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 16px;
  }

  .grid-item:first-child {
    margin-bottom: 40px;
  }

  .grid-item:last-child {
    margin-bottom: 50px;
  }

  img {
    max-width: 100%;
  }

  .hidden {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    .grid {
      display: grid;
      column-gap: 50px;
      grid-template-columns: 1fr 1fr;
    }

    section {
      text-align: left;
    }
  }
</style>

<svelte:head>
  <title>About NerdCafé</title>
</svelte:head>

<HeroBanner
  bannerSubtitle="Welcome to NerdCafé, a modern restaurant with a focus on
  premium food tastes"
  bannerTitle="About Us"
  bannerImg="about" />
<section>
  <div class="container">

    <div class="grid">
      <div class="grid-item">
        <Title title="History" subTitle="About Us" theme="title-dark" />

        <p class="subtitle">
          Welcome to NerdCafé, a modern restaurant with a focus on premium food
          tastes
        </p>

        <p>
          You can choose from a variety of styles, light and easy drinking,
          fresh and aromatic white wines or you could try intense and elegant
          red wines. Creative cuisine involves sophisticated wines.
        </p>

        <p class="more" class:hidden={!showMore}>
          Vestibulum eleifend gravida neque a bibendum. Vivamus viverra velit
          non cursus elementum. Donec sit amet posuere ipsum. Mauris rutrum
          sagittis sapien text link. In vitae ipsum eleifend, auctor turpis in,
          vestibulum dui. Ut vestibulum, lorem id eleifend mollis, urna augue
          imperdiet ante, vitae aliquam turpis mauris eget nisi.
        </p>

        <CTA
          linkTheme="link-dark"
          linkTitle={showMore ? 'Find less' : 'Find more'}
          on:click={handleShowMore} />

      </div>
      <div class="grid-item">
        <img src="/client/about-us.jpg" alt="" />
      </div>
    </div>
  </div>

</section>

<OpenHours />
