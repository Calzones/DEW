function controlar(){
	
    try { 
    	var valor = prompt("Introduce un numero: ");
        if(valor == ""){
        	throw "No se ha introducido un valor";
        }  
        if(isNaN(valor)){
			throw "No es un numero";
        } 
        var numero = parseInt(valor);
        if(numero < 5){
        	 throw "Numero menor que 5";
        }   
        if(numero > 10){
        	throw "Numero mayor que 10";
        }
        if(numero < 10 && numero > 5){
        	alert("Numero entre 5 y 10");
        }  
    }
    catch(err) {
        alert("Error critico del sistema: " + err);
    }
}