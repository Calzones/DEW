function Articulo(cod,desc) { 
	
	this.Codigo = cod; 
	this.Descripcion = desc;
}

function inventarioDeArticulos(){
	
	var laCosa = new Array();
	
	laCosa[0] = new Articulo("0001", "La cara de una moneda");
	laCosa[1]  = new Articulo("0002", "La cruz de una moneda");
	laCosa[2]  = new Articulo("0003", "Una imagen");
	laCosa[3]  = new Articulo("0004", "Un GIF");
	
	return laCosa;
}

function prueba(){
	
	var laCosa = inventarioDeArticulos();
	var cadena = "";
	
	for (i = 0; i < 4; i ++){
		cadena += laCosa[i].Codigo + " " + laCosa[i].Descripcion + "\n";
	}

	document.getElementById("texto").value = cadena;												
}