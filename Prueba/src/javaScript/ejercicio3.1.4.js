function addNumbers(){

	firstNum = 4;
	secondNum = 8;
	result = firstNum + secondNum;
	alert("Result despues de modificarlo dentro de la funcion: " + result);
	return result;
}
function llamarFuncion(){
	result = 0;
	alert("Result antes de llamar a la funcion: " + result);
	sum = addNumbers();
	alert("Result despues de haber llamado a la funcion: " + result);
}