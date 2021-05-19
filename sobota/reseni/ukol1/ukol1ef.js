/**
 * Napis funkci opakuj. Bude prijimat 2 parametry.
 * Text a cislo. Funkce vypise na obrazovku text tolikrat kolik specifikuje cislo.
 * (napoveda: pouzij for cyklus uvnitr funkce)
 * 
 * Ukazka:
 * opakuj("Czechitas", 3);
 * // vypise:
 * Czechitas
 * Czechitas
 * Czechitas
 * 
 */

function opakuj(text, opakovani){
    for(let i = 0; i < opakovani; i++){
        console.log(text)
    }
}

opakuj("Ahoj Czechitas", 3)