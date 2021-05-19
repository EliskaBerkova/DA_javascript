/**
 * Ukol 2d)
 * Deti(osoby mladsi 18 let) a duchodci (osoby starsi 65 let) maji vstup zdarma.
 * 
 * Vytvor si promneou vek, a vypis jestli je vstup povolen. Pouzij logicky operator ||
 * 
 * let vek = 15; // vysledek: Vstup zdarma
 * let vek = 45; // vysledek: Placene vstupne
 * let vek = 75; // vysledek: Vstup zdarma
 */

let vek = 15;
if (vek < 18 || vek > 65) {
    console.log('Vstup zdarma');
} else {
    console.log('Placene vstupne');
}
