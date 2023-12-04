document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});



const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
    
    new Glide('.card-container', {
        type: 'carousel',
        perView: 2,
        breakpoints: {
            600: {
                perView: 1
            }
        }
    }).mount();
});


//LOTTIE

function enviarRespuesta() {
    var respuesta = document.getElementById('gusto').value;
    var resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = '';

    if (respuesta === 'si') {
        var animacionSi = lottie.loadAnimation({
            container: resultadoDiv,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'ruta/a/listening music.json' 
        });
    } else if (respuesta === 'no') {
        var animacionNo = lottie.loadAnimation({
            container: resultadoDiv,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'bee-lounging.json' 
        });
    }
}
