function factorial(){
	var numeroAFactorializar = document.getElementById("factorial").value;
	var numeroYaFactorizado = numeroAFactorializar;
	if((numeroAFactorializar != null) && (!isNaN(parseInt(numeroAFactorializar)) && (numeroAFactorializar >0))){
		for(i = numeroAFactorializar; i > 1; i--){
			numeroYaFactorizado = numeroYaFactorizado * (i -1);
		}
		document.getElementById("factorial").value = numeroYaFactorizado;
	}else{
		alert("Introduce un numero valido");
		document.getElementById("factorial").value = "";
	}
}

function padreValor(){
	var numeroAIntercambiar1 = document.getElementById("numero1").value;
	var numeroAIntercambiar2 = document.getElementById("numero2").value;
	
	intercambiar(numeroAIntercambiar1, numeroAIntercambiar2);
	
	function intercambiar(numero1, numero2){
		document.getElementById("numero1").value = numero2;
		document.getElementById("numero2").value = numero1;
	}
}

function padreReferencia(){
	var numeroAIntercambiar1 = new Object();
	numeroAIntercambiar1.numero2 = document.getElementById("numero1").value;
	var numeroAIntercambiar2 = new Object();
	numeroAIntercambiar2.numero1 = document.getElementById("numero2").value;
	
	intercambiar(numeroAIntercambiar1, numeroAIntercambiar2);
	
	function intercambiar(numero1, numero2){
		document.getElementById("numero1").value = numero2.numero1;
		document.getElementById("numero2").value = numero1.numero2;	
	}
}

function suma(){
	var expreg = new RegExp("[0-9]\,[0-9]$");
	var numerosInsetados = document.getElementById("suma").value;
  
	if(expreg.test(numerosInsetados)){
		var arrayDeNumeros = numerosInsetados.split(",");
		var suma = 0;
		for(i = 0; i < arrayDeNumeros.length; i++){
			suma += parseInt(arrayDeNumeros[i]);
		}
		document.getElementById("suma").value = "La suma es: " + suma;
	}else{
		document.getElementById("suma").value = "No se han insertado en un formato valido";
	}
}

function informacion(nombre, localidad = "Las Palmas de G.C.", valor = 100){
	document.getElementById("informacion").value = nombre + " " + localidad + " " + valor;
}

function factorialRecursivo(){
	var numero = document.getElementById("factorialRecursivo").value;
	
	var factorial = 
		function magia(numero){
			if((numero != null) && (!isNaN(parseInt(numero)))){
				if(numero == 0){
					return 1;
				}else{
					return numero * magia(numero - 1);
				}
			}else{
				alert("Introduce un numero valido");
				document.getElementById("factorialRecursivo").value = "";
			}	
		}
	document.getElementById("factorialRecursivo").value = factorial(numero);
}