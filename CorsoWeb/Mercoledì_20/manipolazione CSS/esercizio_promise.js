let button = document.getElementById('btn');
let output = document.getElementById('output');


// definisco una promise che simula una richiesta asincrona
function caricaDatiUtente(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({  // qui carico i dati dell'utente
                nome : 'alessandro',
                ruolo: 'studente',
                stato: 'online'
            });
        },2000);
    });
}

// ora utilizzo async/await
async function caricaDati(){
    output.textContent = 'Caricamento in corso...';

    // modifica classe CSS
    output.classList.remove('success');
    output.classList.add('caricamento');

    try{
        let utente = await caricaDatiUtente();

        output.innerHTML = 'Nome: ' + utente.nome + '<br>' +  // <br> consigliato dall'AI per mettere a capo e tenere i dati ordinati
                           'Ruolo: ' + utente.ruolo + '<br>' + 
                           'Stato: ' + utente.stato;


        output.classList.remove('caricamento');
        output.classList.add('success');

    } catch( errore){
        output.textContent = 'Errore nel caricamento dei dati';
    }
}
// utilizzo del bottone per caricare i dati dell'utente
button.addEventListener('click', caricaDati);
