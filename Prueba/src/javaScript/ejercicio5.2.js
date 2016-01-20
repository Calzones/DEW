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
// [\d]{4}[^a-z^\dAEIOU]{3}
function noNum(elemento) {
	if (!/^[A-z]+$/.test(document.getElementById(elemento).value)) {
		alert("No se permiten numeros");
	}
}
function numExp(elemento) {
	if (vagia(elemento)) {
		if (!(document.getElementById(elemento).value <= 349999999999 && document.getElementById(elemento).value >= 340000000000)) {
			alert("No esta dentro del rango: 340000000000-349999999999");
		}
	} else {
		alert("Falta completar este campo");
	}
}
function vagia(elemento) {
	if (document.getElementById(elemento).value != "") {
		return true;
	} else {
		return false;
	}
}
function edad(elemento) {
	if (vagia(elemento)) {
		if (!(document.getElementById(elemento).value <= 120 && document.getElementById(elemento).value >= 18)) {
			alert("No esta dentro del rango: 18-120");
		}
	} else {
		alert("Falta completar este campo");
	}
}
function fecha(elemento){
	var cadenaEntera = document.getElementById(elemento).value; 
	var separada = cadenaEntera.split("/");
	var alberto = buescar(cadenaEntera, "/");
	var dia = separada[0];
	var mes = separada[1];
	var año = separada[2];
	if(alberto == 2){
		if(dia.length == 2 && mes.length == 2 && año.length == 4){
			dia(dia);
		}else{
			alert("Formato de fecha erroneo (dd/mm/aaaa)");
		}
	}else{
		alert("Formato de fecha erroneo (dd/mm/aaaa)");
	}
}
function dia(dia){
	if(buescar(dia, "0") > 0){
		alert(dia.split("0")[1]);
	}
}
function mes(){
	
}
function buescar(cadena, elemento){
	var alberto = 0;
	for(i = 0; i < cadena.length; i++){
		if(cadena[i] == elemento ){
			alberto ++;
		}
	}
	return alberto;
}





















