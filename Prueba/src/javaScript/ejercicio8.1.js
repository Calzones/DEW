function cambairColor (){
	
	var propiedad = document.getElementById("select").value;
	var rojo = parseInt(document.getElementById("red").value);
	var verde = parseInt(document.getElementById("green").value);
	var azul = parseInt(document.getElementById("blue").value);
	if((rojo < 256 && rojo > -1) && (verde < 256 && verde > -1) && (azul < 256 && azul > -1)){
		var cadena = propiedad + "='" + rojo + ", " + verde + ", " + azul + "'";	
		alert(cadena);
	}else{
		alert("Meteme bien los valores");
	}
	
}