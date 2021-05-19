/**
 * 1a)
 * Napis funkci predstaveni(), funkce vypise 3 radky textu. 
 * Funkce nebude prijimat zadny parametr. Zavolej funkci.
 * 
 * Vysledek:
 * 
 * predstaveni(); // zavolam funkci
 * // vypise na konzoli 3 radky
 * Ahoj
 * Moje jmeno je Tina
 * Jak se mas?
 */

function predstaveni() {
    console.log("Ahoj");
    console.log("Moje jmeno je Tina")
    console.log("Jak se mas?")
}

predstaveni();

/**
 * 1b)
 * Uprav funkci predstaveni, tak aby prijmala 1 parametr a to jmeno.
 * Nahrad jmeno ve vypisu timto parametrem.
 * 
 * Napriklad:
 * predstaveni("Petr");
 * // vypise
 * Ahoj
 * Moje jmeno je Petr
 * Jak se mas?
 */

 function predstaveni2(jmeno) {
    console.log("Ahoj");
    console.log("Moje jmeno je " + jmeno)
    console.log("Jak se mas?")
}

predstaveni2("Banan")