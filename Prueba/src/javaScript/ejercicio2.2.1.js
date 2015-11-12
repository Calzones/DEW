function saludar(){
	var nombre = document.getElementById("nombreEntrada").value;
	if(nombre != ""){
		document.getElementById("nombreSalida").innerHTML = "<b>Hola " + nombre + "</b>, yo soy PENTIUM 4";
	}else{
		document.getElementById("nombreSalida").innerHTML = "<b>Hola sin nombre</b>, yo soy PENTIUM 4";
	}
				
}