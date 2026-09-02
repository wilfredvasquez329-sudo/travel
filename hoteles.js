let ultimaPosicion = window.scrollY;

window.addEventListener("scroll", function () {

    let posicionActual = window.scrollY;

    if (posicionActual > ultimaPosicion) {

        // Bajando
        document.querySelector(".header-hoteles")
        .classList.add("ocultar");

    } else {

        // Subiendo
        document.querySelector(".header-hoteles")
        .classList.remove("ocultar");
    }

    ultimaPosicion = posicionActual;
});