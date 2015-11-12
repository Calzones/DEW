function verificaSiEsCorrecto(numero){

	if(numero == 2){
		return "Es correcto";
	}else{
		return "No es correcto";
	}
}

function capturaResultado(){
	var numero = prompt("¿Cuánto es 1 + 1?");
	
	alert(verificaSiEsCorrecto(numero));
}