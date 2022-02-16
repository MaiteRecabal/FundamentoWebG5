var formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function() {
    validarFormulario();
});

function validarFormulario() {
    //alert("Funciona el llamado desde html");
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var usuario = document.getElementById("usuario").value;
    var server = document.getElementById("server").value;
    var pass = document.getElementById("inputPassword").value;
    var pass2 = document.getElementById("inputPassword2").value;
    var fnacimiento = document.getElementById("fnacimiento").value;
    //alert(`su nombre es: ${nombre}`);

    if (nombre == "") {
        alert("El nombre no puede estar vacio");
        document.getElementById("nombre").select();
    }
    if (pass == "") {
        alert("El Password no puede estar vacio");
        document.getElementById("inputPassword").select();
    } else {
        validarPassword(pass, pass2);
    }
}

function validarPassword(pass, pass2) {
    if (pass !== pass2) {
        alert("Los password son distintos");
        //limpiar el input
        document.getElementById("inputPassword").value = "";
        document.getElementById("inputPassword2").value = "";
        document.getElementById("inputPassword").select();

    }

}