document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === index) ? 1 : 0;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    const interval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', function () {
        clearInterval(interval); 
        prevSlide();
    });

    nextBtn.addEventListener('click', function () {
        clearInterval(interval); 
        nextSlide();
    });
});

//CARROUSEL DE MARCAS DE LENTES
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = document.querySelectorAll(".slide").length;
        index = (index + totalSlides) % totalSlides;
        carousel.style.transform = `translateX(${-index * 100}%)`;
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    setInterval(nextSlide, 3000); 
});


function inicializarMapa() {
    var ubicacion = { lat: 40.7128, lng: -74.0060 }; // Reemplaza con las coordenadas de tu ubicación
    
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: ubicacion,
        zoom: 15 // Nivel de zoom
    });

    var marcador = new google.maps.Marker({
        position: ubicacion,
        map: mapa,
        title: 'Tu Ubicación'
    });
}

