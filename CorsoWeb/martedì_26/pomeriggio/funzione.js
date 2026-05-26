const fs = require("fs");

// definisco la function mostraMessaggio con fs
function mostraMessaggio(tipofile){

    let file;

    if ( tipofile ==='html'){

        file = 'index2.html';

    } else if(tipofile === 'txt'){
        file = 'file.txt';

    } else{
        console.log('Tipo di file non valido!');
        return;
    }

    // lettura del file con fs, metti il risultato della scelta all'interno della variabile contenuto
    const contenuto = fs.readFileSync(file, 'utf8');
    
    return contenuto;

    
}

// esporto il modulo
module.exports = mostraMessaggio;