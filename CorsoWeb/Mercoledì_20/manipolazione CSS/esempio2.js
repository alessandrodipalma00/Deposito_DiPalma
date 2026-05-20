// Seleziono gli elementi HTML
let testo = document.getElementById("testo");

let btnColore = document.getElementById("btnColore");
let btnGrandezza = document.getElementById("btnGrandezza");
let btnSfondo = document.getElementById("btnSfondo");


// Cambio direttamente il colore del testo
btnColore.addEventListener("click", function () {
testo.style.color = "red";
});


// Cambio direttamente la dimensione del testo
btnGrandezza.addEventListener("click", function () {
testo.style.fontSize = "30px";
// lo style si utilizza per definire un cambiamento di proprietà tramite JS
// lo style è una proprietà
});


// Cambio direttamente il colore di sfondo
btnSfondo.addEventListener("click", function () {
testo.style.backgroundColor = "yellow";
});