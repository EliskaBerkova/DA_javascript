/**
 *  a)
 * Definuj promenou x, uloz do ni cislo. 
 * Pokud je cislo vetsi jak 10, tak do promene x uloz x * 10.
 * 
 * let x = 6;
 * // nejaky kod
 * console.log(x); // 6
 * 
 * let x = 12;
 * // nejaky kod
 * console.log(x); // 120
 */
// let x = 6;
// if (x > 10) {
//     x = x * 10;
// } else {
//     x = x;
// }
// console.log(x)

/**
 * b)
 * Stejne jako 2a) ale presun svuj kod, ktery meni cislo do funkce!
 * (Napoveda: funkce bude vracet hodnotu)
 */


// function porovnani(promenna) {
//     if (promenna > 10) {
//         return promenna * 10;
//     } else {
//         return promenna;
//     }
// }
// let vysledek = porovnani(6);
// console.log(vysledek);


/**
 * c)
 * Napis funkci vetsi, ktera bude prijimat 2 parametry.
 * Funkce VRATI vetsi z techto dvou parametru (napoveda: pouzij if)
 * MUZES POUZIT JEN 1X RETURN  || POKUD SI POUZILA DRIVE 1X RETURN POUZIJ JEJ VICEKRAT
 *
 * UVNITR FUNKCE NENI ZADNY CONSOLE.LOG
 *
 * Ukazka:
 * let vysledek = vetsi(2,4);
 * console.log(vysledek); // 4
 */

function vetsi(parametr1, parametr2) {
    let vyssiCislo;
    if (parametr1 > parametr2) {
        vyssiCislo = parametr1;
    } else {
        vyssiCislo = parametr2;
    } return vyssiCislo;
}
let vysledek = vetsi(2, 4);
console.log(vysledek);
