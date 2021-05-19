/**
 * 1g) bonus
 * 
 * Napis funkci superPole(), ktere prijme cislo X a
 * vrati pole plne cisel 0 - X (1 az X)
 * 
 * let vysledek = superPole(5);
 * console.log(vysledek); // [0,1,2,3,4]
 */

// function superPole(x) {
// let pole = [];
// for (let i = 0; i < x; i++) {
//     pole.push(i)

// } return pole
// }
// let vysledek = superPole(9);
// console.log(vysledek);

/**
 * 1gg)
 * Uprav funkci, tak at prijima 2 cisla.
 * Prvni urci zacatek cisel, druhe urci pocet cisel v poli.
 *
 * let vysledek = superPole(5,3);
 * console.log(vysledek); // [5,6,7]
 */
function superPole(x, y) {
    let pole = [];
    let rozsahPole = x + y;
    for (let i = x; i < rozsahPole; i++) {
        pole.push(i)

    } return pole
}
let vysledek = superPole(5, 5);
console.log(vysledek);