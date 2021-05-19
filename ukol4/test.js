/*Zakomentuj si predchozi kod 
Vytvor promenou kostka s timto kodem: Math.floor(Math.random()*6+1)
Vypis “Czechitas je nejlepsi” tolikrat, kolikrat jsi hodila na kostce


BONUS: Vypis jestli je sude nebo liche a hodnotu tohoto cisla. 
*/
let kostka = Math.floor(Math.random() * 6 + 1);
for (let i = 1; i <= kostka; i++) {
    console.log('Czechitas je nejlepsi');
}
console.log(`Cislo na kostce je: ${kostka}`);
if (kostka % 2 == 0) {
    console.log(`Cislo je sude`)
} else { `Cislo je liche` };