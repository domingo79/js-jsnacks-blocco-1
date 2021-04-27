// ISTRUZIONI:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. (modificato) 


var somma = 0;

for (var i = 0; i < 10; i++) {
    var numeri = Number(prompt('inserisci DIECI numeri, di darò la somma..'));
    somma += numeri
}
console.log(somma);