/**
 * Ukol 2a) Definuj si dve promene, prirad jim nahodne cisla.
 * Vypis na obrazovku jestli cislo X je mensi jako cislo y. 
 * Pouzij IF ELSE
 * 
 * let x = 5;
 * let y = 4;
 * Vysledek: 5 je vetsin nez 4
 * 
 * let x = 2;
 * let y = 7;
 * Vysledek: 2 je mensi nez 7
 */

let x = 12;
let y = 8;
// if (x > y) {
//     console.log(`Vysledek: ${x} je vetsi nez ${y}`);
// } else {
//     console.log(`Vysledek: ${x} je mensi nez ${y}`)
// }



/**
 * 2b) Uprav reseni tak aby v pripade stejnych cisel vypsal ze jsou stejna
 * let x = 5;
 * let y = 5;
 * Vysledek: 5 je stejne jako 5
 */
if (x > y) {
    console.log(`Vysledek: ${x} je vetsi nez ${y}`);
} else if (x === y) {
    console.log(`Vysledek: ${x} je stejne jako ${y}`);
} else {
    console.log(`Vysledek: ${x} je mensi nez ${y}`);
}
