/**
 * e) bonus
 * Vytvor funkci, ktere predas pole, a cislo indexu (pozice v poli).
 * Funkce nahradi v prvek v poli na indexu za slovo “Czechitas”.
 * 
 * let vysledek = nahrad([5,6,7,0], 2) // [5,6,"Czechitas", 0]
 */


function nahrad(array, index) {
    let nahrada = "Czechitas";
    array[index] = nahrada;
    return array;
}
let vysledek = nahrad([5, 6, 7, 0], 2);
console.log(vysledek);

/**
 * e) bonus -- dva
 * Vytvor funkci, ktere predas pole, a cislo indexu (pozice v poli).
 * Funkce nahradi v prvek v poli na indexu za slovo “Czechitas”.
 * Parametrizuj text nahrazeno prvku.
 *
 * let vysledek = nahrad([5,6,7,0], 2, "lopata") // [5,6,"lopata", 0]
 */
