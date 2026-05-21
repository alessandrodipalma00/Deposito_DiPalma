// utilizzo getelementbyId, queryselector e queryselectorall
const titolo = document.getElementById('titoloZoo');
const descrizione = document.querySelector('#descrizione');
const bottoni = document.querySelectorAll('button');

// faccio il getelementbyid di tutti i bottoni
const btnTitolo = document.getElementById("btnTitolo");
const btnDescrizione = document.getElementById("btnDescrizione");
const btnRimuovi = document.getElementById("btnRimuovi");
const btnStile = document.getElementById("btnStile");
const listaAnimali = document.getElementById('listaAnimali');

const btnLeone = document.getElementById("btnLeone");
const btnElefante = document.getElementById("btnElefante");
const btnTema = document.getElementById('btnTema');


// utilizzo il primo bottone per modificare il titolo
btnTitolo.addEventListener('click', function(){
    titolo.textContent = 'Zoo Avventura';
});

// secondo bottone per modificare la descrizione
btnDescrizione.addEventListener('click', function(){
    descrizione.textContent = 'Questo zoo contiene molti animali fantastici e viene aggiornato dinamicamente con JS.';
});

// terzo bottone aggiungo un animale alla lista
btnLeone.addEventListener('click',function (){
    const card = document.createElement('div');

    card.classList.add('card', 'leone');

    card.innerHTML = `
  <h3>Leone </h3>
  <p>Il leone è il re della savana.</p>
`;

    listaAnimali.appendChild(card);
    
});
// bottone per aggiungere un altro animale all'interno della lista
btnElefante.addEventListener('click',function (){
    const card = document.createElement('div');

    card.classList.add('card', 'elefante');

    card.innerHTML = `
    <h3>Elefante </h3>
    <p>L'elefante è il più grande animale terrestre.</p>
  `;

    listaAnimali.appendChild(card);
    
});

// quarto bottone per rimuovere un animale dalla lista
btnRimuovi.addEventListener('click',function(){
    // mi assicuro che la lista non sia vuota
    if(listaAnimali.lastElementChild){
        listaAnimali.removeChild(listaAnimali.lastElementChild);
    }
});
// bottone per cambiare lo stile della pagina
btnStile.addEventListener('click', function(){
    document.body.style.backgroundColor = '#cceeff';
    titolo.style.color = 'blue';
    // utilizzo il metodo foreach per cambiare colore a tutti i bottoni tramite la function bottone
    bottoni.forEach(function(bottone){
        bottone.style.backgroundColor = 'orange';
    });
});

// bottone per cambiare il tema dello zoo
 btnTema.addEventListener('click',function(){
    document.body.classList.toggle('temaScuro');
 })