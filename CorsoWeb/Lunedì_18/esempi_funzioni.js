function somma(a,b) {
    return a+b;
}

let risultato = somma(3,5);
console.log(risultato);

const moltiplica = function(a,b) {
    return a * b;
}

console.log(moltiplica(4,2));


// arrow function
const sottrai = (a,b) => a-b;

console.log(sottrai(10,3));

function saluta(nome){
    return 'ciao' + nome;
}

let messaggio = saluta(' Alessandro');
console.log(messaggio);