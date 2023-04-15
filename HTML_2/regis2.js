function validar() {
    var nombre, fecha, telefono, password;
    nombre = document.getElementById("nombre").value;
    fecha = document.getElementById("fecha").value;
    telefono = document.getElementById("telefono").value;
    password = document.getElementById("password").value;

    if(nombre === "", fecha === "", telefono === "", password === "" ){
        alert("todos los campos son obligatorios");
        return false;
    } 
    else if(nombre.length>20) {
        alert("el nombre es muy largo")
    }
    else if(telefono.length>9) {
        alert("el numero es muy largo")
    }
    else if(password.length>15) {
        alert("el password es muy largo")
    }
}