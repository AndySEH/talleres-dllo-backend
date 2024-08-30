// TALLER NUMERO #2 Desarrollo de Backend 
// Puntos del 1 al 4

//Desarrollo Punto 1
function findMax(numeros) {
    if (numeros.length === 0) {
        return undefined;
    }
    let max = numeros[0];
    let i = 1;
    while (i < numeros.length) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
        i++; //
    }
    return max;
}
let lis = [3, 17, -1, 4, -19, 16, 32]; //32
console.log(findMax(lis));

//Desarrollo Punto 2
function includes(numeros, t) {
    let pos = false;
    let i = 0;
    while (i < numeros.length) {
        if (numeros[i] === t) {
            pos = true;
            break;
        }
        i++;
    }
    return pos;
}
console.log(includes([3, 17, -1, 4, -19], 2)); // false
console.log(includes([3, 17, -1, 4, -19], 4)); // true

//Desarrollo Punto 3
function sum(numeros) {
    let res = 0;
    let i = 0;
    while (i < numeros.length) {
        res += numeros[i];
        i++;
    }
    return res;
}
console.log(sum([3, 17, -1, 4, -19])); // 4

//Desarrollo Punto 4
function missingNumbers(numeros) {
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);
    
    let faltantes = [];

    for (let i = min; i <= max; i++) {
        if (!numeros.includes(i)) {
            faltantes.push(i);
        }
    }
    return faltantes;
}
console.log(missingNumbers([7, 2, 4, 6, 3, 9])); // [5, 8]
