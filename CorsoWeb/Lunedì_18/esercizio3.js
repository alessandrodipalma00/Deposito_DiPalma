const prompt = require('prompt-sync')();
let controllore = true;

do {






    // variabile input
    let N = prompt('Inserisci un numero positivo N: ');

    // pongo le variabili pari e dispari uguale a 0 per iniziare a contare
    let pari = 0;
    let dispari = 0;

    if (N <= 0){
        console.log('Inserisci un numero intero valido.');

    }
    // ciclo for

    for(let i=1; i<= N; i++) {
        if ( i % 2 === 0){
            pari++;
        } else {
            dispari++;
        }
    }

    // variante con il ciclo while

    // let i=1;

    // while(i<=N) {
    //     if ( i % 2 === 0) {
    //         pari++;
    //     } else {
    //         dispari++;
    //     }
    //     i++;
    // }



    console.log('Numeri pari trovati: ' + pari);
    console.log('Numeri dispari trovati: ' + dispari);

    let check = prompt('Vuoi continuare?');
    if(check ==='esci'){
        controllore = false;
    }

} while(controllore);
