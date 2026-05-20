let bottone = document.getElementById('btn');

let testo = document.getElementById('testo');

let bottoneElimina = document.getElementById('bottoneElimina')

bottone.addEventListener('click', function(){
    // aggiunge o rimuove la classe CSS
    testo.classList.toggle('evidenziato'); // classList insieme di tutte le classi
});

bottoneElimina.textContent = 'Elimina stile';

bottoneElimina.addEventListener('click', function(){
    testo.classList.remove('evidenziato');
});
        