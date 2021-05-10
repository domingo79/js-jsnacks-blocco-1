// snack 1a 
var Palla = {
    nome: 'palla',
    peso: 10
}

// snack 1b Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
//var nuovoPeso = parseInt(prompt('Inserisci il peso della palla'));
//console.log(nuovoPeso);
//Palla.peso = nuovoPeso;
//console.log(Palla);

//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.

var Triangolo = {
    base: 20,
    altezza: 15,
}
var a = 15;
var b = 20;

var aria = (b * a) / 2;
var c = (Math.pow(a, 2)) + (Math.pow(b, 2));
var perimetro = a + b + c;


console.log(perimetro);
console.log(aria);