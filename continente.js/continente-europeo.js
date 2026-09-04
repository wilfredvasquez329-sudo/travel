// ==========================================
// MENÚ CELULAR
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const botonMenu = document.getElementById("menuCelular");
    const nav = document.querySelector("header nav");

    if (!botonMenu || !nav) {
        console.log("No se encontró el botón o el nav");
        return;
    }

    const icono = botonMenu.querySelector("i");


    // ==============================
    // ABRIR / CERRAR MENÚ
    // ==============================

    botonMenu.addEventListener("click", function () {

        nav.classList.toggle("menu-abierto");

        if (nav.classList.contains("menu-abierto")) {

            icono.classList.remove("fa-bars");
            icono.classList.add("fa-xmark");

        } else {

            icono.classList.remove("fa-xmark");
            icono.classList.add("fa-bars");

        }

    });


    // ==============================
    // SUBMENÚS
    // ==============================

    nav.querySelectorAll(".submenu-contenedor > a").forEach(function (boton) {

        boton.addEventListener("click", function (e) {

            e.preventDefault();

            const contenedor = this.parentElement;

            contenedor.classList.toggle("submenu-abierto");

        });

    });


    // ==============================
    // CERRAR AL ELEGIR UN ENLACE
    // ==============================

    nav.querySelectorAll(".submenu a").forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            nav.classList.remove("menu-abierto");

            icono.classList.remove("fa-xmark");
            icono.classList.add("fa-bars");

        });

    });


});


// ==========================================
// VIDEOS
// ==========================================

const videos = document.querySelectorAll(".video");
const indicadores = document.querySelectorAll(".indicadores span");

let actual = 0;


// ==============================
// MOSTRAR VIDEO
// ==============================

function mostrarVideo(numero) {

    if (!videos.length) return;

    videos.forEach(function (video) {

        video.classList.remove("activo");

        video.pause();

        video.currentTime = 0;

    });


    indicadores.forEach(function (indicador) {

        indicador.classList.remove("activo");

    });


    if (!videos[numero]) return;


    videos[numero].classList.add("activo");


    if (indicadores[numero]) {

        indicadores[numero].classList.add("activo");

    }


    videos[numero].muted = true;


    videos[numero].play().catch(function (error) {

        console.log("No se pudo reproducir el video:", error);

    });

}


// ==============================
// SIGUIENTE
// ==============================

function siguiente() {

    if (!videos.length) return;

    actual++;

    if (actual >= videos.length) {

        actual = 0;

    }

    mostrarVideo(actual);

}


// ==============================
// ANTERIOR
// ==============================

function anterior() {

    if (!videos.length) return;

    actual--;

    if (actual < 0) {

        actual = videos.length - 1;

    }

    mostrarVideo(actual);

}


// ==============================
// CUANDO TERMINA UN VIDEO
// ==============================

videos.forEach(function (video, index) {

    video.addEventListener("ended", function () {

        siguiente();

    });

});


mostrarVideo(0);


// ==========================================
// MENÚ CONTACTO
// ==========================================

function abrirMenu() {

    const redes = document.getElementById("redes");
    const fondo = document.getElementById("fondo");

    if (redes) {

        redes.classList.add("mostrar");

    }

    if (fondo) {

        fondo.classList.add("mostrar");

    }

}


function cerrarMenu() {

    const redes = document.getElementById("redes");
    const fondo = document.getElementById("fondo");

    if (redes) {

        redes.classList.remove("mostrar");

    }

    if (fondo) {

        fondo.classList.remove("mostrar");

    }

}