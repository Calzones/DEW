function mayorMenor(){

	var numero1 = parseInt(prompt("Dame un número: "));
	var numero2 = parseInt(prompt("Dame otro número: "));

	if(numero1 <= numero2){
		alert("La suma es: " +  eval(numero1 + numero2));
	}else{
		alert("a cobra, el primer número es mayor :_D");
	}
}