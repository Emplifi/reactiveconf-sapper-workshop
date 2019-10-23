<script>
  import HeroBanner from '../components/HeroBanner.svelte';
  import Overview from '../components/Overview.svelte';
  import OpenHours from '../components/OpenHours.svelte';
</script>

<style>
</style>

<svelte:head>
  <title>NerdCafé</title>
</svelte:head>

<div>
  <HeroBanner
    bannerTitle="Welcome"
    bannerSubtitle="You should come and taste for yourself"
    themeBannerFullHeight
    bannerImg="homepage" />
  <Overview />
  <OpenHours />
</div>
