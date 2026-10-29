function esBisiesto(anio) {
    if (anio%400 === 0) {
        return "El año " + anio + " SÍ es bisiesto.";
    } 
    else if (anio%100 === 0) {
        return "El año " + anio + " NO es bisiesto.";
    } 
    else if (anio%4 === 0) {
        return "El año " + anio + " SÍ es bisiesto.";
    } 
    else {
        return "El año " + anio + " NO es bisiesto.";
    }
}

console.log(esBisiesto(2024)); 
console.log(esBisiesto(1900)); 
console.log(esBisiesto(2000)); 
console.log(esBisiesto(2023)); 
