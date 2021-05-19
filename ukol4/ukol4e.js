/**
 * Ukol 4e
 * Odeber posledni prvke z pole. (pouzij funkci pop)
 * 
 * Vysledek:
 * ["Jana", "Pavla", "Klara","Veronika"]
 * ["Jana", "Pavla", "Klara"]
 */
let jmena = ["Jana", "Pavla", "Klara"];
console.log(jmena);
let dalsiJmeno = "Veronika";
jmena.push(dalsiJmeno);
console.log(jmena);
let posledni = jmena.pop()
console.log(jmena);

/**
 * Ukol 4f
 * Najdi na kterem prvku v poli se nachazi "Pavla" (pouzij .indexOf)
 *
 * Vysledek:
 * 1
 */
let pavlaIndex = jmena.indexOf("Pavla")
console.log(pavlaIndex)