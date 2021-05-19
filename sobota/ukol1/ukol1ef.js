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
function opakuj(a, b) {
    for (let i = 1; i <= b; i++) {
        console.log(a)
    }
}
opakuj("Czechitas", 3)