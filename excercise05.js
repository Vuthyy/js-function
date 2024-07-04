function filterProducts(products) {
  return products.filter((prduct) => prduct.quantity > 0);
}

const products = [
  { name: "cucumber", price: 12, quantity: 0 },
  { name: "banana", price: 10, quantity: 5 },
  { name: "orange", price: 8, quantity: 10 },
];

console.log(filterProducts(products));
