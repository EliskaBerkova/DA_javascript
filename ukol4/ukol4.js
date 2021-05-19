/**
 * Ukol 4a
 * 
 * Vytvor pole obsahujici jmena Jana, Pavla, Klara a vypis jej 
 * na obrazovku.
 * 
 * Vysledek: ["Jana", "Pavla", "Klara"]
 */
let jmena = ["Jana", "Pavla", "Klara"];
// console.log(jmena);

/**
 * Ukol 4b
 * Vypis pouze prvek na druhe pozici.
 *
 * Vysledek: Pavla
 */

// let druheJmeno = jmena[1];
// console.log(druheJmeno);

/**
 * Ukol 4c
 * Vypis delku pole.
 *
 * Vysledek: 3
 */
let delkaPole = jmena.length
console.log(delkaPole)


/**
 * Ukol 4d
 * Pridej do pole jmeno Veronika(funkce push) a vypis delku pole
 * pred a po pridani.
 *
 * Vysledek:
 * ["Jana", "Pavla", "Klara"]
 * 3
 * ["Jana", "Pavla", "Klara","Veronika"]
 * 4
 */

console.log(jmena);
let dalsiJmeno = "Veronika";
jmena.push(dalsiJmeno);
console.log(jmena);
