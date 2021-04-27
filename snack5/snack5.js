// ISTRUZIONI:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. (modificato) 

var array = [];

for (var i = 0; i < 6; i++) {
    var numero = Number(prompt('inserisci SEI numeri casuali io ti creo un Array'));
    if (numero % 2 == 1) {
        array.push(numero);
    }
}

console.log(array);