//
let proizvodi = ["audi", "mercedes", "BMW"];
console.log(proizvodi[0], proizvodi[1], proizvodi[2]);


for (let jedanProizvod in proizvodi) {
	console.log(jedanProizvod, proizvodi[jedanProizvod]);
}

let brojJedan = 1;


let komponente = ["Maticna ploca", "Ram memorija", "Graficka kartica"];

for (let proizvod in komponente) {
	console.log(komponente[proizvod]);
	document.getElementById("vezba").innerHTML += komponente[proizvod];
}


document.getElementById("listaKomponenata").innerHTML = "pozdrav";
document.getElementById("listaKomponenata").innerHTML += " Milos";

//
console.log("Current time is " ,Date());