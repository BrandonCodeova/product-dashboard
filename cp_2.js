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