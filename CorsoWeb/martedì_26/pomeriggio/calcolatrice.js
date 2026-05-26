
let risultato = document.getElementById('risultato');

function somma(){
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);

    let somma = a+b;

    risultato.innerHTML = 'Risultato: ' + somma;

}

function prodotto(){
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);

    let prodotto = a*b;

    risultato.innerHTML = 'Risultato: ' + prodotto;

}

function differenza(){
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);

    let differenza = a-b;

    risultato.innerHTML = 'Risultato: ' + differenza;

}