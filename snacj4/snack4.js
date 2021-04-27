// ISTRUZIONI:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome 
// e comunicagli se può partecipare o no alla festa. (modificato) 

var lista_invitati = ['domenico', 'diego', 'rita', 'nunzia', 'eleonora', 'carmen', 'erika'];
var nome_invitato = prompt('il tuo nome?');
var invitato = false;

for (var i = 0; i < lista_invitati.length; i++) {
    var controllo_lista = lista_invitati[i];
    if (controllo_lista == nome_invitato) {
        console.log('ben venuto ' + nome_invitato);
        invitato = true;
    }
}

if (invitato == false) {
    console.log('Mi dispiace non sei in lista');
}

