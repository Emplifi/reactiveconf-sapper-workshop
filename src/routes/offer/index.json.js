import send from '@polka/send';
//import {getProducts} from '../../cms';

export async function get(req, res) {
  const productsResponse = await fetch("/lambda");
  const itemsByCategory = productsResponse.results.reduce(reduceCategories, {});
  send(res, 200, JSON.stringify(itemsByCategory), {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/json',
  });
}

function reduceCategories(list, {data}) {
  if (!data.categories[0].link.data) {
    console.log('malformed', data);
    return list;
  }
  const {categories, title, image, price, description} = data;
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
