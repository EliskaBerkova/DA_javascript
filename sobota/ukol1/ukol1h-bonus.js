/**
 * Napis funkci, ktera prijme 2 parametry, 
 * secte jejich absolutni hodnotu: 
 * secti(-4,5); // vrati 9
 */
// function secti(a, b) {
//     if (a < 0 && b < 0) {
//         a = a * -1;
//         b = b * -1;
//     } else if (a < 0) {
//         a = a * -1;
//     } else if (b < 0) {
//         b = b * -1;
//     }
//     let c = a + b;
//     return c
// }
// let vysledek = secti(-4, 5)
// console.log(vysledek)

//verze2
// function secti(a, b) {
//     let c = Math.abs(a) + Math.abs(b)
//     return c
// }
// let vysledek = secti(-4, 5)
// console.log(vysledek)

/**
 * Napis funkci, ktera prijme pole a prvek a vrati hodnotu true/false podle toho,
 * jestli se prvek v poli nachazi (Funkce indexOf vraci index a nebo -1 pokud prvek nenajde - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf):
 * zkontroluj([6,4,3], 3) // true
 * zkontroluj([6,4,3], 2) // false
 */
// moje verze
// function isInArray(array, number) {
//     if (array.indexOf(number) === -1) {
//         return false;
//     } else {
//         return true;
//     }
// }
// let vysledek = isInArray([6, 4, 3], 5)
// console.log(vysledek)


function isInArray(array, number) {
    return number in array
}
let vysledek = isInArray([6, 4, 3], 5)
console.log(vysledek)

/**
 * Napis funkci, prijme pole, index1,index2 a prehodi prvky v poli na techto indexech.
 * Vrati pole.
 * prehod([5,8,4,7], 1, 3) // [5,7,4,8]
 */
// function switchNumbers(array, index1, index2) {
//     let firstChange = array[index1];
//     let secondChange = array[index2];
//     let newArray = [];

// }
