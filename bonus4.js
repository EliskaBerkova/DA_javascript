/*4. Mas tento kod
// tenhle blok vygeneruje pole o nahodne delce (v rozmezi 5-14) s hodnotami 1-100
// tyto radky si zkopiruj k sobe a pracuj s promennou numbers!
let numbers = [];
let delka = Math.ceil(Math.random() * 10) + 5
for (let i = 0; i < delka; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100))
}
*/

let numbers = [];
let delka = Math.ceil(Math.random() * 10) + 5
for (let i = 0; i < delka; i = i + 1) {
    numbers.push(Math.ceil(Math.random() * 100))
}
// a vypis: 
// a) cele pole, (obtiznost 1)
console.log(`Pole nahodne vygenerovanych cisel> ${numbers}`);

// b) delku pole (obtiznost 1)
console.log(`Delka pole: ${numbers.length}`);

// c) prvni prvek, (obtiznost 1)
console.log(`Prvni prvek pole: ${numbers[0]}`);

// d) posledni prvek, (obtiznost 1)
console.log(`Posledni prvek pole: ${numbers[numbers.length - 1]}`);

// e) nejvetsi cislo, (obtiznost 2)
console.log(`Nejvetsi cislo v poli: ${Math.max(...numbers)}`);

// f) nejmensi cislo, (obtiznost 2)
console.log(`Nejmensi cislo v poli: ${Math.min(...numbers)}`);

// g) soucet cisel, (obtiznost 2)
let soucet = 0;
for (let i = 0; i < delka; i++) {
    soucet += numbers[i]
}
console.log(`Soucet vsech cisel v poli je: ${soucet}`)

// h) rozdil nejvetsiho a nejmensiho cisla (obtiznost 3)
let rozdil = Math.max(...numbers) - Math.min(...numbers);
console.log(`Rozdil nejvetsiho a nejmensiho cisla pole je: ${rozdil}`)

// i) prumer vsech cisel v poli (obtiznost 3)
let prumer = soucet / delka;
console.log(`Prumer vsech cisel v poli: ${prumer}`)

// j) index nejvetsiho cisla v poli (obtiznost 2)
let indexNejvyssiho = numbers.indexOf(Math.max(...numbers))
console.log(`Index nejvetsiho cisla v poli: ${indexNejvyssiho}`);

// k) vypis suda cisla, pokud v poli zadne neni, vypis "Sude cislo nenalezeno!"  (obtiznost 3) // napoveda v threadu
let sudaCisla = [];
for (let i = 0; i < delka; i++) {
    if (numbers[i] % 2 === 0) {
        sudaCisla.push(numbers[i]);
    }
}
if (sudaCisla.length === 0) {
    console.log("Sude cislo nenalezeno!")
} else {
    console.log(`Suda cisla v poli: ${sudaCisla}`);
}

// l) vypis pole, ve kterem bude kazda hodnota vynasobena 2x. Takze z pole [1,2,3] -> [2,4,6]  (obtiznost 2)
let dvojnasobek = []
for (let i = 0; i < delka; i++) {
    dvojnasobek.push(numbers[i] * 2)
}
console.log(`Pole vynasobene dvema: ${dvojnasobek}`);

// m) pokud je v poli cislo mensi nez 10, vypis "Hele, v poli je prdola!"  (obtiznost 2)
let prdola = false
for (let i = 0; i < delka; i++) {
    if (numbers[i] < 10) {
        prdola = true
    }
}
if (prdola == true) {
    console.log("Hele, v poli je prdola!")
}

// n) vytvor nove pole (a vypis) a do nej vloz 2x dvojicky cisel. Takze z pole [1,2,3] -> [1,1,2,2,3,3]  (obtiznost 2)
let dvojiceCisel = [];
for (let i = 0; i < delka; i++) {
    dvojiceCisel.push(numbers[i]);
    dvojiceCisel.push(numbers[i]);
}
console.log(`Dvojice cisel z pole ${numbers} je pole ${dvojiceCisel}`)

// o) vytvor dve nova pole (a vypis) a do jednoho vloz jen suda cisla, a do druheho vloz licha cisla. A vypis  (obtiznost 4)
sudaCisla = [];
let lichaCisla = [];
for (let i = 0; i < delka; i++) {
    if (numbers[i] % 2 === 0) {
        sudaCisla.push(numbers[i]);
    } else {
        lichaCisla.push(numbers[i]);
    }
}
console.log(`Suda cisla: ${sudaCisla}`)
console.log(`Licha cisla: ${lichaCisla}`)
// p) Vsechno krasne s popisky vypis, aby bylo na prvni pohled jasne, co je co.  (obtiznost 1 ^^ kombinace vseho nadtim)