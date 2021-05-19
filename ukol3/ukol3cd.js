/**
 * 3c) Pomoci cyklu for vypis cisla 0-4 korme cisla 2 (Napoveda: pouzij if)
 * 
 * Vysledek:
 * 0
 * 1
 * 3
 * 4
 */
for (let i = 0; i < 5; i += 1) {
    if (i != 2) {
        console.log(i);
    }
}


/**
 * 3d) Pomoci extra promene spocitej kolikrat cyklus probehl a po skonceni cyklus
 * vypis na obrazovku pocet iteraci.
 * Vysledek:
 * Cyklus probehl: 5
 */
let n = 0;
for (let i = 0; i < 5; i += 1) {
    n += 1;
}
console.log(`Cyklus probehl: ${n}`);