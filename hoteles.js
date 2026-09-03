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
function abrirMenu(){
    document.getElementById("redes").classList.add("mostrar")
     document.getElementById("fondo").classList.add("mostrar")
}
function cerrarMenu(){
    document.getElementById("redes").classList.remove("mostrar")
     document.getElementById("fondo").classList.remove("mostrar")
}