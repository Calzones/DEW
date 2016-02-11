function aumentar(ruta){
	window.open("ejercicio7.3.1.html", ruta, "width=400, heigth=400");
}
function yaTuSabeh(){
	var ruta = window.name;
	document.getElementById("div").innerHTML = "<img src='" + ruta + "' width=400 height=400>";
}