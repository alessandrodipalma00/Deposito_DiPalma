
// seleziono gli elementi tramite il loro id
let titolo = document.getElementById('titolo');

let testo = document.getElementById('testo');

let box = document.getElementById('box');

let lista = document.getElementById('lista');

let input = document.getElementById('nome');

let bottoneCrea = document.getElementById('bottoneCrea');

let bottoneModifica = document.getElementById('bottoneModifica');

let bottoneElimina = document.getElementById('bottoneElimina');


bottoneCrea.addEventListener('click', function(){
    //leggo il valore scritto nell'input
    let nome = input.value; 
    // controllo che il campo non sia vuoto
    if(nome.trim() !== ''){
        // crea un elemento da mettere nella lista
        let nuovoElemento = document.createElement('li');
        // inserisco il testo nel nuovo elemento
        nuovoElemento.textContent = nome;
        // aggiungo l'elemento alla lista
        lista.appendChild(nuovoElemento);
        // svuoto l'input
        input.value = '';
    } else{
        console.log('Inserisci un elemento valido!')
    }
});

bottoneModifica.addEventListener('click', function(){
    // modifico il testo del titolo
    titolo.textContent = 'Titolo modificato!';
});

bottoneElimina.addEventListener('click', function(){
    // elimino l'ultimo elemento della lista
    if(lista.lastElementChild){
        lista.lastElementChild.remove();
    } else {
        console.log('La lista è già vuota');
    }
});

// seleziono i bottoni per il CSS tramite il loro id
let cambiaColore = document.getElementById('cambiaColore');

let cambiaSfondo = document.getElementById('cambiaSfondo');

cambiaColore.addEventListener('click', function(){
    // cambio colore al titolo 
    titolo.style.color = 'blue';
});

cambiaSfondo.addEventListener('click', function(){
    // aggiungi uno sfondo al div e ci crea un bordo nero attorno
    box.style.backgroundColor = 'lightblue';
     box.style.border = '2px solid black';
});

let DimTesto = document.getElementById('DimTesto');
    // aumento la dimensione del paragrafo <p>
DimTesto.addEventListener('click', function(){
    testo.style.fontSize = "30px";
});

let nascondi = document.getElementById('nascondi');
let mostra = document.getElementById('mostra');

nascondi.addEventListener('click', function(){
    // nascondo il testo
    testo.style.visibility = 'hidden';
});

mostra.addEventListener('click', function(){
    // riappare il testo
    testo.style.visibility = 'visible';
});

