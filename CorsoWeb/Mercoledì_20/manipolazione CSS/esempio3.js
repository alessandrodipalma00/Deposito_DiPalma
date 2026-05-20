// seleziono elementi HTML
let box = document.getElementById('box');

let btnBordo = document.getElementById('btnBordo');

let btnRotazione = document.getElementById('btnRotazione');

let btnNascondi = document.getElementById('btnNascondi');

btnBordo.addEventListener('click', function(){
    // cambio spessore e colore bordo
    box.style.border = '5px dashed red';

});

btnRotazione.addEventListener('click', function(){
    box.style.transform = 'rotate(20deg)';
})

btnNascondi.addEventListener('click', function(){
    // nascondo il box
    box.style.visibility = 'hidden';
});