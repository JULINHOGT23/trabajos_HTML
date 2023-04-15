function validar() {
    var nombre, fecha, telefono, password;
    nombre = document.getElementById("nombre").value;
    fecha = document.getElementById("fecha").value;
    telefono = document.getElementById("telefono").value;
    password = document.getElementById("password").value;

    if(nombre === ""){
        alert("el campo nombre esta vacio")
        return false;
    }
    else if (fecha === ""){
        alert("el campo fecha esta vacio")
        return false;
    }
}