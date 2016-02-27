function cocinar(){
	
	
	var ingrediente = document.getElementsByName("ingrediente");
	var ing = "<b>Ingredientes:</b><br>";
	for (i = 0; i < ingrediente.length; i++) {
		if (ingrediente[i].checked){
			ing += ingrediente[i].value + "<br>";
		}
	}
	var masa = document.getElementsByName("masa");
	var mas = "<br><b>Masa:</b><br>";
	for (i = 0; i < masa.length; i++) {
		if (masa[i].checked){
			mas += masa[i].value + "<br>";
		}
	}
	
	var pizza = ing + mas;
	document.getElementById("aqui").innerHTML = pizza;
}