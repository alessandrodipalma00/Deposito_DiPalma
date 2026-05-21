const titolo = document.getElementById('titolo');
const contenitore = document.getElementById('contenitore');
const bottone = document.getElementById('bottone');

bottone.addEventListener('click', function(){
    titolo.innerText = 'Contenuto aggiornato';

    // contenitore.innerHTML = 
    // <h2>Nuova selezione</h2>
    // <p>
    // questo contenuto è stato generato dinamicamente con JavaScript.
    // </p>
    // ;
});