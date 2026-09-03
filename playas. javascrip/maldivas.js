// ===============================
// CONFIGURACIÓN
// ===============================

const precioPersona = 4500000;

let viajeros = 1;


// ===============================
// ELEMENTOS HTML
// ===============================

const botonMenos = document.getElementById("menos");
const botonMas = document.getElementById("mas");

const textoCantidad = document.getElementById("cantidad");
const resumenViajeros = document.getElementById("resumenViajeros");

const total = document.getElementById("total");

const botonReservar = document.getElementById("reservar");
const fecha = document.getElementById("fecha");

const hotelSeleccionado = document.getElementById("hotelSeleccionado");
const suplementoHotel = document.getElementById("suplementoHotel");

const botonesHotel = document.querySelectorAll(".elegir-hotel");

let suplemento = 0;
// ===============================
// FORMATO DEL PRECIO
// ===============================

function formatoPrecio(numero) {

    return numero.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });

}


// ===============================
// ACTUALIZAR CANTIDAD Y PRECIO
// ===============================

function actualizarPrecio() {

    // Precio del paquete según cantidad de viajeros
    const precioPaqueteTotal = viajeros * precioPersona;

    // Precio final incluyendo el suplemento del hotel
    const precioTotal = precioPaqueteTotal + suplemento;

    // Mostrar cantidad de viajeros
    textoCantidad.textContent = viajeros;

    // Mostrar viajeros en el resumen
    resumenViajeros.textContent = viajeros;

    // Mostrar precio del paquete
    document.getElementById("precioPaquete").textContent =
        formatoPrecio(precioPaqueteTotal);

    // Mostrar suplemento del hotel
    suplementoHotel.textContent =
        formatoPrecio(suplemento);

    // Mostrar total
    total.textContent =
        formatoPrecio(precioTotal);
}
// ===============================
// SELECCIONAR HOTEL
// ===============================

botonesHotel.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Obtener información del botón
        const nombreHotel = boton.dataset.hotel;
        suplemento = Number(boton.dataset.suplemento);

        // Mostrar hotel seleccionado
        hotelSeleccionado.textContent = nombreHotel;

        // Actualizar precios
        actualizarPrecio();

        // Llevar al usuario a la calculadora
        document.querySelector(".calculadora").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


// ===============================
// BOTÓN +
// ===============================

botonMas.addEventListener("click", function () {

    viajeros++;

    actualizarPrecio();

});


// ===============================
// BOTÓN -
// ===============================

botonMenos.addEventListener("click", function () {

    if (viajeros > 1) {

        viajeros--;

        actualizarPrecio();

    }

});


// ===============================
// FECHA MÍNIMA
// ===============================

const hoy = new Date()
    .toISOString()
    .split("T")[0];

fecha.min = hoy;


// ===============================
// RESERVAR
// ===============================

botonReservar.addEventListener("click", function () {

    if (fecha.value === "") {

        alert("Por favor selecciona la fecha de tu viaje.");

        return;
    }


    const precioTotal =
        viajeros * precioPersona;


    alert(
        "🌴 RESERVA COLOMBIA\n\n" +

        "Viajeros: " +
        viajeros +

        "\nFecha: " +
        fecha.value +

        "\nTotal: " +
        formatoPrecio(precioTotal)
    );

});


// ===============================
// INICIAR
// ===============================

actualizarPrecio();
// ===============================
// ITINERARIO
// ===============================

const dias = document.querySelectorAll(".dia");

const numeroDia =
    document.getElementById("numeroDia");

const tituloDia =
    document.getElementById("tituloDia");

const descripcionDia =
    document.getElementById("descripcionDia");


// INFORMACIÓN DE CADA DÍA

const itinerario = {

    1: {
        titulo: "Llegada a Colombia",
        descripcion:
            "Llegada al aeropuerto internacional de Malé. Traslado en lancha o hidroavión hasta el resort. Check-in y tiempo libre para disfrutar de la isla."
    },

    2: {
        titulo: "Descubriendo el paraíso",
        descripcion:
            "Desayuno en el resort y día libre para disfrutar de las playas, piscinas y aguas cristalinas de Maldivas."
    },

    3: {
        titulo: "Aventura bajo el mar",
        descripcion:
            "Experiencia de snorkel y exploración de los arrecifes. Descubre la increíble vida marina de las islas Maldivas."
    },

    4: {
        titulo: "Excursión por las islas",
        descripcion:
            "Salida en barco para conocer diferentes islas, disfrutar de sus playas y descubrir la cultura local."
    },

    5: {
        titulo: "Día de relajación",
        descripcion:
            "Un día para descansar y disfrutar del resort. Puedes elegir actividades como spa, kayak, paddleboard o simplemente relajarte frente al océano."
    },

    6: {
        titulo: "Atardecer en el océano",
        descripcion:
            "Disfruta de una excursión en barco durante el atardecer y contempla uno de los paisajes más espectaculares de Maldivas."
    },

    7: {
        titulo: "Regreso a casa",
        descripcion:
            "Último desayuno en el resort. Traslado hasta el aeropuerto de Malé y regreso a casa con recuerdos inolvidables."
    }

};


// ===============================
// CAMBIAR DÍA
// ===============================

dias.forEach(function(dia) {

    dia.addEventListener("click", function() {

        // Quitar activo de todos

        dias.forEach(function(item) {

            item.classList.remove("activo");

        });


        // Activar el seleccionado

        dia.classList.add("activo");


        // Obtener número

        const numero =
            dia.dataset.dia;


        // Obtener información

        const informacion =
            itinerario[numero];


        // Cambiar contenido

        numeroDia.textContent =
            numero.padStart(2, "0");

        tituloDia.textContent =
            informacion.titulo;

        descripcionDia.textContent =
            informacion.descripcion;

    });

});