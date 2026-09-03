function abrirMenu(){
    document.getElementById("redes").classList.add("mostrar")
     document.getElementById("fondo").classList.add("mostrar")
}
function cerrarMenu(){
    document.getElementById("redes").classList.remove("mostrar")
     document.getElementById("fondo").classList.remove("mostrar")
}
let ultimaPosicion = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    let posicionActual = window.scrollY;

    if (posicionActual > ultimaPosicion && posicionActual > 100) {

        // BAJANDO
        header.classList.add("ocultar");

    } else {

        // SUBIENDO
        header.classList.remove("ocultar");

    }

    ultimaPosicion = posicionActual;
});
/* =====================================================
   IDIOMA PREMIUM - LEOTRAVEL
===================================================== */

const selectorIdioma =
    document.querySelector(".selector-idioma");

const btnIdioma =
    document.querySelector(".btn-idioma");

const idiomaActual =
    document.getElementById("idiomaActual");


/* ABRIR / CERRAR */

if (btnIdioma) {

    btnIdioma.addEventListener("click", function(e) {

        e.stopPropagation();

        selectorIdioma.classList.toggle("abierto");

    });

}


/* CAMBIAR IDIOMA */

document
.querySelectorAll(".submenu-idiomas button")
.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const idioma =
            this.dataset.lang;

        const nombreIdioma =
            this.querySelector("span:last-child")
            .textContent;


        idiomaActual.textContent =
            nombreIdioma;


        const googleSelect =
            document.querySelector(".goog-te-combo");


        if (googleSelect) {

            googleSelect.value =
                idioma;

            googleSelect.dispatchEvent(
                new Event("change")
            );

        }


        selectorIdioma.classList.remove(
            "abierto"
        );

    });

});


/* CERRAR AL HACER CLICK AFUERA */

document.addEventListener("click", function(e) {

    if (
        selectorIdioma &&
        !selectorIdioma.contains(e.target)
    ) {

        selectorIdioma.classList.remove(
            "abierto"
        );

    }

});

// ============================================
// VIDEOS DEL HERO
// ============================================

const videos = document.querySelectorAll(".video");
const indicadores = document.querySelectorAll(".indicadores span");

let actual = 0;


// ============================================
// MOSTRAR VIDEO
// ============================================

function mostrarVideo(numero) {

    if (!videos.length) return;

    videos.forEach((video) => {
        video.classList.remove("activo");
        video.pause();
        video.currentTime = 0;
    });

    indicadores.forEach((indicador) => {
        indicador.classList.remove("activo");
    });

    if (!videos[numero]) return;

    videos[numero].classList.add("activo");

    if (indicadores[numero]) {
        indicadores[numero].classList.add("activo");
    }

    videos[numero].muted = true;

    videos[numero].play().catch((error) => {
        console.log("No se pudo reproducir el video:", error);
    });
}


// ============================================
// SIGUIENTE VIDEO
// ============================================

function siguiente() {

    if (!videos.length) return;

    actual++;

    if (actual >= videos.length) {
        actual = 0;
    }

    mostrarVideo(actual);
}


// ============================================
// VIDEO ANTERIOR
// ============================================

function anterior() {

    if (!videos.length) return;

    actual--;

    if (actual < 0) {
        actual = videos.length - 1;
    }

    mostrarVideo(actual);
}


// ============================================
// CUANDO TERMINA UN VIDEO
// ============================================

videos.forEach((video) => {

    video.addEventListener("ended", () => {
        siguiente();
    });

});


// ============================================
// INICIAR VIDEO
// ============================================

mostrarVideo(0);


// ============================================
// MENÚ DE CONTACTO
// ============================================

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


// ============================================
// IDIOMAS
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const botonIdioma = document.querySelector(".btn-idioma");
    const submenuIdiomas = document.querySelector(".submenu-idiomas");
    const idiomaActual = document.getElementById("idiomaActual");

    // Abrir / cerrar menú de idiomas
    if (botonIdioma && submenuIdiomas) {

        botonIdioma.addEventListener("click", (e) => {

            e.stopPropagation();

            submenuIdiomas.classList.toggle("mostrar");

        });

    }


    // Seleccionar idioma
    const idiomas = document.querySelectorAll(
        ".submenu-idiomas button[data-lang]"
    );

    idiomas.forEach((boton) => {

        boton.addEventListener("click", () => {

            const idioma = boton.dataset.lang;

            const nombreIdioma =
                boton.querySelector("span:last-child")?.textContent.trim();

            if (idiomaActual && nombreIdioma) {
                idiomaActual.textContent = nombreIdioma;
            }

            cambiarIdioma(idioma);

            if (submenuIdiomas) {
                submenuIdiomas.classList.remove("mostrar");
            }

        });

    });


    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", () => {

        if (submenuIdiomas) {
            submenuIdiomas.classList.remove("mostrar");
        }

    });

});


// ============================================
// GOOGLE TRANSLATE
// ============================================

function cambiarIdioma(idioma) {

    const select = document.querySelector(".goog-te-combo");

    if (!select) {
        console.log("Google Translate todavía no está cargado.");
        return;
    }

    select.value = idioma;

    select.dispatchEvent(new Event("change"));
}

/* =========================================
   📱 MENÚ CELULAR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const botonMenu = document.getElementById("menuCelular");
    const nav = document.querySelector("header nav");

    if (!botonMenu || !nav) return;

    botonMenu.addEventListener("click", function () {

        nav.classList.toggle("menu-abierto");

        const icono = botonMenu.querySelector("i");

        if (nav.classList.contains("menu-abierto")) {

            icono.classList.remove("fa-bars");
            icono.classList.add("fa-xmark");

        } else {

            icono.classList.remove("fa-xmark");
            icono.classList.add("fa-bars");

        }

    });


    /* CERRAR AL TOCAR UN ENLACE */

    nav.querySelectorAll("a").forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            if (!this.parentElement.classList.contains("submenu-contenedor")) {

                nav.classList.remove("menu-abierto");

                const icono = botonMenu.querySelector("i");

                icono.classList.remove("fa-xmark");
                icono.classList.add("fa-bars");

            }

        });

    });


    /* SUBMENÚS EN CELULAR */

    nav.querySelectorAll(".submenu-contenedor > a").forEach(function (boton) {

        boton.addEventListener("click", function (e) {

            e.preventDefault();

            const contenedor = this.parentElement;

            contenedor.classList.toggle("submenu-abierto");

        });

    });

});