// L’utente inserisce due parole in successione, con due prompt.
var parola_1 = prompt('inserisci una parola');
var parola_2 = prompt('inserisci un\'altra parola');

//console.log(parola_1, parola_2);
// Il software stampa prima la parola più corta, poi la parola più lunga.
if (parola_1.length === parola_2.length) {
    console.log('Riprova sembrano uguali');
} else if (parola_1.length > parola_2.length) {
    console.log(parola_1 + ' ' + parola_2);
} else {
    console.log(parola_2 + ' ' + parola_1);
}
