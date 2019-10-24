<script>
  const socialMedia = [
    {name: 'Facebook', href: '#'},
    {name: 'Instagram', href: '#'},
    {name: 'LinkedIn', href: '#'},
    {name: 'VKontakte', href: '#'},
    {name: 'Pinterest', href: '#'},
    {name: 'YouTube', href: '#'},
    {name: 'Twitter', href: '#'},
  ];
</script>

<style>
  section {
    padding-top: 24px;
  }

  h2 {
    color: #252525;
    font-weight: 700;
    line-height: 1.4em;
    font-size: 24px;
    margin-bottom: 16px;
    text-transform: uppercase;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding: 24px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    padding: 0 24px;
  }

  img {
    width: 24px;
  }
</style>

<section>
  <h2>We are Social!</h2>

  <ul>
    {#each socialMedia as {name, href}}
      <li>
        <a {href} title={name}>
          <img src="img/{name.toLowerCase()}-16.svg" alt={name} />
        </a>
      </li>
    {/each}

  </ul>
</section>
