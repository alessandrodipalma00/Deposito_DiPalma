const bottoni = document.querySelectorAll('button');

bottoni.forEach(function(btn){
    btn.addEventListener('click', function(){
        const card =btn.parentElement  // parentElement risale al genitore di un elemento HTML nel DOM (consigliato da AI)

        const nomeCane = card.querySelector('h3').textContent;
        // l'alert mi dice in base a che bottone schiaccio quale cane ho adottato
        alert('Hai scelto di adottare ' + nomeCane);
    });
});

const form = document.querySelector(".form-registrazione");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Prendo i valori dei campi
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const password = document.getElementById("password").value;
    const conferma = document.getElementById("conferma").value;

    // controllo password uguali
    if (password !== conferma) {
        alert("Le password non coincidono!");
        return;
    }

    // controllo lunghezza password
    if (password.length < 6) {
        alert("La password deve contenere almeno 6 caratteri.");
        return;
    }

    // controllo la lunghezza del numero di telefono
    if (telefono.length < 8) {
        alert("Inserisci un numero di telefono valido.");
        return;
    }

    // Messaggio di successo
    alert("Registrazione completata!\nBenvenuto " + nome + " " + cognome +
          "\nOra puoi iniziare il percorso di adozione");

    // Reset del form
    form.reset();
});