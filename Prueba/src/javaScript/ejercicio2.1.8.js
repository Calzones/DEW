function cuentaAtras(){
	var cuentaAtras = parseInt(prompt("introduce un numero:"));
	document.write("Cuenta atras:<br>");	
	for(i = cuentaAtras; i > -1; i--){
		document.write(i + "<br>");		
	}
	document.write("<br>Contador:<br>");	
	for(i = 0; i < (cuentaAtras+1); i++){
		document.write(i + "<br>");		
	}
}