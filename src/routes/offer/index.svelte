<script context="module">
  import fetch from 'node-fetch';
  export function preload({host, params, query}) {
    return fetch(`https://reactiveconf-sapper-workshop.vorcigernix.now.sh/lambda`)
      .then(r => r.json())
      .then(itemsPerCategory => {
        // console.log(itemsPerCategory);
        return {itemsPerCategory: Object.entries(itemsPerCategory)};
      });
  }
</script>

<script>
  import {fade} from 'svelte/transition';
  import PageTitle from '../../components/PageTitle.svelte';
  import HeroBanner from '../../components/HeroBanner.svelte';
  export let itemsPerCategory;

  let selectedCategory;
</script>

<style>
  section {
    text-align: center;
    padding-top: 54px;
    padding-bottom: 32px;
    background-color: #f4f4f4;
  }

  .category {
    margin-top: 40px;
  }

  .category__item {
    margin-bottom: 24px;
    text-align: left;
  }

  .category__title {
    letter-spacing: 1px;
    padding: 8px 24px 8px 31px;
    text-transform: uppercase;
    cursor: pointer;
    border: 5px solid #252525;
    background: #ffffff;
    transition: all 0.5s ease-in-out 0s;
    font-size: 32px;
    color: #252525;
    font-weight: 700;
    position: relative;
  }

  .category__title:hover {
    background: #252525;
    color: #fff;
  }

  .category__title:hover:after,
  .category__title:hover:before {
    background: #fff;
  }

  .category__item--active .category__title:after {
    transform: rotate(-45deg);
    background: #fff;
  }

  .category__item--active .category__title:before {
    transform: rotate(45deg);
    background: #fff;
  }

  .category__title:after,
  .category__title:before {
    position: absolute;
    content: '';
    width: 10px;
    height: 3px;
    left: 6px;
    top: 50%;
    background-color: #252525;
    transform: rotate(45deg);
    transition: all 0.2s ease-in-out 0s;
  }

  .category__title:before {
    transform: rotate(-45deg);
    left: 12px;
  }

  .item-ingredients {
    font-style: italic;
    font-size: 14px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 16px;
    row-gap: 16px;
    padding: 16px;
    background: rgba(255, 255, 255, 1);
  }

  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item-img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  .item-name {
    display: flex;
    justify-content: space-between;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    flex-direction: column;
  }

  .item-name__title,
  .item-name__price {
    background-color: #fff;
    z-index: 2;
  }

  .item-name__title {
    padding-right: 5px;
  }

  .item-name__price {
    padding-left: 5px;
  }

  .item-name__dots {
    position: absolute;
    top: 14px;
    left: 80px;
    right: 0;
    margin: 0;
    border: 0;
    height: 5px;
    display: block;
    background: radial-gradient(#d5d5d5 40%, transparent 10%);
    background-position: 0 0;
    background-size: 4px 4px;
    background-repeat: repeat-x;
  }

  .item > div {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  .category__content {
    display: none;
  }

  .category__item--active {
    margin-bottom: 0;
  }

  .category__item--active .category__content {
    display: block;
  }

  .category__item--active .category__title {
    background-color: #252525;
    color: white;
  }

  @media only screen and (min-width: 768px) {
    .item {
      flex-direction: row;
    }

    .item-img {
      margin-bottom: 0;
    }

    .item-name {
      flex-direction: row;
    }

    .item > div {
      display: block;
      text-align: left;
    }
  }

  @media only screen and (min-width: 992px) {
    .items {
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
      row-gap: 32px;
      padding-top: 32px;
      padding-bottom: 0;
    }

    .item {
      padding: 16px 0;
    }

    .category__item--active {
      margin-bottom: 24px;
    }
  }
</style>

<svelte:head>
  <title>NerdCafé Offer &amp; Menu</title>
</svelte:head>

<HeroBanner
  bannerSubtitle="Check out our premium meal offers, whether you look for snack
  or lunch"
  bannerTitle="Offer"
  bannerImg="offer" />

<section>
  <div class="container" transition:fade>
    <PageTitle title="Discover" subTitle="Our Menu" theme="title-dark" />

    <p>
      Explore texture, color and of course the ultimate tastes with our menu of
      the season. All the ingredients are fresh and carefully selected by our
      chefs. Enjoy an extraordinary dinning experience.
    </p>

    <ul class="category">
      {#each itemsPerCategory as [category, items]}
        <li
          class="category__item"
          class:category__item--active={selectedCategory === category}>
          <h4
            class="category__title"
            on:click={() => (selectedCategory === category ? (selectedCategory = null) : (selectedCategory = category))}
            aria-expanded={selectedCategory === category}
            role="button"
            tabindex="0">
            {category}
          </h4>
          <div class="category__content">
            <ul class="items">
              {#each items as item}
                <li class="item">
                  <img src={item.image.url} class="item-img" alt="" />
                  <div>
                    <p class="item-name">
                      <span class="item-name__title">{item.name}</span>
                      <span class="item-name__dots" />
                      <span class="item-name__price">$&nbsp;{item.price}</span>
                    </p>
                    <p class="item-ingredients">{item.description}</p>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
