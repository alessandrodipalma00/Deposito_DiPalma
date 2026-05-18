const prompt = require('prompt-sync')();
// definisco l'array vuoto
let numeri = [];

let inserisci = true;



do {
     let numero = Number(prompt('Inserisci un valore(se inserisci lo 0 termini): '));
    
    if (numero === 0){
        inserisci = false;

    } else{
        numeri.push(numero); // se è diverso da 0 lo inserisci nell'array
    }

} while(inserisci);


console.log(numeri);

// creiamo due array vuoti dove in uno inseriremo gli elementi pari in un altro tutti i dispari
let array_pari =[];
let array_dispari =[];

for (let valori of numeri){
    if (valori % 2 == 0){
        array_pari.push(valori);
    } else{
        array_dispari.push(valori);
    }
}

console.log('In questo array ci sono solo numeri pari',array_pari);
console.log('In questo array ci sono solo numeri dispari',array_dispari);

// Controllo numerico su tutti gli elementi
for (let i = 0; i < numeri.length; i++) {

// Se il valore non è numerico
if (isNaN(numeri[i])) {

console.log(nuemri[i] + " NON è un numero");

} else {

console.log(numeri[i] + " è un numero");

}

}

// calcoliamo la somma totale di tutti i numeri inseriti
// definiamo una variabile che dovrà contenere la somma di tutti gli elementi

let somma = 0;

for (let i=0; i< numeri.length; i++){
    somma = somma + numeri[i]
}

console.log('La somma di tutti gli elementi è: '+ somma);

// determiniamo il valore massimo e minimo nell'array
// definiamo due variabili e gli diamo come valore massimo e minimo il primo elemento per andarlo poi a confrontarlo con gli altri

let massimo = numeri[0];
let minimo = numeri[0];

for (let i = 1; i < numeri.length; i++) {
    if (numeri[i] > massimo) {
        massimo = numeri[i];
    }

    if (numeri[i] < minimo) {
        minimo = numeri[i];
    }
}

console.log('Il massimo è: '+ massimo);
console.log('Il minimo è: '+ minimo);

// costruire array di un array
let array_di_array = [[], []];

let nome = prompt('Inserisci una stringa: ');
let intero = Number(prompt('Inserisci un numero:'));


array_di_array[0].push(nome);
array_di_array[1].push(intero);

console.log('Stringhe:', array_di_array[0]);
console.log('Numeri:', array_di_array[1]);

console. log(array_di_array);
// funziona solo quando nell'array intero inserisco un solo numero, se ne inserisco di più mi da NaN, da risolvere





