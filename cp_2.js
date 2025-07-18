function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then((res) => res.json())
        .then((products) => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch((error) => {
            console.error('Error with fetchProductsThen:', error);
        });
}

// Async/Await version
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        const products = await response.json();
        displayProducts(products); // You'll define this next
    } catch (error) {
        handleError(error); // You'll define this next
    }
}

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clears any existing content

    products.slice(0,5).forEach(product => {
        const { name, price, image } = product.fields;

        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${image[0].url}" alt="${name}" />
            <h3>${name}</h3>
            <p>$${(price / 100).toFixed(2)}</p>
            `;
            container.appendChild(card);
    });
}

function handleError(error) {
    console.error('An error occurred while fetching this product: ${error.message}');   
}

fetchProductsThen(); // Call the function to fetch products using .then()
fetchProductsAsync(); // Call the function to fetch products using async/await
