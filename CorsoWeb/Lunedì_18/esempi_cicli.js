// ciclo for

for (let i=0; i<3; i++) {
    console.log(i); //0,1,2
}

// ciclo while
// let i=0;

// while (i < 3) {
//     console.log(i);
//     i++;
// }

// ciclo do-while

 let i = 4

 do {
    console.log(i);  // lo esegue almeno una volta
    i++;
} while( i<3);

// esempio di while con uscita tramite input utente

//modulo per input da console
const prompt = require('prompt-sync')();

// variabile booleana
let attivo = true;

while(attivo) {

    //input utente
    let comando = prompt( 'scrivi qualcosa(digita esci per terminare):');

    if (comando === 'esci') {
        console.log('programma terminato.');
        attivo = false;

    } else {
        console.log('Hai scritto ' + comando);
    }
}
