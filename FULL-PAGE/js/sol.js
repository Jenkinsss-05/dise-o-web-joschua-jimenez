const products = [
    { id: 1, brand: 'rayban', model: 'Aviator', price: 150 },
    { id: 2, brand: 'oakley', model: 'Holbrook', price: 120 },
    { id: 3, brand: 'Empoiro Armani', model: 'Peahi', price: 180 },
    { id: 4, brand: 'Polo', model: 'PO0649', price: 200 },
];

function displayProducts(productArray) {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';

    productArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <p>${product.brand} - ${product.model}</p>
            <p>${product.price} USD</p>
        `;
        productListElement.appendChild(productElement);
    });
}

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedBrand = document.getElementById('brandFilter').value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const matchSearch = product.model.toLowerCase().includes(searchTerm);
        const matchBrand = selectedBrand === 'todas' || product.brand === selectedBrand;

        return matchSearch && matchBrand;
    });

    displayProducts(filteredProducts);
}

window.onload = function () {
    displayProducts(products);
};


function filterProducts() {
    var selectedBrand = document.getElementById("brandFilter").value;
    var sections = document.querySelectorAll(".brand-section");

    sections.forEach(function(section) {
        var sectionBrand = section.id.toLowerCase().replace("section", "");

        if (selectedBrand === "todas" || selectedBrand === sectionBrand) {
            section.style.display = "grid";
        } else {
            section.style.display = "none";
        }
    });
}


