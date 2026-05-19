// creiamo un oggetto
let array =[];

let prodotto1 ={
    nome : 'penna',
    prezzo : 1,
    quantita : 10
};

let prodotto2= {
    nome: 'tonno',
    prezzo: 4,
    quantita : 20
}

let prodotto3 ={
    nome : 'detersivo',
    prezzo : 5,
    quantita : 6
}

array.push(prodotto1);
array.push(prodotto2);
array.push(prodotto3);

console.log(array);

// costruiamo le nostre function


// function per calcolare il valore totale del magazzino

function valoreTotale(prodotti){
    let totale = 0;

    for(let i=0; i< prodotti.length; i++){
        totale += prodotti[i].prezzo * prodotti[i].quantita
    }
    return totale;
}

console.log('Il valore totale del magazzino è: ',valoreTotale(array));

// function per trovare il prodotto con il prezzo più alto
function prezzoAlto(prodotti){
    let max = prodotti[0];

    for(let i= 1; i< prodotti.length; i++){
        if(prodotti[i].prezzo > max.prezzo){
            max = prodotti[i];
        }
    }
    return max;
}

console.log('Prodotto più costoso:', prezzoAlto(array));

// prodotti disponibili

function prodottiDisponibili(prodotti){
    let disponibili =[];

    for( let i=0; i<prodotti.length; i++){
        if(prodotti[i].quantita > 0) {
            disponibili.push(prodotti[i]);
        }
    }
    return disponibili;
}

console.log('Prodotti disponibili:', prodottiDisponibili(array));

function nomiprodotti(prodotti){
    let nomi =[];

    for( let i=0; i< array.length; i++){
        nomi.push(array[i].nome);
    }
    return nomi;


}

console.log('Nomi dei prodotti: ', nomiprodotti(array));

