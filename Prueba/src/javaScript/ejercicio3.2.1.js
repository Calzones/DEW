function paco(){
	document.getElementById("cara").style.display = 'none'; 
	document.getElementById("cruz").style.display = 'none'; 
}
 
function girarMoneda(){
	document.getElementById("cara").style.display = 'none'; 
	document.getElementById("cruz").style.display = 'none';

	var caraOCruz = Math.round(Math.random()*1);

	var tiempo = 250;
	var segundo = tiempo;
	for (i = 0; i < 6; i ++){
		setTimeout(function (){document.getElementById("cara").style.display = 'block'; document.getElementById("cruz").style.display = 'none';}, tiempo += segundo);
		setTimeout(function (){document.getElementById("cara").style.display = 'none'; document.getElementById("cruz").style.display = 'block';}, tiempo += segundo);
	}	
	
	setTimeout(function (){document.getElementById("cruz").style.display = 'none'; document.getElementById("cara").style.display = 'none';}, tiempo += segundo);
		
	if(caraOCruz == 0){
		setTimeout(function (){document.getElementById("cara").style.display = 'block'; alert("Ha salido cara");}, tiempo += segundo);
	}else{
		setTimeout(function (){document.getElementById("cruz").style.display = 'block'; alert("Ha salido cruz");}, tiempo += segundo);
	}
	var aVerQuePasa = 	function magiaPura(){
		var valor;
		var elem = document.getElementsByName('valor'); 
		for(i=0; i < elem.length; i++){
			if (elem[i].checked) { 
				valor = elem[i].value; 
			} 
		}
		if(valor == caraOCruz){
			alert("Has acertado!");
		}else{
			alert("Has fallado!");
		}
	};
	setTimeout(function (){aVerQuePasa();}, tiempo += segundo);
}