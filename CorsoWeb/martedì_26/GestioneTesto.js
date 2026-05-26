// creo le 3 funzioni richieste
// funzione che trasforma un testo in maiuscolo

function maiuscolo(testo){
    return testo.toUpperCase();
}

// esempio console.log(maiuscolo('ciao'));  CIAO

// funzione che conta il numero di caratteri di un testo
function conta(testo){
    return testo.length;
}

// funzione che controlla se una parola contiene una determinata lettera

function lettere(parola, lettera){
    return parola.includes(lettera);
    // ritorna true se la parola c'è, false altrimenti
}

module.exports = {
    maiuscolo,
    conta,
    lettere,
};