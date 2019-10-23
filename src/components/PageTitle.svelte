<script>
  export let title;
  export let subTitle;
  export let theme = 'title-light';
</script>

<style>
  .title {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 42px;
    position: relative;
    display: inline-block;
    margin-bottom: 36px;
    z-index: 2;
  }

  span {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
  }

  .title:after,
  .title:before {
    content: '';
    width: 100%;
    height: 1px;
    background: #fff;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  .title:after {
    height: 5px;
    bottom: -7px;
  }

  .title-light {
    color: #fff;
  }

  .title-dark,
  .title-dark span {
    color: #252525;
  }

  .title-dark:after,
  .title-dark:before {
    background: #252525;
  }

  @media (min-width: 992px) {
    .title {
      font-size: 54px;
    }

    .info {
      font-size: 1.5em;
    }
  }
</style>

<h3 class="title {theme}">
  <span>{title}</span>
  {subTitle}
</h3>
