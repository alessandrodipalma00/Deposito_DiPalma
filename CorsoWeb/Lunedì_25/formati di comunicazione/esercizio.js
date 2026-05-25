let nome = document.getElementById('nome');
let prezzo = document.getElementById('prezzo');
let categoria = document.getElementById('categoria');
let eta = document.getElementById('eta');
let disponibile = document.getElementById('disponibile');

let salva =document.getElementById('salva');
let mostra = document.getElementById('mostra');

let lista = document.getElementById('lista');
let riepilogo = document.getElementById('riepilogo');

if(salva){
salva.addEventListener('click', function(){
    if (
        nome.value.trim() === "" ||
        categoria.value.trim() === "" ||
        prezzo.value === "" ||
        eta.value === ""
        ) {
            alert("Compila tutti i campi");
            return;
        }

    let giocattolo = {
        nome: nome.value,
        categoria: categoria.value,
        prezzo: parseFloat(prezzo.value),
        eta: Number(eta.value),
        disponibile: disponibile.value
    };

    let datiSalvati = localStorage.getItem('giocattoli');

    let giocattoli;

    if(datiSalvati === null){
        giocattoli =[];
    } else{
        giocattoli = JSON.parse(datiSalvati);
    }

    giocattoli.push(giocattolo);



    let datiJSON = JSON.stringify(giocattoli);

    localStorage.setItem('giocattoli', datiJSON);

    nome.value = '';
    categoria.value = '';
    prezzo.value = '';
    eta.value = '';
    disponibile.value = 'si';

    alert('Giocattolo salvato');

});

};

if(mostra){
mostra.addEventListener('click', function(){
    lista.innerHTML = '';

    let datiSalvati = localStorage.getItem('giocattoli');

    if(datiSalvati === null){
        lista.innerHTML = "<li>Nessun giocattolo salvato</li>";
        riepilogo.innerHTML = '';
        return;
    }

    let giocattoli = JSON.parse(datiSalvati);

    let sommaPrezzi = 0;
    let nonDisponibili = 0;
    let categorie =[];

    for(let i=0; i < giocattoli.length; i++){

        let g= giocattoli[i];

        let elemento = document.createElement('li');

        elemento.innerHTML = g.nome + " - " + g.categoria + " - " + g.prezzo + "€ - età " + g.eta + " - disponibile: " + g.disponibile;

        lista.appendChild(elemento);

        sommaPrezzi += g.prezzo;

        if(g.disponibile === 'no'){
            nonDisponibili++;
        }

        if(categorie.includes(g.categoria) === false){
            categorie.push(g.categoria);
        }
    }



    let prezzoMedio = sommaPrezzi / giocattoli.length;

    riepilogo.innerHTML = 'Totale giocattoli: ' + giocattoli.length + '<br>'
    + 'Categorie; ' + categorie.join(',') + '<br>' + 
    'Prezzo medio: ' + prezzoMedio + '€<br>' + 
    'Prodotti non disponibili:' + nonDisponibili;



});

}



