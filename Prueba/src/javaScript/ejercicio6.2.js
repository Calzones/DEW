function huirMuyFuerte(){
	var d = document.getElementById("boton"); 
	d.style.margin = numeroAleatorio() + "px";
}

function numeroAleatorio(){
	var numero = Math.round(Math.random()*400);
	return numero;
}