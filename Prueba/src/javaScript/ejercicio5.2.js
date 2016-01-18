function validar(){
	if(id("nombre") && id("apellido1") && id("edad") && id("matricula") && id("numTarjeta") && id("mesExp") && id("numExp") && id("apellido2") && id("fechaPermiso") && id("importe") && id("añoExp")){
		alert("guien");
	}else{
		alert("mal");
	}
}
//[\d]{4}[^a-z^\dAEIOU]{3} matricula
function id(elemento){
	if(document.getElementById(elemento).value != ""){
		return true;
	}else{
		return false;
	}
}