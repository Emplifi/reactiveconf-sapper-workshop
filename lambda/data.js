import fetch from 'node-fetch';

const BASE_URL = process.env.CMS_URL || 'https://sapperweb.cdn.prismic.io/api/v2';
let masterRef = null;

async function getRef() {
  if (masterRef) {
    return masterRef
  }
  const response = await fetch(BASE_URL)
  const json = await response.json()
  masterRef = json.refs[0].ref
  return masterRef
}

async function getProducts() {
  const productsUrl = new URL('/api/v2/documents/search', BASE_URL);
  const ref = await getRef();
  productsUrl.searchParams.set('ref', ref);
  productsUrl.searchParams.set('fetchLinks', 'category.title');
  productsUrl.searchParams.set('q', '[[at(document.type,"product")]]');
  const response = await fetch(productsUrl);
  return response.json();
}

function reduceCategories(list, { data }) {
  if (!data.categories[0].link.data) {
    console.log('malformed', data);
    return list;
  }
  const { categories, title, image, price, description } = data;
  const categoryName = categories[0].link.data.title[0].text;
  const mealName = title[0].text;
  const descriptionText = description[0].text;

  return {
    ...list,
    [categoryName]: (list[categoryName] || []).concat({
      name: mealName,
      image,
      price,
      description: descriptionText,
    }),
  };
}

module.exports = async (req, res) => {
  const products = await getProducts();
  const itemsByCategory = products.results.reduce(reduceCategories, {});
  res.status(200).send(JSON.stringify(itemsByCategory));
};