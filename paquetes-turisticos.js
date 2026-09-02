const contenedor = document.querySelector(".paquetes-contenedor");

function moverPaquetes(direccion) {

    const tarjeta = document.querySelector(".paquete");

    const espacio = 25;

    const movimiento =
        tarjeta.offsetWidth + espacio;

    contenedor.scrollBy({

        left: movimiento * direccion,

        behavior: "smooth"

    });

}
function abrirMenu(){
    document.getElementById("redes").classList.add("mostrar")
     document.getElementById("fondo").classList.add("mostrar")
}
function cerrarMenu(){
    document.getElementById("redes").classList.remove("mostrar")
     document.getElementById("fondo").classList.remove("mostrar")
}

