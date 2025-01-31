//
var proizvodi = ["audi", "mercedes", "BMW"];
console.log(proizvodi[0], proizvodi[1], proizvodi[2]);

// for petlje , while petlje , foreach

for (var jedanProizvod in proizvodi) {
	console.log(jedanProizvod, proizvodi[jedanProizvod]);
}

// testiranje

var brojJedan = 1;

//  var proizvod = 0;
//  proizvodi[proizvod];
//  var proizvod = 1;
//  proizvodi[proizvod];
//  var proizvod = 2;
//  proizvodi[proizvod];

var komponente = ["Maticna ploca", "Ram memorija", "Graficka kartica"];

for (var proizvod in komponente) {
	console.log(komponente[proizvod]);
	document.getElementById("vezba").innerHTML += komponente[proizvod];
}

// ispisivanje podataka u html-u

document.getElementById("listaKomponenata").innerHTML = "pozdrav";
document.getElementById("listaKomponenata").innerHTML += " Milos";

//
console.log("Current time is " Date());