const prompt = require('prompt-sync')();


let array_finale=[]; // definisco l'array vuoto dove andare a mettere le parole finali
let parole;

do{

     parole = prompt('Quante parole vuoi inserire?');

} while(parole <= 0);

for(let i=0; i< parole; i++ ){

    let inserimento = prompt('Inserisci una parola(scrivi fine per terminare):');

    if(inserimento === 'fine'){
        break;
    }

    if(parolavalida(inserimento)){
        array_finale.push(inserimento);
    }

}


// scriviamo le function
function parolavalida(parola){
    return parola !== null;
}

function contaParole(array){
    return array.length;
}



function parolaLunga(array){
    let max = array[0];
    for (let i=1; i<array.length; i++){
        if(array[i].length > max.length){
            max = array[i];
        }
    }
    return max;
}

function parolaCorta(array){
    let min = array[0];
    for(let i=1; i< array.length; i++){
        if(array[i].length < min.length){
            min = array[i];
        }
    }
    return min;

}

function Maiuscolo(array){
    let risultato =[];

    for(let i=0; i<array.length; i++){
        risultato.push(array[i].toUpperCase());
    }
    return risultato;
}

let paroleMaiuscole= Maiuscolo(array_finale);



// stampiamo tutti i risultati 
console.log(array_finale);  
console.log('Numero di parole inserite:', contaParole(array_finale));
console.log('Parola più lunga:', parolaLunga(array_finale));
console.log('Parola più corta:', parolaCorta(array_finale));
console.log(paroleMaiuscole);

// manca la parte di contare quante parole iniziano con una vocale

