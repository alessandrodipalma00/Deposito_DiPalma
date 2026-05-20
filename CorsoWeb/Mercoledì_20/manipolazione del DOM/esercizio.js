// seleziono gli elementi tramite id

let titolo = document.getElementById('titolo');

let testo = document.getElementById('testo');

let bottone = document.getElementById('bottone');

let lista = document.getElementById('lista');

let input = document.getElementById('nome');

bottone.addEventListener('click', function() {

    let nome = input.value; // leggere il valore scritto nell'input
    // controllo che il campo non sia vuoto
    if( nome.trim() !== ''){
        // creo un elemento nella lista
        let nuovoElemento = document.createElement('li');
        // inserisco il testo nel nuovo elemento
        nuovoElemento.textContent = nome;

        //2) extra collego al nuovo elemento la classe definita nel file css
        nuovoElemento.classList.toggle('cambiocolore');
        
        // 1) extra creao un bottone che elimina gli elementi della lista
        let bottoneElimina = document.createElement('button');
        bottoneElimina.textContent = 'Elimina';

        bottoneElimina.addEventListener('click', function(){
            nuovoElemento.remove();
        });
        // aggiungo il bottone alla lista
        nuovoElemento.appendChild(bottoneElimina);

        // aggiungo l'elemento nuovo alla lista
        lista.appendChild(nuovoElemento);
        // svuoto l'input
        input.value = '';

    } else {
        console.log('Inserisci un oggetto!')
    }

});

