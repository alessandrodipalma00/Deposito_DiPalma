
// seleziono gli elementi tramite id

let titolo = document.getElementById('titolo');

let testo = document.getElementById('testo');

let bottone = document.getElementById('bottone');

let lista = document.getElementById('lista');

// cambia titolo appena la pagina parte

titolo.innerHTML = 'Titolo modificato con JS';

// quando clicca il bottone
bottone.addEventListener('click', function() {

     // cambio il testo del paragrafo

     testo.innerHTML = 'Testo modificato';

     // creo un nuovo elemento li

     let nuovoElemento = document.createElement('li');

     // inserisco testo nel nuovo elemento

     nuovoElemento.innerHTML = 'Nuovo elemento';

     // aggiungo l'elemento alla lista

     lista.appendChild(nuovoElemento);

});