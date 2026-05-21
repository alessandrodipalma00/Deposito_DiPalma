const titolo = document.getElementById('titolo');

const descrizione = document.querySelector('.descrizione');

const bottone = document.getElementById('bottone');

bottone.addEventListener('click', function(){
    titolo.innerText = 'Titolo modificato con Javascript';

    descrizione.innerText = 'Il contenuto è stato aggiornato dinamicamente.';
});