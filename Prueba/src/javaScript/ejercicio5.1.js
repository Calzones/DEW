function añadir() {
	if (/^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+/.test(document.getElementById("email").value)) {
		document.getElementById("textarea").value = document
				.getElementById("apellidos").value
				+ document.getElementById("nombre").value
				+ document.getElementById("email").value;
	} else {
		alert("Correo no válido");
	}
}
function visualizar() {
	var sexo = document.getElementsByName("sexo");
	var resultado = "";
	for (i = 0; i < sexo.length; i++) {
		if (sexo[i].checked) {
			resultado = sexo[i].value;
		}
	}
	var informacion = document.getElementsByName("informacion");
	var resultado1 = "";
	for (i = 0; i < informacion.length; i++) {
		if (informacion[i].checked) {
			resultado1 += informacion[i].value + " ";
		}
	}
	alert("Nombre: " + document.getElementById("nombre").value
			+ "\nApellidos: " + document.getElementById("apellidos").value
			+ "\nCorreo electronico: " + document.getElementById("email").value
			+ "\nSexo: " + resultado + "\nIntereses: " + resultado1
			+ "\nOrigen: " + document.getElementById("select").value);
}
function eliminar() {
	document.getElementById("textarea").value = "";
}