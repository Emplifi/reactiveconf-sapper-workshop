import send from '@polka/send';
import {getProducts} from '../../cms';

export async function get(req, res) {
  const productsResponse = await getProducts();
  const itemsByCategory = productsResponse.reduce(reduceCategories, {});
  send(res, 200, JSON.stringify(itemsByCategory), {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/json',
  });
}

function reduceCategories(list, data) {
  if (!data.categories.value[0].title) {
    console.log('malformed', data);
    return list;
  }
  const {categories, title, image, price, description} = data;
  const categoryName = categories.value[0].title.value;
  const mealName = title.value;
  const descriptionText = description.value;

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
