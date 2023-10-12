function adjustColumns() {
    const columnsContainer = document.getElementById('columnsContainer');
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
        columnsContainer.style.flexDirection = 'column';
    } else {
        columnsContainer.style.flexDirection = 'row';
    }
}

// Ajustar las columnas al cargar la página y al cambiar el tamaño de la ventana
document.addEventListener('DOMContentLoaded', adjustColumns);
window.addEventListener('resize', adjustColumns);
