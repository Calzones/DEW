function primerSelect () {
	var servicio = document.getElementById("select").value;
	alert(servicio);
	switch(servicio) {
	    case "Videos":
	    	document.getElementById("id").innerHTML = " Genero del video: <select><option>Humor</option>" +
	    			"<option>Drama</option><option>Ficción</option><option>Otros</option></select>";
	        break;
	    case "Juegos":
	    	document.getElementById("id").innerHTML = " Genero del juego: <select><option>Simulador</option>" +
	    			"<option>Rol</option><option>Medieval</option><option>Otros</option></select>";
		      
	        break;
	    case "Discos":
	    	document.getElementById("id").innerHTML = " Genero del disco: <select><option>Pop</option>" +
	    			"<option>Rock</option><option>Latino</option><option>Otros</option></select>";
	        break;
	    default:
	        default: document.getElementById("id").innerHTML = " Genero del video: <select><option>Humor</option>" +
	        		"<option>Drama</option><option>Ficción</option><option>Otros</option></select>";
		      
	}
}


