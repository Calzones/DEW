function eliminar(){
	document.cookie = "Contador=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	location.reload();
}

function crear(){
	document.cookie="Contador=0";
	document.getElementById("aqui").innerHTML = "Se ha creado una galletita";
}

function mostrar(){
	if(document.cookie != ""){
		document.getElementById("aqui").innerHTML = document.cookie;
	}else{
		document.getElementById("aqui").innerHTML = "No hay ninguna galleta actualmente";
	}
}

function primero(){
	if(document.cookie == ""){
		document.getElementById("aqui").innerHTML = "Bienvenido a la página de las cookies";
	}else{
		var galleta = document.cookie;
		var galletita = galleta.split("=");
		var contador = parseInt(galletita[1]);
		contador++;
		document.cookie="Contador="+contador;
		document.getElementById("aqui").innerHTML = document.cookie;
	}
}