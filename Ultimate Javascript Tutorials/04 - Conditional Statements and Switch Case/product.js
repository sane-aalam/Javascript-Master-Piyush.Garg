//: 😇  Let's say we have products with properties: category, price, and availability.
// The example uses a realistic scenario of filtering and discounting products
// making the code more relatable.
const products = [
  { name: "Laptop", category: "Electronics", price: 1200, available: true },
  { name: "Mouse", category: "Electronics", price: 25, available: true },
  { name: "Keyboard", category: "Electronics", price: 75, available: false },
  { name: "T-Shirt", category: "Clothing", price: 30, available: true },
  { name: "Jeans", category: "Clothing", price: 60, available: true },
  { name: "Book", category: "Books", price: 15, available: false },
];

// filter product on based on price -
let priceMaximum100 = products.filter((product) => {
  return product.price >= 100;
});

console.log(priceMaximum100);

if (products[0].category == "Electronics") {
  console.log("Electronics are available");
} else if (products[0].category != "Electronics") {
  console.log("Electronics are not available");
}

if (products[4].name != "Book") {
  // Jeans hay
  console.log(products[4].name);
}
