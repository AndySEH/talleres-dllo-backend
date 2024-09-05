// TALLER NUMERO #3 Desarrollo de Backend 
// Puntos del 1 al 3

//Desarrollo Punto 1
function desglosarString(cadena, tipo) {
    const vocales = 'aeiou';
    let cantidad = 0;

    cadena = cadena.toLowerCase();

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i];

        if (tipo === "vocales" && vocales.includes(letra)) {
            cantidad++;
        } else if (tipo === "consonantes" && letra >= 'a' && letra <= 'z' && !vocales.includes(letra)) {
            cantidad++;
        }
    }
    return cantidad;
}
console.log(desglosarString("andres", "vocales"));     //  2
console.log(desglosarString("andres", "consonantes")); //  4

//Desarrollo Punto 2
function twoSum(numeros, objetivo) {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] + numeros[j] === objetivo) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); //  [0, 1]
console.log(twoSum([3, 4, 2], 6));      //  [1, 2]

//Desarrollo Punto 3
function conversionRomana(romano) {
    const valoresRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let prevValor = 0;
    for (let i = romano.length - 1; i >= 0; i--) {
        let valorActual = valoresRomanos[romano[i]];
        
        if (valorActual >= prevValor) {
            total += valorActual;
        } else {
            total -= valorActual;
        }
        prevValor = valorActual;
    }
    return total;
}
console.log(conversionRomana("III"));  // 3
console.log(conversionRomana("XIV"));    // 14
console.log(conversionRomana("MMXXIV"));  // 2024
console.log(conversionRomana("MCMVII")); // 1907
