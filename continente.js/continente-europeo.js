const videos = document.querySelectorAll(".video");
const indicadores = document.querySelectorAll(".indicadores span");

let actual = 0;

// ==============================
// MOSTRAR VIDEO
// ==============================

function mostrarVideo(numero) {

videos.forEach((video) => {

    video.classList.remove("activo");

    video.pause();

    video.currentTime = 0;

});


indicadores.forEach((indicador) => {

    indicador.classList.remove("activo");

});


videos[numero].classList.add("activo");

indicadores[numero].classList.add("activo");


videos[numero].muted = true;

videos[numero].play().catch(error => {

    console.log("No se pudo reproducir el video:", error);

});


}

// ==============================
// SIGUIENTE
// ==============================

function siguiente() {


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


actual--;

if (actual < 0) {

    actual = videos.length - 1;

}

mostrarVideo(actual);


}

// ==============================
// CUANDO TERMINA UN VIDEO
// ==============================

videos.forEach((video, index) => {


video.addEventListener("ended", () => {

    if (index === actual) {

        siguiente();

    }

});


});

// ==============================
// INICIAR
// ==============================

mostrarVideo(0);

function abrirMenu(){
    document.getElementById("redes").classList.add("mostrar")
     document.getElementById("fondo").classList.add("mostrar")
}
function cerrarMenu(){
    document.getElementById("redes").classList.remove("mostrar")
     document.getElementById("fondo").classList.remove("mostrar")
}

