function comprobar(){
	var adivinar = document.getElementById("adivinar").value;
	if(alberto > 6){
		document.getElementById("respuesta").value = "Has perdido";
	}else{
		if(adivinar == aleatorio){
						document.getElementById("respuesta").value = "Bien hecho, has acertado en " + alberto + " intentos";
		}
		if(adivinar < aleatorio){
			document.getElementById("respuesta").value = "Intentelo con un numero mayor";
		}
		if(adivinar > aleatorio){
			document.getElementById("respuesta").value = "Intentelo con un numero menor";
		}
		if(adivinar == ""){
			document.getElementById("respuesta").value = "No has insertado ningun numero";
		}
	}
	alberto ++;
}