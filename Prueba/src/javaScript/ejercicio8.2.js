function cambiar(){
	
	document.getElementById("div1").innerHTML = "<img src='../src/img/imagen1.2.jpg' " +
			"width=300 height=200 onmouseout='descambiar();' onclick='cerriear();'>";
	document.getElementById("div2").innerHTML = "<img src='../src/img/imagen2.gif' " +
	"width=300 height=200 >";
}
function descambiar(){
	
	document.getElementById("div1").innerHTML = "<img src='../src/img/imagen1.jpg' " +
			"width=300 height=200 onmouseover='cambiar();'>";
	document.getElementById("div2").innerHTML = "<img src='../src/img/imagen2.jpg' " +
			"width=300 height=200 >";
}

function cerriear(){
	window.close();
}