// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var n = Number(prompt('numero'));

for (var i = 0; i < n; i++) {
    console.log(Math.pow(n, 3));
}