function adjustColumns() {
    const columns = document.querySelectorAll('.column');
    const windowWidth = window.innerWidth;

    columns.forEach(column => {
        column.classList.remove('column-medium', 'column-large');

        if (windowWidth < 600) {
            column.classList.add('column');
        } else if (windowWidth < 768) {
            column.classList.add('column-medium');
        } else {
            column.classList.add('column-large');
        }
    });
}

// Ajustar las columnas al cargar la página y al cambiar el tamaño de la ventana
document.addEventListener('DOMContentLoaded', adjustColumns);
window.addEventListener('resize', adjustColumns);
