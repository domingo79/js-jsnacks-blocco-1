// snack 1a 
var Palla = {
    nome: 'palla',
    peso: 10
}

// snack 1b Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
var modPeso = parseInt(prompt('Inserisci il peso'));

Palla.push({ peso: modPeso });