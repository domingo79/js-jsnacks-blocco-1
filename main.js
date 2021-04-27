// L’utente inserisce due parole in successione, con due prompt.
// var parola_1 = prompt('inserisci una parola');
// var parola_2 = prompt('inserisci un\'altra parola');

//console.log(parola_1, parola_2);
// Il software stampa prima la parola più corta, poi la parola più lunga.
// if (parola_1.length === parola_2.length) {
//     console.log('Riprova sembrano uguali');
// } else if (parola_1.length > parola_2.length) {
//     console.log(parola_1 + ' ' + parola_2);
// } else {
//     console.log(parola_2 + ' ' + parola_1);
// }

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. (modificato) 
// var somma = 0;

// for (var i = 0; i < 10; i++) {
//     var numeri = Number(prompt('inserisci un numero'));
//     somma += numeri
// }
// console.log(somma);

// Snack 4:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome 
// e comunicagli se può partecipare o no alla festa. (modificato) 

// var lista_invitati = ['domenico', 'diego', 'rita', 'nunzia', 'eleonora', 'carmen', 'erika',];
// var nome_invitato = prompt('il tuo nome?');
// var invitato = false;

// for (var i = 0; i < lista_invitati.length; i++) {
//     var controllo_lista = lista_invitati[i];
//     if (nome_invitato == lista_invitati) {
//         invitato = true;
//         console.log('ben venuto ' + nome_invitato);
//     }
// }
// console.log('mi dispiace nn sei in lista');

// Snack 5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. (modificato) 
var array = [];

for (var i = 0; i < 6; i++) {
    var numero = Number(prompt('inserisci un numero'));
    if (numero % 2 == 1) {
        array.push(numero);
    }
}

console.log(array);