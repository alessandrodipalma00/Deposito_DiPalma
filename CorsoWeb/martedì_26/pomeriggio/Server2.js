const http = require('http');

// importo il modulo
const mostraMessaggio = require('./funzione');

const prompt = require("prompt-sync")();

let scelta = prompt('Scrivi html oppure txt: ');

if (scelta !== 'html' && scelta !== 'txt'){
    console.log('Scelta non valida');
    return;
}
// creazione del server
const server = http.createServer((req,res) =>{
    // richiamo la mia funzione e inserisco la scelta dentro la variabile contenuto
    const contenuto = mostraMessaggio(scelta);


    res.writeHead(200, {"Content-Type": scelta === 'html' ? 'text/html' : 'text/plain'});
    res.write(contenuto);
    res.end();
});

// Avvia il server

server.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");

});