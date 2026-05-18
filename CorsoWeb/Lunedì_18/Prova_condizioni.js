// let eta = 18;

// if ( eta >= 18) {
//     console.log('Maggiorenne');
// } else {
//     console.log('Minorenne');
// }

// //Più condizioni
// let voto = 75;

// if (voto >= 90) {
//     console.log('Ottimo');
// } else if (voto >= 60) {
//     console.log('Sufficiente');
// } else {
//     console.log('Insufficiente');
// }


//variabili
let eta = 20;
let patente = true;
let abbonamento = false;

if( eta >= 18 && patente === true) {
    console.log('Puoi guidare auto');
}

if (eta < 18 || abbonamento === true) {
    console.log('hai uno sconto speciale');
}

if (!abbonamento) {
    console.log('Non hai abbonamento attivo');
}

// condizione più complessa ( arte delle condizioni)
if (eta >= 18 && patente || abbonamento) {
    console.log('Accesso consentito')
} else {
    console.log('Accesso negato')
}

// proviamo lo switch

// let giorno = 2;

// switch(giorno) {
//     case 1:
//         console.log('Lunedì');
//         break;
//     case 2:
//         console.log('Martedì')
//         break;
        
//     default:
//         console.log('Giorno non definito');
// }


let x = '5';
switch(x) {
    case 5 :
        console.log('numero');
        break;

    case('5'):
        console.log('stringa');
        break;
}

// fall-through (senza break)

let valore = 2;

switch(valore) {
    case 1:
        console.log('Uno');
    case 2:
        console.log('Due');
    case 3:
        console.log('Tre');
        break;
}


let giorno = 6;
switch(giorno) {
    case 6:
    case 7:
        console.log('Weekend');
        break;
    default:
        console.log('Giorno lavorativo')
}
