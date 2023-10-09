function adjustPageLayout() {
    const mainTitle = document.querySelector(".main-title");
    const iconContainer = document.querySelector(".icon-container");

    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        mainTitle.style.fontSize = "2em";
    } else {
        mainTitle.style.fontSize = "2.5em";
    }

    if (windowWidth <= 768) {

    } else {
    
    }
}


window.addEventListener("load", adjustPageLayout);
window.addEventListener("resize", adjustPageLayout);



//boton para devolverme
function goBack() {
    window.history.back();
}

