import {URL} from 'url';
import fetch from 'node-fetch';

const BASE_URL = 'https://sapperweb.cdn.prismic.io/api/v2';
let masterRef = null;

async function getRef() {
  if (masterRef) {
    return masterRef;
  }
  const response = await fetch(BASE_URL);
  const json = await response.json();
  masterRef = json.refs[0].ref;
  return masterRef;
}

export async function getProducts() {
  const productsUrl = new URL('/api/v2/documents/search', BASE_URL);
  const ref = await getRef();
  productsUrl.searchParams.set('ref', ref);
  productsUrl.searchParams.set('fetchLinks', 'category.title');
  productsUrl.searchParams.set('q', '[[at(document.type,"product")]]');
  const response = await fetch(productsUrl);
  return response.json();
}
