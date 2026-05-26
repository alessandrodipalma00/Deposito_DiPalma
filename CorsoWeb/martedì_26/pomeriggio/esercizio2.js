const http = require('http');
const fs = require('fs');
const prompt = require("prompt-sync")();

let scelta = prompt('Scegli: a b c\n ');

let file;

if (scelta === 'a'){
    file = 'home.html';
} else if(scelta === 'b'){
    file = 'info.html';
} else if(scelta === 'c'){
    file = 'calcolatrice.html';
} else{
    console.log('Scelta non valida!');
    return;
}


const server = http.createServer((req,res) => {
    // serve a dire se il browser sta chiedendo il file calcolatrice.js allora invia il file js
    // su questo pezzo mi sono fatto aiutare dall'AI
    if (req.url === "/calcolatrice.js") {

        const js = fs.readFileSync("calcolatrice.js", "utf8");

        res.writeHead(200, {'Content-Type': 'text/javascript'});

        res.write(js);
        res.end();

    } else{

    const contenuto = fs.readFileSync(file, 'utf8');

    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write(contenuto);
    res.end();
    }
});

server.listen(3000, () => {

    console.log("Server avviato su http://localhost:3000");

});