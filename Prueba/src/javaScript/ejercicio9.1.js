function Articulo(cod,desc,precio,cant,img) { 
	
	this.Codigo = cod; 
	this.Descripcion = desc; 
	this.Precio = precio; 
	this.Cantidad = cant; 
	this.Imagen = img;
}

function inventarioDeArticulos(){
	
	var laCosa = new Array();
	
	laCosa[0] = new Articulo("0001", "La cara de una moneda", 10, 0, "cara.png");
	laCosa[1]  = new Articulo("0002", "La cruz de una moneda", 25, 0, "cruz.png");
	laCosa[2]  = new Articulo("0003", "Una imagen", 20, 0, "imagen1.2.jpg");
	laCosa[3]  = new Articulo("0004", "Un GIF", 5, 0, "imagen2.gif");
	laCosa[4]  = new Articulo("0005", "Otra imagen", 1 , 0, "imagen2.jpg");
	laCosa[5]  = new Articulo("0006", "Otra otra imagen", 50 , 0, "imagen1.jpg");
	laCosa[6]  = new Articulo("0007", "Otra otra otra imagen", 8, 0, "lagarto.png");
	
	return laCosa;
}

function prueba(){
	
	var laCosa = inventarioDeArticulos();
	var cadena = "<table><th>Código</th><th>Descripción</th><th>Precio</th><th>Cantidad</th><th>Imagen</th>";
	
	for (i = 0; i < 7; s){
		cadena += "<tr>" + 
					"<td>" + laCosa[i].Codigo + "</td>" + 
					"<td>" + laCosa[i].Descripcion + "</td>" +
					"<td>" + laCosa[i].Precio + " €</td>" +
					"<td><input type='text'id='" + i + "' value='" + laCosa[i].Cantidad + "'/></td>" +
					"<td><img style='width:100px; height:100px;' src='../src/img/" + laCosa[i].Imagen + "'/></td>'" +
				  "</tr>";
	}
	
	cadena += "</table>";
	document.getElementById("div").innerHTML = cadena;												
}

function pedidear(){
	
	var laWea = "";
	var alberto = 0;
	for (i = 0; i < 7; i ++){
		laWea += document.getElementById(i).value + "+";

		if(i == 6){
			laWea += document.getElementById(i).value;
		}
	}
	document.cookie = "pedido=" + laWea;
	window.open("ejercicio9.1.1.html");
}

function mostrar(){
	
	var laCosa = inventarioDeArticulos();
	var producto = document.cookie.substring(7).split("+");
	
	var cadena = "<table><th>Cantidad</th><th>Descripción</th><th>Precio</th><th>Subtotal</th>";
	var total = 0;
	var subtotal = 0;
	for (i = 0; i < 7; i ++){
		if(producto[i] > 0){
			subtotal = parseInt(producto[i]) * laCosa[i].Precio;
			cadena += "<tr>" + 
							"<td>" + producto[i] + " uds</td>" + 
							"<td>" + laCosa[i].Descripcion + "</td>" +
							"<td> a " + laCosa[i].Precio + "</td>" +
							"<td>" + subtotal + "</td>" +
					  "</tr>";
			total += subtotal;
		}	
	}
	cadena += "<tr><td></td><td></td><td></td><td>Total = " + total + " €</td></tr></table>";
	
	document.getElementById("div1").innerHTML = cadena;
}