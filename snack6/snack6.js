// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var n = Number(prompt('numero'));

// n = Math.pow(n, 3)
console.log(n, typeof (n));

for (var i = 1; i <= 3; i++) {
    var cubo = n ** i;
    console.log((i), cubo);
}


