const http = require('http');
// importa il file gestionetesto
const funzioni = require('./GestioneTesto');

//  definisco il prompt
const prompt = require("prompt-sync")();
// utilizzo il prompt
const frase = prompt('Scrivi una frase: ');


// // stampo il testo originale
// console.log(frase);
// // utilizzo le tre funzioni importate
// console.log('Maiuscolo:', funzioni.maiuscolo(frase));
// console.log('Numero caratteri: ', funzioni.conta(frase));
// console.log("Contiene la lettera 'a'?", funzioni.lettere(frase, 'a'));

const server = http.createServer((req,res) => {
    res.writeHead()
})