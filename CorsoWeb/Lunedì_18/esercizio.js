
const prompt = require('prompt-sync')();

let menu ='';
let extra1 ='';
let extra2 ='';

menu = prompt('Scegli dal MENU: pizza, pasta,carne: ');

switch(menu) {

    case 'pizza':

        console.log('Hai scelto la pizza.');
        
        extra1 = prompt('Aggiungi condimento:');
        extra2 = prompt('Aggiungi un altro condimento:');

        console.log("Ordine finale:");
        console.log("Pizza con " + extra1 + " e " + extra2);
        break;

    case 'pasta':
        console.log('Pasta');
        extra1 = prompt('Aggiungi condimento:');
        extra2 = prompt('Aggiungi un altro condimento:');

        console.log("Ordine finale:");
        console.log("Pasta con " + extra1 + " e " + extra2);
        break;

    case 'carne':
        console.log('Carne');
        extra1 = prompt('Aggiungi condimento:');
        extra2 = prompt('Aggiungi un altro condimento:');

        console.log("Ordine finale:");
        console.log("Carne con " + extra1 + " e " + extra2);
        break;

    default:
        console.log('scelta non trovata nel menu');
}


