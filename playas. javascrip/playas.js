function abrirMenu(){
    document.getElementById("redes").classList.add("mostrar")
     document.getElementById("fondo").classList.add("mostrar")
}
function cerrarMenu(){
    document.getElementById("redes").classList.remove("mostrar")
     document.getElementById("fondo").classList.remove("mostrar")
}

/* ================= CAMBIO DE IMAGEN ================= */

const tarjetas = document.querySelectorAll(".tarjeta");


tarjetas.forEach(tarjeta => {

    let temporizador;


    tarjeta.addEventListener("mouseenter", () => {

        temporizador = setTimeout(() => {

            tarjeta.classList.add("cambiar");

        }, 1000);

    });


    tarjeta.addEventListener("mouseleave", () => {

        clearTimeout(temporizador);

        tarjeta.classList.remove("cambiar");

    });

});



/* ================= BUSCADOR ================= */

function buscarDestinos() {

    const texto =
        document
        .getElementById("buscar")
        .value
        .toLowerCase();

    const precio =
        document
        .getElementById("precio")
        .value;


    tarjetas.forEach(tarjeta => {

        const nombre =
            tarjeta
            .dataset
            .nombre
            .toLowerCase();

        const tipoPrecio =
            tarjeta.dataset.precio;


        const coincideNombre =
            nombre.includes(texto);


        const coincidePrecio =
            precio === "todos" ||
            precio === tipoPrecio;


        if (
            coincideNombre &&
            coincidePrecio
        ) {

            tarjeta.style.display = "";

        } else {

            tarjeta.style.display = "none";

        }

    });

}



/* ================= BOTÓN HERO ================= */

function irDestinos() {

    document
        .getElementById("destinos")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================= VER VIAJE ================= */





/* ================= MENU ================= */

function abrirMenu() {

    document
        .getElementById("redes")
        .classList.add("mostrar");

         document
        .getElementById("fondo")
        .classList.add("mostrar");

}


function cerrarMenu() {

    document
        .getElementById("redes")
        .classList.remove("mostrar");
         
    document
        .getElementById("fondo")
        .classList.remove("mostrar");

}