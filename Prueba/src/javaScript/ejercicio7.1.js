function f1() {
	window.open("ejercicio7.1.1.html", "Ventana 1");
	return false;
}
function f2() {
	window.open("ejercicio7.1.1.html", "Ventana 2");
	return false;
}
function f3() {
	window.open("ejercicio7.1.1.html", "Ventana 3", "menubar=no, status=yes, resizable=no", "width=420, height=430");
	return false;
}
function f4() {
	window.open("ejercicio7.1.1.html", "Ventana 4", "left=150, menubar=no, status=yes, scrollbars=no, titlebar=no, toolbar=no", "width=600, height=300");
	return false;
}
function f5() {
	window.open("ejercicio7.1.1.html", "Ventana 5", "fullscreen=yes");
	return false;
}
function f6(){
	alert(window.name);
}
function f7(){
	alert(window.parent.location);
}