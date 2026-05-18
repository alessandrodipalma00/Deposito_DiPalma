const prompt = require('prompt-sync')();

// mettiamo le variabili ruolo

let ruolo1 = '';
let ruolo2 = '';
let ruolo3= '';

ruolo1 = prompt('Inserisci primo ruolo: ');
ruolo2 = prompt('Inserisci secondo ruolo: ');
ruolo3 = prompt('Inserisci terzo ruolo: ');

//prima scelta

switch(ruolo1) {
    case 'player':
        console.log('Player: accedi al gioco.');
        break;

    case 'moderator':
        console.log('Moderatore : gestisci la chat.');
        break;

    case 'admin':
        console.log('Admin: controlla tutto');
        break;

    default:
        console.log('non esiste il ruolo.');
}

// seconda scelta

switch(ruolo2) {
    case 'player':
        console.log('Player: accedi al gioco.');
        break;

    case 'moderator':
        console.log('Moderatore : gestisci la chat.');
        break;

    case 'admin':
        console.log('Admin: controlla tutto');
        break;

    default:
        console.log('non esiste il ruolo.');
}

// terza scelta

switch(ruolo3) {
    case 'player':
        console.log('Player: accedi al gioco.');
        break;

    case 'moderator':
        console.log('Moderatore : gestisci la chat.');
        break;

    case 'admin':
        console.log('Admin: controlla tutto');
        break;

    default:
        console.log('non esiste il ruolo.');
}

// vediamo ora i casi combinati
if ((ruolo1 === 'player' || ruolo2 ==='player' || ruolo3 === 'player') 
    && (ruolo1 ==='moderator' || ruolo2 === 'moderator' || ruolo3 ==='moderator'))  {
        console.log('Hai sia player che moderatore');
    }

if(ruolo1 === 'admin' || ruolo2 ==='admin' || ruolo3 ==='admin'){
    console.log('Hai tutti i privilegi.')
    
}