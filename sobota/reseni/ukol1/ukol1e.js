/**
 * 1e)
 * Napis funkci stejne, ktera bude prijimat 2 parametry.
 * Funkce vrati boolean hodnotu (napoveda: pouzij if uvnitr funkce)
 * 
 * let vysledek = stejne(8,2)
 * console.log(vysledek); // false
 * 
 * let vysledek = stejne(8,8)
 * console.log(vysledek); // true
 * 
 * let vysledek = stejne("ahoj", "ahoj")
 * console.log(vysledek); // true
 */

function stejne(a, b){
    if( a == b){
        return true;
    } else {
        return false;
    }
}

let vysledek = stejne(4,5);
console.log(vysledek);


