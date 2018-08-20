const products = [
  { name: 'product1', Price: 100, category: ['food'] },
  { name: 'product2', Price: 200, category: ['fashion'] },
  { name: 'product3', Price: 300, category: ['technology'] },
  { name: 'product4', Price: 400, category: ['fashion'] },
  { name: 'product5', Price: 500, category: ['technology'] },
  { name: 'product6', Price: 600, category: ['fashion'] },
  { name: 'product7', Price: 700, category: ['food'] },
  { name: 'product8', Price: 800, category: ['fashion'] },
  // { name: 'product10', Price: 100, category: ['food'] },
];

function getProductsBycategory() {
  return products.filter(product => product.category.includes('food'));
}

module.exports = { getProductsBycategory };
