// snack 1a 
var Palla = {
    nome: 'palla',
    peso: 10
}

// snack 1b Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
var nuovoPeso = parseInt(prompt('Inserisci il peso della palla'));

Palla.peso = nuovoPeso;
console.log(Palla);