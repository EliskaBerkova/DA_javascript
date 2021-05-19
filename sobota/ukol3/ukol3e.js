/** 
 * 3e)
 * Vytvor funkci, ktere predas jmeno a prijmeni a ona vrati objekt
 * s klici jmeno a prijmeni. 
 * 
 * let vysledek = vytvorOsobu("Tomas", "Jahoda")
 * console.log(vysledek); // {jmeno: "Tomas", prijmeni: "Jahoda"}
 */
// verze1

// function vytvorOsobu(jmeno, prijmeni) {
//    let osoba = {};
//     osoba.jmeno = jmeno;
//     osoba.prijmeni = prijmeni;
//     return osoba;
// }
// let vysledek = vytvorOsobu("Tomas", "Jahoda");
// console.log(vysledek);

// verze2

function vytvorOsobu(jmeno, prijmeni) {
    let osoba = {};
    osoba = { jmeno, prijmeni }
    return osoba
}
let vysledek = vytvorOsobu("Tomas", "Jahoda");
console.log(vysledek);

