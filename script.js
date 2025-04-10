// app.js
// ... (rest of the JavaScript code) ...

// Fetch product data from the server
fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');

    // Create product cards
    data.forEach(product => {
      // ... (rest of the product card creation logic) ...
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

// Add product to cart
function addToCart(productId, quantity) {
  fetch('http://localhost:3000/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, quantity }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Product added to cart:', data);
      // Update cart UI
    })
    .catch(error => {
      console.error('Error adding product to cart:', error);
    });
}