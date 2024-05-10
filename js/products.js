async function fetchProductData() {
    try {
      const response = await fetch('products.json');
      const data = await response.json();
      const productContainer = document.getElementById('product-container');
  
      // Loop through each product and create HTML elements
      data.forEach(product => {
        productContainer.innerHTML += `
          <div>
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
            <img src="${product.photo}" alt="${product.name}">
          </div>
        `;
      });
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }
  
  // Call the function to fetch product data
  fetchProductData();