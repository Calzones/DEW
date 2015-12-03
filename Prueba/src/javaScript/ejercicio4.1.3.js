//function validar(){
//	//v1 ^[\w\-\.]+@[\w\-]+\.[A-z]+
//	//v2 ^[\w\-\.]+@[\w\-]+(\.[A-z]+)+
//	//v3 ^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+
//	alert (/^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+/.test(document.getElementById("email").value));
//}
function blanquear(ano){
	document.getElementById("victor").value = "";
}
function ordenar(){
	dar();
	document.getElementById("resultado").value = victor.sort();
}
function ver(){
	dar();
	document.getElementById("resultado").value = victor;
}
function reves(){
	dar();
	document.getElementById("resultado").value = victor.reverse();
}
function dar(){
	return victor = document.getElementById("victor").value.replace(/\s/g, "").split(",");
}