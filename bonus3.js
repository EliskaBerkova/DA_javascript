3. Vloz vsechna suda cisla vetsi nez 0, mensi nez 100 do pole a pole vypis. (obtiznost 2)
Vysledek: 
[
  0,  2,  4,  6,  8, 10, 12, 14, 16, 18, 20,
 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64,
 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86,
 88, 90, 92, 94, 96, 98
]

let pole = [];
for (let i = 0; i < 100; i += 2) {
    pole.push(i);
}
console.log(pole);