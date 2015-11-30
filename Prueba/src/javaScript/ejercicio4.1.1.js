//function validar(){
//	//v1 ^[\w\-\.]+@[\w\-]+\.[A-z]+
//	//v2 ^[\w\-\.]+@[\w\-]+(\.[A-z]+)+
//	//v3 ^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+
//	alert (/^(?!.*\.{2})(?=[^\.])[\w\-\.]+@[\w\-]+(\.[A-z]+)+/.test(document.getElementById("email").value));
//}

function jugar (){
	var trela = document.getElementById("aAdivinar").value;
	var arraygo = trela.split("");
	var numero = Math.floor((Math.random()*trela.length));
	var pabrala = arraygo[numero];
	var trelaNueva = "";
	for(i = 0 ; i < arraygo.length; i ++){
		if(arraygo[i] != pabrala){
			arraygo[i] = "_";
		}
		trelaNueva +=  arraygo[i] + " ";
	}
	document.getElementById("enAdivine").value = trelaNueva;
	
	//document.getElementById("enAdivine").value = arraygo.toString();
	//alert(palabra);
}