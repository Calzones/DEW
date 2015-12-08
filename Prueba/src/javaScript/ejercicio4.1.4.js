function validar(){
	//v1 ^[\w\-\.]+@[\w\-]+\.[A-z]+
	//v2 ^[\w\-\.]+@[\w\-]+(\.[A-z]+)+
	//v3 ^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+
	if(/^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+/.test(document.getElementById("email").value)){
		resultado = "esValida";
	}else{
		resultado = "!esValida";
	}
	document.getElementById("texto").innerHTML = resultado;
}