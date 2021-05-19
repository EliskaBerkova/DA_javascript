/**
 * 1c)
 * Napis funkci soucet, ktera bude prijimat 2 parametry. 
 * Funkce vrati soucet techto 2 parametru.
 * 
 * Priklad:
 * let vysledek = soucet(3,4);
 * console.log(vysledek); // vypise 7
 */

function soucet(a, b){
    // Mohl bych rovnou udelat //return a + b;
    // a nebo
    let vysledekSouctu = a + b;
    return vysledekSouctu;
}

let vysledek = soucet(4,5);
console.log(vysledek);

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

 function vetsi(a, b){
    if(a > b){
        return a; 
    } else {
        return b;
    }
}

let coJeVetsi = vetsi(8,1);
console.log(coJeVetsi);