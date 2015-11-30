function generar() {

	var vector = new Array(6);
	var numero;

	for (i = 0; i < vector.length; i++) {
			
		do {
			numero = Math.round((Math.random()*48)+1);
		} while (comprobarDiferentes(vector, i, numero));
		vector[i] = numero;
	}
	
	document.getElementById("aleatorio").value = 
	vector[0] + " " + vector[1] + " " + vector[2] + " " +
	vector[3] + " " + vector[4] + " " + vector[5];
}

function comprobarDiferentes(vector, i, numero) {

	for (j = 0; j < i; j ++){
		if (vector[j] == numero) {
			return true;
		}
	}
	return false;
}