import send from '@polka/send';
import {getProducts} from '../../cms';

export async function get(req, res) {
  // const productsResponse = await getProducts();
  const itemsByCategory = {
    Desserts: [
      {
        name: 'Double Chocolate Cupcakes ',
        image: {
          dimensions: {
            width: 640,
            height: 640,
          },
          alt: null,
          copyright: null,
          url:
            'https://sapperweb.cdn.prismic.io/sapperweb/bfc8a1d91fce6c4c7152c97069830fcb8f5f80b5_chocolate-cupcakes-2-400x400.jpg',
          Snipcart: {
            dimensions: {
              width: 50,
              height: 50,
            },
            alt: null,
            copyright: null,
            url:
              'https://sapperweb.cdn.prismic.io/sapperweb/d03b32034a0ce6bbab9063128c4ca3de01cb1ded_chocolate-cupcakes-2-400x400.jpg',
          },
          Listing: {
            dimensions: {
              width: 300,
              height: 300,
            },
            alt: null,
            copyright: null,
            url:
              'https://sapperweb.cdn.prismic.io/sapperweb/fb54d5adc8feb5578cb9e84f95d41008aed8784e_chocolate-cupcakes-2-400x400.jpg',
          },
        },
        price: 7,
        description: 'Chocolate, eggs, vanilla, milk',
      },
    ],
  };
  send(res, 200, JSON.stringify(itemsByCategory), {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/json',
  });
}
