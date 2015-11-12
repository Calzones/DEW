function cuentaAtras(){
	var cuentaAtras = parseInt(prompt("Introduce un numero:"));
	var i = cuentaAtras;
	document.write("Cuenta atras:<br>");
	while(i > -1){
		document.write(i + "<br>");
		i --;
	}
	var i = 0;
	document.write("<br>Contador<br>");
	while(i < (cuentaAtras+1)){
		document.write(i + "<br>");
		i ++;
	}
}