// Importa il modulo HTTP integrato di Node.js
const http = require("http");

// Crea il server
const server = http.createServer((req, res) => {

// Imposta il tipo di contenuto della risposta
res.writeHead(200 , { "Content-Type": "text/plain" });
// 200 vuol dire che va tutto bene, writeHead serve a dire che tipo di risposta deve arrivare. è la definizione della risposta

// Invia il testo al browser
// è la risposta effettiva
res.end("Hello World da Node.js!");
});

// Avvia il server sulla porta 3000
server.listen(3000, () => {
console.log("Server avviato su http://localhost:3000");
});

// ctrl + c per bloccare il terminale