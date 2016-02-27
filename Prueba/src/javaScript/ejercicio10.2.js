var canvas;
var contexto;
var pixel;
var pixelMaximo = 0;
var retraso = 20;
var testo = "¡Queremos que compre!";

function cambiar(texto) {
	testo = texto;
	document.getElementById("texto").innerHTML = texto;
	mover(testo);
}

function iniciarCanvas(testo) {
	canvas = document.getElementById("canvas");
	contexto = canvas.getContext("2d");
	contexto.fillStyle = "#99CC66";
	contexto.font = "20pt Arial";
	contexto.textAlign = "center";
	pixel = 0;
	pixelMaximo = canvas.width + 200;
	mover(testo);
}

function mover(hacelga) {
	pixel++;
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	contexto.save();
	contexto.translate(pixel, canvas.height / 2);
	contexto.fillText(hacelga, 0, 0);
	contexto.restore();
	if (pixel == pixelMaximo)
		pixel = 0;
	if (pixel < pixelMaximo)
		setTimeout(mover(testo), retraso);
}

