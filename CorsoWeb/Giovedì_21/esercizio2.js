// seleziono gli id del menu ad hamburger e della nav bar
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click',function(){
    nav.classList.toggle('active');
});

const form = document.getElementById('formLibri');
const contenitore = document.getElementById('contenitore');

// faccio il form utilizzando il preventDefault
form.addEventListener('submit', function(event){
    event.preventDefault(); // dovrebbe evitare di andare in refresh
});

// recupero ora i valori dell'input con value

const titolo = document.getElementById("titolo").value;
const autore = document.getElementById("author").value;
const genere = document.getElementById("genre").value;
const anno = document.getElementById("year").value;
const descrizione = document.getElementById("description").value;

// creo le card

const card = document.createElement('div');
card.classList.add('card');

card.innerHTML = `
    <h3>${titolo}</h3>
    <small>${autore} - ${anno}</small>
    <p><strong>Genere:</strong> ${genere}</p>
    <p>${descrizione}</p>
  `;

  contenitore.appendChild(card);

