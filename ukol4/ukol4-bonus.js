/**
 * 4) bonus 1
 * Najdi na kterem indexu se v poli nachazi jmeno Klara
 * za pouziti FOR cyklu! (nepouzivej funkci indexOf)
 * 
 * Vysledek:
 * ["Jana", "Pavla" "Klara"]
 * Klara je na indexu 2 
 */
// let jmena = ["Jana", "Pavla", "Klara", "Veronika"]
// for (let i = 0; i < jmena.length; i++) {
//     if (jmena[i] === 'Klara') {
//         console.log(i);
//     }
// }

/**
 * Pokud to tak nemas, uprav kod tak aby jmeno "Klara", ktere hledame
 * v poli, slo jednoduse nahradit za jine jmeno. Tj abychom mohli
 * jednoduse vyhledat jakekoliv jmeno v poli za zmeny jednoho radku.
 *
 * Zaroven vypis krome indexu i poradi.
 * Vysledek:
 * ["Jana", "Pavla" "Klara"]
 * Pavla je na indexu 1, poradi 2
 */
let jmena = ["Jana", "Pavla", "Klara", "Veronika"]
for (let i = 0; i < jmena.length; i++) {
    if (jmena[i] === 'Pavla') {
        console.log(i);
        console.log(`${jmena[i]} je na indexu ${i}, poradi ${i + 1}`)

    }
}
console.log(jmena)


// vypocet souctu a prumeru cisel z pole
let cisla = [5, 7, 6, 7, 12];
let soucet = 0;
let prumer = 0;
for (let i = 0; i < cisla.length; i++) {
    soucet += cisla[i]
    prumer = soucet / cisla.length

}
console.log(soucet)
console.log(prumer)