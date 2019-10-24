<script>
  export let linkTitle;
  export let linkHref;
  export let linkTheme = 'link-dark';
</script>

<style>
  .cta {
    color: #ffffff;
    border: 5px solid #ffffff;
    text-decoration: none;
    font-weight: 700;
    font-size: 12px;
    display: inline-block;
    text-transform: uppercase;
    padding: 10px 24px;
    transition: all 0.5s ease-in-out 0s;
    position: relative;
    z-index: 2;
  }

  .cta:hover {
    color: #ffffff;
    border: 5px solid #bc8d4b;
    background: #bc8d4b;
  }

  .link-dark {
    color: #252525;
    border: 5px solid #252525;
  }

  .link-dark:hover {
    color: #ffffff;
    border: 5px solid #bc8d4b;
    background: #bc8d4b;
  }

  .link-light {
    color: #ffffff;
    border: 5px solid #ffffff;
  }

  .link-light:hover {
    color: #ffffff;
    border: 5px solid #bc8d4b;
    background: #bc8d4b;
  }
</style>

{#if linkHref}
  <a href={linkHref} class="cta {linkTheme}">{linkTitle}</a>
{:else}
  <button type="button" class="cta {linkTheme}" on:click>{linkTitle}</button>
{/if}
