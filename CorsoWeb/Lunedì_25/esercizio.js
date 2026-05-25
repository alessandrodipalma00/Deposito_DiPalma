
// seleziono gli id
const nome = document.getElementById('nome');
const gioco = document.getElementById('gioco');
const piattaforma = document.getElementById('piattaforma');
const profilo = document.getElementById('profilo');
const body = document.body;

// al refresh della pagina si salva il tema ma non i dati, da rivedere 

function salvaDati(){

    // salviamo i dati con setItem
    localStorage.setItem('nomeGiocatore', nome.value);
    localStorage.setItem('giocoPreferito', gioco.value);
    localStorage.setItem('piattaformaPreferita', piattaforma.value);

    mostraDati()

    // mi svuota il form
    document.querySelector('.form').reset();
}

function mostraDati(){
    // recupero i dati salvati con getItem
    const n = localStorage.getItem('nomeGiocatore');
    const g = localStorage.getItem('giocoPreferito');
    const p = localStorage.getItem('piattaformaPreferita');

    if (n || g || p) {
    profilo.innerHTML = `
      <h3>Profilo Giocatore</h3>
      <p><strong>Nome:</strong> ${n}</p>
      <p><strong>Gioco:</strong> ${g}</p>
      <p><strong>Piattaforma:</strong> ${p}</p>
    `;
  }
}

function cancellaDati(){
    // cancella tutti i dati.
    localStorage.clear();
    profilo.innerHTML= '';
}


const temaSalvato = localStorage.getItem("tema");

if (temaSalvato === "light") {
    body.classList.add("light");

}


// Cambio tema

 function cambiaTema() {

    // usiamo il toggle per attivarlo
    body.classList.toggle("light");


    // Salvataggio stato tema

    if (body.classList.contains("light")) {
    localStorage.setItem("tema", "light");
    } else {
        localStorage.setItem("tema", "dark");
    }

};






