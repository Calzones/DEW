function fecha(){
	var f = new Date();
	var mes = (f.getMonth() +1)
	var dia = f.getDate()
	str_minuto = new String (dia) 
   	if (str_minuto.length == 1) 
   		dia = "0" + dia 
   	str_hora = new String (mes) 
   	if (str_hora.length == 1) 
   		mes = "0" + mes 
	var fecha = f.getFullYear() + "-" + mes + "-" + dia;
	document.getElementById("divsito").innerHTML = '<input type="date" id="fecha" max="' + fecha + '"/>'
													+ '<input type="text" id="hora" value="hh:mm" onclick="blanquear();"/>';
}
function precio(){
	var f = new Date();
	var minuto = f.getMinutes();
	var hora = f.getHours();
	str_minuto = new String (minuto) 
   	if (str_minuto.length == 1) 
      	minuto = "0" + minuto 
   	str_hora = new String (hora) 
   	if (str_hora.length == 1) 
      	hora = "0" + hora 	
	document.getElementById("salida").value = f.getDate() + "/" + (f.getMonth() +1) + "/" +f.getFullYear() + " " + hora + ":" + minuto;
}
function blanquear(){
	document.getElementById("entrada").value = "";
}

//El programa comprobará que se trata de una fecha y hora correcta y anterior a la fecha y hora
//del sistema.
//Cuando se pulse el botón PRECIO el programa visualizará la fecha y hora del sistema y calculará
//el precio de estancia en el aparcamiento teniendo en cuenta las siguientes consideraciones:
//La primera hora o fracción se facturará a 1,2 € y las restantes horas o fracciones a razón de 1,5 €.
//Se facturará como máximo 20 euros por cada día completo de estancia.