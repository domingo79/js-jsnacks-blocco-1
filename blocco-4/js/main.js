// snack 1a 
var Palla = {
    nome: 'palla',
    peso: 10
}

// snack 1b Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
var nuovoPeso = parseInt(prompt('Inserisci il peso della palla'));
//console.log(nuovoPeso);
Palla.peso = nuovoPeso;
//console.log(Palla);

//Creare un oggetto che rappresenti un triangolo rettangolo, 
//con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.

var Triangolo = {
    base: 20,
    altezza: 15,
}
Triangolo.area = (Triangolo.base * Triangolo.altezza) / 2;
Triangolo.ipotenusa = Math.sqrt(Math.pow(Triangolo.base, 2) + Math.pow(Triangolo.altezza, 2));
Triangolo.perimetro = Triangolo.base + Triangolo.altezza + Triangolo.ipotenusa;

console.log(Triangolo);