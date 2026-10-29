function calcularDescuento(esVIP, tieneCupon, totalCompra) {

  
    if ((tieneCupon && totalCompra > 50) || esVIP) {
        return "¡Felicidades! Tienes un descuento.";
    } else {
        return "Lo sentimos, pagas el precio total.";
    }
}

//Tabla
console.log("Caso 1: " + calcularDescuento(false, true, 20)); 

// Caso 2: No es VIP, tiene cupón y compró bastante ($80). Debería dar: descuento.
console.log("Caso 2: " + calcularDescuento(false, true, 80));

// Caso 3: Es VIP, no tiene cupón y compró poco ($10). Debería dar: descuento.
console.log("Caso 3: " + calcularDescuento(true, false, 10));
