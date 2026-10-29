function permitirRegistro(nombreVacio, claveCorta) {
    if (nombreVacio== false && claveCorta == false ) {
        return ("Registro exitoso. ¡Bienvenido!");
    } else {
        return "Error en el registro. Revisa tus datos.";
    }
}


console.log("Caso 1: " + permitirRegistro(false, false));

console.log("Caso 2: " + permitirRegistro(true, false));

console.log("Caso 3: " + permitirRegistro(false, true));
