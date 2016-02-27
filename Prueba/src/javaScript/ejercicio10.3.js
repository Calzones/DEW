function mover (){
	var foto = document.getElementById("foto");
	foto.style.animationDuration = "5s";
	var posicion = foto.getBoundingClientRect();
//	foto.transform="scaleX(-1)";
}

var canvas,contexto,pixelpixelMaximo = 0;
var retraso = 10;

function iniciarCanvas() {
	canvas = document.getElementById("canvas");
	contexto = canvas.getContext("2d");
	contexto.fillStyle = "#99CC66";
	contexto.font = "20pt Arial";
	contexto.textAlign = "center";
	pixel = 0;
	pixelMaximo = canvas.width + 200;
	moverC();
}

function moverC() {
	pixel++;
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	contexto.save();
	contexto.translate(pixel, canvas.height / 2);
	var img = new Image();
	img.src = "../src/img/imagen2.jpg";
	contexto.drawImage(img, 0, 0);
	contexto.restore();
	if (pixel == pixelMaximo){
		pixel = 0;
		desMover();
	}
	if (pixel < pixelMaximo)
		setTimeout("mover()", retraso);
}
function desMoverC(){
	pixel--;
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	contexto.save();
	contexto.translate(pixel, canvas.height / 2);
	var img = new Image();
	img.src = "../src/img/imagen2.jpg";
	contexto.drawImage(img, 0, 0);
	contexto.restore();
	if (pixel < pixelMaximo)
		setTimeout("desMover()", retraso);
}

