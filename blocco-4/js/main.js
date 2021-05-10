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
    b: 20,
    a: 15,
}
var a = 15;
var b = 20;
var aria = (b * a) / 2;
console.log(aria);
var c = (Math.sqrt(a)) + (Math.sqrt(b));
var perimetro = a + b + c;
console.log(perimetro);
