document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo para lentes de niños y niñas
    const boysCatalogData = ['Modelo 1', 'Modelo 2', 'Modelo 3'];
    const girlsCatalogData = ['Modelo A', 'Modelo B', 'Modelo C'];

    function populateCatalog(catalogId, data) {
        const catalog = document.getElementById(catalogId);
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            catalog.appendChild(li);
        });
    }

    populateCatalog('boysCatalog', boysCatalogData);
    populateCatalog('girlsCatalog', girlsCatalogData);

    const bannerInput = document.getElementById('bannerInput');
    const bannerPreview = document.getElementById('bannerPreview');

    bannerInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                bannerPreview.innerHTML = `<img src="${e.target.result}" alt="Banner Preview">`;
            };

            reader.readAsDataURL(file);
        }
    });
});
