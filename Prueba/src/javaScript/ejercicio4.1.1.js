function jugar(){
	var trela = document.getElementById("aAdivinar").value;
	var arraygo = trela.split("");
	var numero = Math.floor((Math.random()*trela.length));
	var pabrala = arraygo[numero];
	var trelaNueva = "";
	var alberto = 0;
	
	for(i = 0 ; i < arraygo.length; i ++){
		if(arraygo[i] != pabrala){
			arraygo[i] = "_";
		}
		trelaNueva +=  arraygo[i] + " ";
	}
	document.getElementById("enAdivine").value = trelaNueva;
	
	var x = document.getElementById("divinar").value;
	
	if(trela.search(x) != -1){
		
	}else{
		alberto ++;
	}
	alert(palabra);
	cuentador = 1;
	document.getElementById("aAdivinar").onfocusout = function(){};
}