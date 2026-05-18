// let numeri =[1,2,3];

// // accesso agli elementi
// console.log(numeri[0]); // 1

// // aggiunta elementi
// numeri.push(4); // aggiunge in fondo [1,2,3,4]
// numeri.unshift(0); // aggiunge all'inizio [0,1,2,3,4]

// //rimozione elementi
// numeri.pop();   // rimuove ultimo [0,1,2,3]
// numeri.shift(); // rimuovo primo [1,2,3]


// // Iterazione
// numeri.forEach(n => console.log(n));

// // Trasformazione
// let doppi = numeri.map(n => n * 2); // [2,4,6]

// // Filtro
// let maggioriDiUno = numeri.filter(n => n > 1); // [2,3]

// // Ricerca
// let trovato = numeri.find(n => n === 2); // 2

// // Lunghezza
// console.log(numeri.length); // 3

// let numeri =[10,20,30];

// for (let valori of numeri){
//     console.log(valori);
// }


let parola = "cane"

for(let lettera of parola) {
console.log(lettera);
}

let numeri =['10','20','30'];
for(let valore of numeri){
    console.log(valore);
}

let persona = {nome:'Mario', eta : 30};

for (let chiave in persona){
    console.log(chiave, persona[chiave]);
}



