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

function comprobar(){
	
	var letra;
	var asd;
	var trela = document.getElementById("aAdivinar").value;;
	var arraygo = trela.split("");
	for(i = 0; i < arraygo.length; i++){
		letra = document.getElementById("divinar").value;
		bahul = document.getElementById("LaPuraMagiaNoMasBuey").value;
		document.getElementById("LaPuraMagiaNoMasBuey").value = bahul + letra;
		alert("a");
//		alert(bahul.search(letra));
		if(letra == arraygo[i]){
			asd = document.getElementById("enAdivine").value.replace(/\s/g, "").split("");
			asd[i] = letra;
			document.getElementById("enAdivine").value = asd;
		}//else{
//			alberto ++;
//		}
	}
}