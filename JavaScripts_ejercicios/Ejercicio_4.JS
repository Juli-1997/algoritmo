function calcularCuenta(totalFactura, porcentajePropina, numPersonas) {
    if (numPersonas <= 0) {
        return "Error: El número de personas debe ser mayor a cero.";
    }
    
    if (totalFactura < 0) {
        return "Error: El total de la factura no puede ser menor a cero.";
    }

    let totalPropina = totalFactura * (porcentajePropina / 100);

    let granTotal = totalFactura + totalPropina;

    let totalPorPersona = granTotal / numPersonas;

    return {
        propinaTotal: totalPropina.toFixed(2),
        granTotal: granTotal.toFixed(2),
        cuotaPersona: totalPorPersona.toFixed(2)
    };
}

let resultado = calcularCuenta(100000, 10, 4);

console.log("--- Resumen de la cuenta ---");
console.log("Propina total: $" + resultado.propinaTotal);  // Da $10000
console.log("Total con propina: $" + resultado.granTotal); // Da $110000
console.log("Cada persona paga: $" + resultado.cuotaPersona); // Da $27500
