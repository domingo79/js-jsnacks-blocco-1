
// Chiedi un numero di 4 cifre all’utente
var n = prompt('numero di 4 cifre?');


var userNumber = n.split(' ');

// e calcola la somma di tutte le cifre che compongono il numero. (modificato) 
var somma = 0;
for (var i = 0; i < userNumber.length; i++) {
    var ele = userNumber[i];
    somma += Number(ele);
}
console.log(somma);



