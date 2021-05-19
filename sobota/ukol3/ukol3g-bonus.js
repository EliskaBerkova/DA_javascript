/**
 * Uprav predchozi funkci vytvorOsobu tak, ze ji predas
 * rok narozeni a ona vypocita  a pridat vek. (neres mesice, jen roky
 * aktulani rok 2021 muzes definovat "natvrdo")
 * 
 * console.log(vytvorOsobu("Tomas", "Zidlicka", 1999))
 * // {jmeno: "Tomas", prijmeni: "Zidlicka", vek: 22, datumNarozeni: 1999}
 * 
 */

function vytvorOsobu(jmeno, prijmeni, rokNarozeni) {
    let osoba = {};
    let aktualniRok = 2021;
    osoba.jmeno = jmeno;
    osoba.prijmeni = prijmeni;
    osoba.vek = aktualniRok - rokNarozeni;
    osoba.datumNarozeni = rokNarozeni;
    return osoba;
}
let vysledek = vytvorOsobu("Tomas", "Zidlicka", 1999);
console.log(vysledek);