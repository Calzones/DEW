function validar(){

	alert (/^[\w\-\.]+@[\w\-]+\.[A-z]/.test(document.getElementById("email").value));
}