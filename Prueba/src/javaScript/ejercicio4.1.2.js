function fecha() {
	var f = new Date();
	var mes = (f.getMonth() + 1)
	var dia = f.getDate()
	str_minuto = new String(dia)
	if (str_minuto.length == 1)
		dia = "0" + dia
	str_hora = new String(mes)
	if (str_hora.length == 1)
		mes = "0" + mes
	var fecha = f.getFullYear() + "-" + mes + "-" + dia;
	document.getElementById("divsito").innerHTML = '<input type="date" id="fecha" max="'
			+ fecha
			+ '"/><br>'
			+ '<input type="text" id="hora" value="hh:mm" onclick="blanquear();" onfocusout="salida();"/>';
}
function salida() {
	var f = new Date();
	var minuto = f.getMinutes();
	var hora = f.getHours();
	str_minuto = new String(minuto)
	if (str_minuto.length == 1)
		minuto = "0" + minuto
	str_hora = new String(hora)
	if (str_hora.length == 1)
		hora = "0" + hora
	document.getElementById("salida").value = f.getDate() + "/"
			+ (f.getMonth() + 1) + "/" + f.getFullYear() + " " + hora + ":"
			+ minuto;
}
function precio() {
	var precioFinal = 1.2;
	var precioFinalD = 0;
	var array = document.getElementById("salida").value.split(" ");
	var fechaS = array[0].split("/");
	var horaS = array[1].split(":");

	 if(dias(fechaS) > 0){
		 precioFinalD = 20 * dias(fechaS);
		 precioFinal = 1.5 * horas(horaS);
	 }else if(horas(horaS) > 1){
		precioFinal = precioFinal +  1.5 * (horas(horaS)-1);
	 }

	document.getElementById("precio").value = precioFinal + precioFinalD;
}

function dias(fechaS) {
	var fec = document.getElementById("fecha").value.split("-");
	var fecha = new Array(fec[2], fec[1], fec[0]);

	var fecha1 = Date.UTC(fecha[2], fecha[1] - 1, fecha[0]);
	var fecha2 = Date.UTC(fechaS[2], fechaS[1] - 1, fechaS[0]);
	var numDias = Math.floor((fecha2 - fecha1) / (1000 * 60 * 60 * 24));
	return numDias;
}
function horas(horaS) {
	var hora = document.getElementById("hora").value.split(":");

	var minutos = horaS[1] - hora[1];
	var horas = horaS[0] - hora[0];

	if (minutos < 0) {
		horas --;
		minutos = 60 + minutos;
	}
	var horasS = horas.toString();
	return horasS;
}
function blanquear() {
	document.getElementById("hora").value = "";
}

// El programa comprobará que se trata de una fecha y hora correcta y anterior a
// la fecha y hora
// del sistema.
// Cuando se pulse el botón PRECIO el programa visualizará la fecha y hora del
// sistema y calculará
// el precio de estancia en el aparcamiento teniendo en cuenta las siguientes
// consideraciones:
// La primera hora o fracción se facturará a 1,2 € y las restantes horas o
// fracciones a razón de 1,5 €.
// Se facturará como máximo 20 euros por cada día completo de estancia.

