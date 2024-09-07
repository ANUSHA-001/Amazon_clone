document.addEventListener("DOMContentLoaded", () => {
    // Sample product data
    const products = [
        { id: 1, name: "Product 1", description: "Description of product 1" },
        { id: 2, name: "Product 2", description: "Description of product 2" },
        { id: 3, name: "Product 3", description: "Description of product 3" },
        { id: 4, name: "Product 4", description: "Description of product 4" },
        { id: 5, name: "Product 5", description: "Description of product 5" },
        { id: 6, name: "Product 6", description: "Description of product 6" },
    ];

    let productsToShow = 3;

    // Display products on the page
    function displayProducts() {
        const productSection = document.getElementById("productSection");
        productSection.innerHTML = ""; // Clear previous content

        for (let i = 0; i < productsToShow; i++) {
            if (products[i]) {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <h3>${products[i].name}</h3>
                    <p>${products[i].description}</p>
                `;
                productSection.appendChild(productCard);
            }
        }
    }

    // Initial load of products
    displayProducts();

    // Load more products
    document.getElementById("loadMoreBtn").addEventListener("click", () => {
        productsToShow += 3;
        displayProducts();
    });

    // Search functionality
    document.getElementById("searchInput").addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );

        const productSection = document.getElementById("productSection");
        productSection.innerHTML = ""; // Clear previous content

        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            productSection.appendChild(productCard);
        });
    });

    // Responsive navigation menu toggle
    document.getElementById("menuToggle").addEventListener("click", () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
    });
});
