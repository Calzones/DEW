function escribir(){
	
	var texto = document.getElementById("texto").value;
	var contenedor = document.getElementsByName("contenedor");
	var resultado = "";
	for (i = 0; i < contenedor.length; i++) {
		if (contenedor[i].checked){
			resultado = contenedor[i].value;
		}
	}
	switch (resultado){
		case "derecho":
			document.getElementById("div3").innerHTML = texto;
			break;
	default: document.getElementById("div2").innerHTML = texto;
	}
}
function reiniciar(){
	document.getElementById("formulario").reset();
}
function mostrar(){
	
	var div1 = document.getElementById("div1").name;
	var div2 = document.getElementById("div2").name;
	var div3 = document.getElementById("div3").name;
	
	alert("Nombre div 1: " + div1 + "\n" +
		  "Nombre div 2: " + div2 + "\n" +
		  "Nombre div 3: " + div3);
}