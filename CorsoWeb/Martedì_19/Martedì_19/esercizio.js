// andiamo a creare l'array vuoto dove mettere i risultati alla fine
let array =[];

// definiamo le quattro funzioni

function addizione(a,b){
    return a+b;
}

function sottrazione(a,b){
    return a-b;
}

function moltiplicazione(a,b){
    return a*b;
}

function divisione(a,b){
    if (b === 0){
        return 'Errore'
    }
    return a / b;
}

const prompt = require('prompt-sync')();

// definisco la variabile per la scelta del menu
let scelta ='';

while(scelta !== 'esci'){
scelta = prompt("Scegli l'operazione che vuoi fare(per finire scrivi esci):");
     
    if(scelta === 'esci'){
        break;
    }


    // andiamo a definire le due variabili input
    let num1 = Number(prompt('Inserisci il primo numero:'));
    let num2 = Number(prompt('Inserisci il secondo numero:'));

    // definiamo la variabile dove metterci il risultato
    let risultato = 0;

    // utilizziamo lo switch per la scelta
    switch(scelta) {

        case 'addizione':
            risultato = addizione(num1,num2);
            console.log('La somma tra i due numeri è:', risultato);
            break;
            
        case 'sottrazione':
             risultato = sottrazione(num1,num2);
            console.log('La differenza tra i due numeri è:', risultato);
            break;

        case 'moltiplicazione':
             risultato = moltiplicazione(num1,num2);
            console.log('Il prodotto tra i due numeri è:', risultato);
            break;

        case 'divisione':
             risultato = divisione(num1,num2);
            console.log('Il rapporto tra i due numeri è:', risultato);
            break;

        default:
            console.log('Operazione non valida');
            break;
    }

    // andiamo ad inserire il risultato nell'array
    array.push(risultato);
    
}

// stampiamo l'array
console.log(array);
