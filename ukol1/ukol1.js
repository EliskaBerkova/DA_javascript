/**
 * 1a) Vypis na obrazovku "Ahoj Svete!"
 
 * 1aa) Text "Ahoj Svete!" si uloz do promene a vypis pouze tuto promenou. 
 */
let pozdrav = 'Ahoj svete';
console.log(pozdrav);

/**
 * 1b)
 * Definuj si dve promene a vypis si jejich soucet.
 * let x = 5;
 * let y = 7;
 *
 * Vysledek: 12
 *
 * 2bb) Vypis si jejich soucet i s textem.
 * Vysledek: "Soucet je 12"
 */
let x = 5;
let y = 7;
let vysledek = x + y;
console.log(vysledek);
console.log(`Soucet je ${vysledek}`);
/**
 * 1c)
 * Definuj si dve promene, prirad jim nahodne cisla.
 * Vypis na obrazovku vsechny aritmeticke operace mezi temito cisly.
 */
let a = 5;
let b = 9;
let soucet = a + b;
let rozdil = a - b;
let soucin = a * b;
let podil = a / b;

console.log(` Soucet je ${soucet}, rozdil je ${rozdil}, soucin je ${soucin}, podil je ${podil}`)