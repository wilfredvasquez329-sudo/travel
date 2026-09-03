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
