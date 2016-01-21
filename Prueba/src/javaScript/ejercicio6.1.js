//funcion clave
function vagia(elemento) {
	if (document.getElementById(elemento).value != undefined) {
		return true;
	} else {
		return false;
	}
}
//funcion principal
function validar() {
	if (vagia("nombre") && vagia("apellido1") && vagia("edad")
			&& vagia("matricula") && vagia("numTarjeta") && vagia("mesExp")
			&& vagia("numExp") && vagia("apellido2") && vagia("fechaPermiso")
			&& vagia("importe") && vagia("añoExp")) {
		alert("Formulario validado");
	} else {
		alert("Faltan campos por completar");
	}
}
//expresiones regulares
// /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ FECHA
// /[\d]{4}[^a-z^\dAEIOU]{3}/ MATRICULA
// /^[A-z]+$/ SOLO LETRAS
function noNum(elemento) {
	if (!/^[A-z]+$/.test(document.getElementById(elemento).value)
			&& vagia(elemento)) {
		alert("No se permiten numeros");
	}
}
function fecha(elemento) {
	if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
			.test(document.getElementById(elemento).value)
			&& vagia(elemento)) {
		alert("Formato de fecha erroneo (dd/mm/aaaa)");
	}
}
function matricula(elemento) {
	if (!/[\d]{4}[^a-z^\dAEIOU]{3}/
			.test(document.getElementById(elemento).value)
			&& vagia(elemento)) {
		alert("Formato de la matricula erroneo");
	}
}
//rangos
function edad(elemento) {
	if (vagia(elemento)) {
		if (!(document.getElementById(elemento).value <= 120 && document
				.getElementById(elemento).value >= 18)
				&& vagia(elemento)) {
			alert("No esta dentro del rango: 18-120");
		}
	} else {
		alert("Falta completar este campo");
	}
}
function numExp(elemento) {
	if (vagia(elemento)) {
		if (!(document.getElementById(elemento).value <= 349999999999 && document
				.getElementById(elemento).value >= 340000000000)
				&& vagia(elemento)) {
			alert("No esta dentro del rango: 340000000000-349999999999");
		}
	} else {
		alert("Falta completar este campo");
	}
}
function mesExp(elemento) {
	if (vagia(elemento)) {
		if (!(document.getElementById(elemento).value <= 12 && document
				.getElementById(elemento).value >= 1)
				&& vagia(elemento)) {
			alert("No esta dentro del rango: 1-12");
		}
	} else {
		alert("Falta completar este campo");
	}
}
function añoExp(elemento) {
	if (vagia(elemento)) {
		if (!(document.getElementById(elemento).value <= 2100 && document
				.getElementById(elemento).value >= 2001)
				&& vagia(elemento)) {
			alert("No esta dentro del rango: 2001-2100");
		}
	} else {
		alert("Falta completar este campo");
	}
}