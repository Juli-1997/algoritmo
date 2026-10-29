function calcularParqueadero(tipoVehiculo, horas) {
    let total = 0;

    if (tipoVehiculo === "moto") {
        total = horas * 2; 
    } else if (tipoVehiculo === "carro") {
        total = horas * 5; 
    } else {
        return "Vehículo no reconocido.";
    }

    if (horas > 5) {
        total = total * 0.90; 
    }

    return "El total a pagar es: $" + total.toFixed(2);
}

console.log(calcularParqueadero("moto", 3));   
console.log(calcularParqueadero("carro", 2));  
console.log(calcularParqueadero("carro", 6));  

