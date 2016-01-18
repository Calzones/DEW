var caca;

function añadir() {
	if(/^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+/.test(document.getElementById("email").value)){
		return caca = [document.getElementById("apellidos").value,document.getElementById("nombre").value,document.getElementById("email").value];
	}else{
		alert("Correo no válido");
	}
}

function visualizar() {
	alert("Nombre: " + caca[1] + "\nApellidos: " + caca[0] + "\nCorreo electronico: " + caca[2]);
}
