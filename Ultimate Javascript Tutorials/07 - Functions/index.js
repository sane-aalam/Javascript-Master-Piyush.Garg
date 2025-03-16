// basic function to sum two value
function sum(a, b) {
  return a + b;
}

let result = sum(1, 9);
console.log(result);

const products = [
  { name: "Laptop", category: "Electronics", price: 1200, available: true },
  { name: "Mouse", category: "Electronics", price: 25, available: true },
  { name: "Keyboard", category: "Electronics", price: 75, available: false },
  { name: "T-Shirt", category: "Clothing", price: 30, available: true },
  { name: "Jeans", category: "Clothing", price: 60, available: true },
  { name: "Book", category: "Books", price: 15, available: false },
];

let totalProducts = products.length;
console.log("products -", totalProducts);

// Create function to print all products using pure javascript.
// NO-Map
// NO-FOR_EACH
function PrintAllProducts(products, totalProducts) {
  for (let index = 0; index < totalProducts; index++) {
    let productName = products[index].name;
    let categoryName = products[index].category;
    let priceValue = products[index].price;
    let IsPossibleAvailable = products[index].available;

    // print all products
    console.table(productName, categoryName, priceValue, IsPossibleAvailable);
  }
}

PrintAllProducts(products, totalProducts);
