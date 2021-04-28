
// Chiedi un numero di 4 cifre all’utente
var n = prompt('numero di 4 cifre?');

// e calcola la somma di tutte le cifre che compongono il numero. (modificato) 
var somma = 0;
for (var i = 0; i < n.length; i++) {
    console.log(n[i]);
    somma = parseInt(somma) + parseInt(n[i]);
    console.log('ecco la somma: ' + somma);
}

