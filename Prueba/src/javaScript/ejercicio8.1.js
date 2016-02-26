function cambairColor (){
	
	var propiedad = document.getElementById("select").value;
	var rojo = parseInt(document.getElementById("red").value);
	var verde = parseInt(document.getElementById("green").value);
	var azul = parseInt(document.getElementById("blue").value);
	if((rojo < 256 && rojo > -1) && (verde < 256 && verde > -1) && (azul < 256 && azul > -1)){
		switch(propiedad){
			case "bgColor":
				opener.document.body.bgColor="#" + rgbToHex(rojo,verde,azul);
				break;
			case "fgColor":
				opener.document.body.fgColor="#" + rgbToHex(rojo,verde,azul);
				break;
			case "LinkColor":
				opener.document.body.LinkColor="#" + rgbToHex(rojo,verde,azul);
				break;
			case "aLinkColor":
				opener.document.body.aLinkColor="#" + rgbToHex(rojo,verde,azul);
				break;
			case "vLinkColor":
				opener.document.body.vLinkColor="#" + rgbToHex(rojo,verde,azul);
				break;
		}
	}else{
		alert("Meteme bien los valores");
	}
}
function rgbToHex(R,G,B) {
	return toHex(R)+toHex(G)+toHex(B)
}
function toHex(n) {
	 n = parseInt(n,10);
	 if (isNaN(n)) return "00";
	 n = Math.max(0,Math.min(n,255));
	 return "0123456789ABCDEF".charAt((n-n%16)/16)
	      + "0123456789ABCDEF".charAt(n%16);
}