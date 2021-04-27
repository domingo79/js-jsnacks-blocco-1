// L’utente inserisce due parole in successione, con due prompt.
var parola_1 = prompt('inserisci una parola');
var parola_2 = prompt('inserisci un\'altra parola');


// Il software stampa prima la parola più corta, poi la parola più lunga.
if (parola_1 > parola_2) {
    console.log(parola_1 + ' ' + parola_2);
} else if (parola_2 > parola_1) {
    console.log(parola_2 + ' ' + parola_1);
} else {
    console.log('sembrano uguali');
}
