import { products } from "./Data/products.js";

document.querySelector('.product-grid').innerHTML = products.map(({name, priceCent, image, link, otherPriceCent}) => {
  return `<a href="${link}">
  <div class="product-container">
    <img src="${image}" alt="">
    <div class="name">${name}</div>
    <div class="price">$${otherPriceCent ? (priceCent/100).toFixed(2) + ' - ' + ('$' + (otherPriceCent/100).toFixed(2)) : (priceCent/100).toFixed(2) }</div>
  </div>
  </a>` 
}).join('')