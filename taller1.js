// TALLER NUMERO #1 Desarrollo de Backend 
// Puntos del 1 al 4

//Desarrollo Punto 1
function convertidorTemp(tc){
    return (tc * 9/5) + 32;
}

//Desarrollo Punto 2
function resolvedor(a,b,c,positivo = true) {
    const insqrt = Math.sqrt(b*b - 4*a*c);
    if (positivo) {
        return (-b + insqrt) / (2*a);
    } else {
        return (-b - insqrt) / (2*a);
    }
}

//Desarrollo Punto 3
function mejorParidad(n) {
    return n % 2 === 0;
}

//Desarrollo Punto 4

function peorParidad(num) {
    let suma = 0;
    let resultado = false;
    let extraVariable1 = 0;
    let extraVariable2 = 0;

    if (num === 0) {
        suma = 0 + 0;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 1) {
        suma = 1 + 0;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 2) {
        suma = 1 + 1;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 3) {
        suma = 2 + 1;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 - 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 4) {
        suma = 2 + 2;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 5) {
        suma = 3 + 2;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 6) {
        suma = 3 + 3;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 7) {
        suma = 4 + 3;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 8) {
        suma = 4 + 4;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 9) {
        suma = 5 + 4;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    } else if (num === 10) {
        suma = 5 + 5;
        extraVariable1 = suma;
        extraVariable2 = extraVariable1 + 0;
        resultado = (extraVariable2 % 2 === 0);
    }

    return resultado;
}
