// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var n = Number(prompt('numero'));

var i = 0;
var condizione = true;

while (condizione) {
    console.log(Math.pow(n, 3));
    console.log('numeri ' + n + (i));
    i++;
    condizione = confirm('altro numero?')
}


