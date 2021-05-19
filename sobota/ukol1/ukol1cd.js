/**
 * 1c)
 * Napis funkci soucet, ktera bude prijimat 2 parametry. 
 * Funkce vrati soucet techto 2 parametru.
 * 
 * Priklad:
 * let vysledek = soucet(3,4);
 * console.log(vysledek); // vypise 7
 */

// function soucet(a, b) {
//     let c = a + b;
//     return c;
// }
// let vysledek = soucet(3, 4);
// console.log(vysledek);


/**
 * Napis funkci vetsi, ktera bude prijimat 2 parametry.
 * Funkce vrati vetsi z techto dvou parametru (napoveda: pouzij if)
 *
 * let vysledek = vetsi(2,4);
 * console.log(vysledek); // 4
 *
 * let vysledek = vetsi(8,1);
 * console.log(vysledek);  // 8
 *
 */

function vetsi(x, y) {
    if (x > y) {
        return x;
    } else if (x === y) {
        return "Cisla jsou stejna";
    } else {
        return y;
    }
}
let vysledek = vetsi(8, 8);
console.log(vysledek);