function teclitaArriba(elemento){
	if(siNoRojo(elemento))
		document.getElementById(elemento).style.backgroundColor = 'skyblue';
}
function teclitaAbajo(elemento){
	if(siNoRojo(elemento))
		document.getElementById(elemento).style.backgroundColor = 'orchid';
}
function dobletecliado(elemento, elemento2){
	document.getElementById(elemento).style.backgroundColor = 'red'; 
	document.getElementById(elemento2).style.backgroundColor = 'coral';
	document.getElementById("textarea").innerHTML = document.getElementById(elemento2).innerHTML;
}
function siNoRojo(elemento){
	if(document.getElementById(elemento).style.backgroundColor != 'red')
		return true;
}