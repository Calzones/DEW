function variables(){
	var numero1;
	var numero2;
	alert("vamos a comparar dos numeros");
	numero1 = parseInt(prompt("inserta el primer numero"));
	numero2 = parseInt(prompt("inserta el segundo numero"));
			
	if(numero1 < numero2){
		alert("El primero es menor");
	}
	if(numero1 > numero2){
		alert("El primero es mayor");
	}
	if(numero1 == numero2){
		alert("Los numeros son iguales");
	}
}