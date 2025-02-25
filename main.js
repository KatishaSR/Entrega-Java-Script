let intentos = 1
let identificar =true;
const usuarioCorrecto = "admin";
const passwordCorrecto = "1234";

do {
    let usuarioIngresado = prompt("Nombre de usuario o correo electrónico:")
    let passwordIngresada = prompt("Ingrese su contraseña:")

    if (usuarioIngresado === null || passwordIngresada === null) {
       
        break
    }

    if (usuarioIngresado === usuarioCorrecto && passwordIngresada === passwordCorrecto) {
        document.getElementById("mensaje").innerHTML = "Inicio de sesión exitoso";
        document.getElementById("mensaje").style.color = "green";
        break;
    } else {
        document.getElementById("mensaje").innerHTML = "Usuario o contraseña incorrectos";
        document.getElementById("mensaje").style.color = "red";
        intentos++;
    }

    if (intentos > 3) {
        alert("Ha superado tres intentos de ingreso.");
        break;
    }

} while (identificar);