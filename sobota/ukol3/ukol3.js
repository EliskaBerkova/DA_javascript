/**
 * Ukol 3a)
 * Definuj objekt, ktery bude mit klice: jmeno, prijmeni, vek . 
 * Vypis objekt na consoli.
 * 
 * Vysledek:
 * console.log(mujObjekt); //{jmeno: "petr", prijmeni: "jahoda", vek: 98}  
 */
let mujObjekt = {
    jmeno: "petr",
    prijmeni: "jahoda",
    vek: 98
}
console.log(mujObjekt);

/**
 * Vypis pouze vek z objektu:
 * // 98
 */
console.log(mujObjekt.vek);



/**
 * Zmen jmeno v objektu:
 * console.log(mujObjekt); // {jmeno: "karel", prijmeni: "jahoda", vek: 98}
 */
mujObjekt.jmeno = 'Karel';
console.log(mujObjekt);
