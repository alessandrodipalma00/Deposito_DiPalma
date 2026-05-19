const prompt = require("prompt-sync")();
// definiamo l'array vuoto
let array = [];

// definiamo una function che aggiungi i prodotti tramite prompt
function aggiungiProdotto() {

    let nome = prompt("Nome prodotto: ");

    let prezzo = Number(prompt("Prezzo prodotto: "));

    let quantita = Number(prompt("Quantità prodotto: "));


    if (
        nome.trim() === "" || //se la stringa è vuota o se il prezzo o le quantità non sono numeri il dato non è valido
        isNaN(prezzo) ||
        isNaN(quantita)
    ) {

        console.log("Dati non validi");

        return;
    }
    // andiamo a dare i dati del prodotto
     let prodotto = {

        nome: nome,
        prezzo: prezzo,
        quantita: quantita

    };
    // lo inseriamo nell'array
    array.push(prodotto);
}


// costruiamo le nostre function
function valoreTotale(prodotti){
    let totale = 0;

    for(let i=0; i< prodotti.length; i++){
        totale += prodotti[i].prezzo * prodotti[i].quantita
    }
    return totale;
}

// console.log('Il valore totale del magazzino è: ',valoreTotale(array));

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

// console.log('Prodotto più costoso:', prezzoAlto(array));

// prodotti disponibili

function prodottiDisponibili(prodotti){
    let disponibili =[];

    for( let i=0; i<prodotti.length; i++){
        if(prodotti[i].quantita > 0) {
            array[i].disponibile = true;
            disponibili.push(prodotti[i]);
        } else {
            array[i].disponibile = false;
        }
    }
    return disponibili;
}

// console.log('Prodotti disponibili:', prodottiDisponibili(array));

// function che mi restituisce un array dei soli nomi dei prodotti
function nomiprodotti(prodotti){
    let nomi =[];

    for( let i=0; i< array.length; i++){
        nomi.push(array[i].nome);
    }
    return nomi;


}


let scelta = '';
while(scelta !== 'esci'){
scelta = prompt("Scegli l'operazione che vuoi fare(per finire scrivi esci):");
     
    if(scelta === 'esci'){
        break;
    }

    switch(scelta){
        case '1':
            aggiungiProdotto();
            break;
        case '2':
            console.log(array);
            break;
        case '3':
            console.log('Valore totale del mercato è', valoreTotale(array));
            break;
        case '4':
             if(array.length ===0){
            console.log('Catalogo vuoto');
        }else {
        console.log('Il prodotto più costoso è:', prezzoAlto(array));
        break;
        }
        case '5':
           console.log('Prodotti disponibili', prodottiDisponibili(array)); 
           break;

        case '6':
             console.log(nomiprodotti(array));
             break;
        default:
            console.log('Scelta non valida');
            break;


    }

}
