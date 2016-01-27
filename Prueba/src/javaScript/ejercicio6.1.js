function primerSelect () {
	var servicio = document.getElementById("select").value;
	
	switch(parseInt(servicio)) {
	    case 0:
	    	document.getElementById("div").innerHTML = " Genero del video: <select id='select2' onchange='segundoSelect();'><option value='0'>Humor</option>" +
	    			"<option value='1'>Drama</option><option value='2'>Ficción</option><option value='3'>Otros</option></select>";
	    	document.getElementById("textarea").value = "Texto de video -> Humor";
	        break;
	    case 1:
	    	document.getElementById("div").innerHTML = " Genero del juego: <select id='select2' onchange='segundoSelect();'><option value='8'>Simulador</option>" +
	    			"<option value='9'>Rol</option><option value='10'>Medieval</option><option value='11'>Otros</option></select>";
	    	document.getElementById("textarea").value = "Texto de juego -> Simulacion";	
	        break;
	    case 2:
	    	document.getElementById("div").innerHTML = " Genero del disco: <select id='select2' onchange='segundoSelect();'><option value='4'>Pop</option>" +
	    			"<option value='5'>Rock</option><option value='6'>Latino</option><option value='7'>Otros</option></select>";
	    	document.getElementById("textarea").value = "Texto de disco -> Pop";
	        break;
	    default: document.getElementById("div").innerHTML = " Genero del video: <select id='select2' onchange='segundoSelect();'><option value='0'>Humor</option>" +
	        	"<option value='1'>Drama</option><option value='2'>Ficción</option><option value='3'>Otros</option></select>";
	    		document.getElementById("textarea").value = "Texto de video -> Humor";
		      
	}
}

function segundoSelect () {
	var servicio = document.getElementById("select2").value;

	switch(parseInt(servicio)) {
	    case 0:
	    	document.getElementById("textarea").value = "Texto de video -> Humor";
	        break;
	    case 1:
	    	document.getElementById("textarea").value = "Texto de video -> Drama";
	        break;
	    case 2:
	    	document.getElementById("textarea").value = "Texto de video -> Ficción";	
	        break;
	    case 3:
	    	document.getElementById("textarea").value = "Texto de video -> Otros";
	        break;
	    case 4:
	    	document.getElementById("textarea").value = "Texto de disco -> Pop";
	        break;
	    case 5:
	    	document.getElementById("textarea").value = "Texto de disco -> Rock";	
	        break;
	    case 6:
	    	document.getElementById("textarea").value = "Texto de disco -> Latino";
	        break;
	    case 7:
	    	document.getElementById("textarea").value = "Texto de disco -> Otros";
	        break;
	    case 8:
	    	document.getElementById("textarea").value = "Texto de juego -> Simulacion";	
	        break;
	    case 9:
	    	document.getElementById("textarea").value = "Texto de juego -> Rol";
	        break;
	    case 10:
	    	document.getElementById("textarea").value = "Texto de juego -> Medieval";
	        break;
	    case 11:
	    	document.getElementById("textarea").value = "Texto de juego -> Otros";	
	        break;
	    default: document.getElementById("textarea").value = "Texto de video -> Humor";
		      
	}
}