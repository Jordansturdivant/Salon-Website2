async function fetchProductData() {
    try {
      const response = await fetch('products.json');  //await fetch('products.json'); pauses the execution of the function 
      const data = await response.json(); //const data = await response.json(); pauses the function until the response is converted to JSON format
      const productContainer = document.getElementById('product-container');
  
      // Loop through each product and create HTML elements
      // for each method executes a provided function once for each array element 
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