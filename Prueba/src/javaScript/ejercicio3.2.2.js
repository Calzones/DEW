function juegar(){
	escuender();
	blanqueador();
	var valor = dondeSeObraLoInObrable();
	yira(randomicidad(valor), parseInt(valor));
}

function randomicidad(valor){
	ranmdezTercero = Math.round(Math.random()*4);
	return ranmdezTercero;
}

function comprobatron2000(maquina, jumano){

	switch(maquina){
		case 0: 
			suiichePiedra(jumano);
			break;
		case 2:
			suiichePapel(jumano);
			break;
		case 4:
			suiicheTijeras(jumano);
			break;
		case 3:
			suiicheLagarto(jumano);
			break;
		case 1:
			suiicheSpock(jumano);
			break;
	}	
}

function alertaCobra(){
	mostra("Se ha producido un empate :(");
}

function suiichePiedra(jumano){

	switch(jumano){
		case 1: 
			mostra("Spock vaporiza piedra    Has ganado!!");
			break;
		case 2:
			mostra("Papel tapa piedra    Has ganado!!");
			break;
		case 3:
			mostra("Piedera aplasta lagarto    Has Perdido!!");
			break;
		case 4:
			mostra("Piedra aplasta tijeras    Has perdido!!");
			break;
		default:alertacobra();
	}
}

function suiichePapel(jumano){
	switch(jumano){
		case 0: 
			mostra("Papel tapa piedra    Has perdido!!");
			break;
		case 1:
			mostra("Papel desautoriza a Spock    Has perdido!!");
			break;
		case 3:
			mostra("Lagarto devora papel    Has ganado!!");
			break;
		case 4:
			mostra("Tijeras cortan papel    Has ganado!!");
			break;
		default:alertacobra();
	}
}

function suiicheTijeras(jumano){
	switch(jumano){
		case 0: 
			mostra("Piedra aplasta tijeras    Has ganado!!");
			break;
		case 1:
			mostra("Spock rompe tijeras    Has ganado!!");
			break;
		case 2:
			mostra("Tijeras cortan papel    Has perdido!!");
			break;
		case 3:
			mostra("Tijeras decapitan lagarto    Has perdido!!");
			break;
		default:alertacobra();
	}
}

function suiicheLagarto(jumano){
	switch(jumano){
		case 0: 
			mostra("Piedra aplasta lagarto    Has ganado!!");
			break;
		case 1:
			mostra("Lagarto envenena Spock    Has perdido!!");
			break;
		case 2:
			mostra("Lagarto devora papel  Has perdido!!");
			break;
		case 4:
			mostra("Tijeras decapita Lagarto    Has ganado!!");
			break;
		default:alertacobra();
	}	
}

function suiicheSpock(jumano){
	switch(jumano){
	
		case 0: 
			mostra("Spock vaporiza piedra    Has perdido!!");
			break;
		case 2:
			mostra("Papel desautoriza Spock    Has ganado!!");
			break;
		case 3:
			mostra("Lagarto envenena Spock    Has ganado!!");
			break;
		case 4:
			mostra("Spock rompe tijera    Has perdido!!");
			break;
		default:alertacobra();
	}	
}

function mostra(testo){
	document.getElementById("texto").value = testo;
}

function yira(si, yno){

	var tiempo = 250;
	var segundo = tiempo;
	for (i = 0; i < 3; i ++){
		setTimeout(function (){escuender(); document.getElementById("piedra").style.display = 'block'; }, tiempo += segundo);
		setTimeout(function (){escuender(); document.getElementById("papel").style.display = 'block';}, tiempo += segundo);
		setTimeout(function (){escuender(); document.getElementById("tijeras").style.display = 'block';}, tiempo += segundo);
		setTimeout(function (){escuender(); document.getElementById("lagarto").style.display = 'block';}, tiempo += segundo);
		setTimeout(function (){escuender(); document.getElementById("spock").style.display = 'block';}, tiempo += segundo);
	}	
	
	setTimeout(function (){escuender();}, tiempo += segundo);
	
	switch(si){
		case 0: 
			setTimeout(function (){document.getElementById("piedra").style.display = 'block';}, tiempo += segundo);
			break;
		case 2:
			setTimeout(function (){document.getElementById("papel").style.display = 'block';}, tiempo += segundo);
			break;
		case 4:
			setTimeout(function (){document.getElementById("tijeras").style.display = 'block';}, tiempo += segundo);
			break;
		case 3:
			setTimeout(function (){document.getElementById("lagarto").style.display = 'block';}, tiempo += segundo);

			break;
		case 1:
			setTimeout(function (){document.getElementById("spock").style.display = 'block';}, tiempo += segundo);
			break;
	}
	setTimeout(function (){comprobatron2000(si, yno);}, tiempo += segundo);
}

function escuender(toLoGordo){
	document.getElementById("lagarto").style.display = 'none'; 
	document.getElementById("papel").style.display = 'none'; 
	document.getElementById("piedra").style.display = 'none'; 
	document.getElementById("tijeras").style.display = 'none'; 
	document.getElementById("spock").style.display = 'none'; 
}

function escuender2ElRetorno(){
	document.getElementById("lagarto1").style.display = 'none'; 
	document.getElementById("papel1").style.display = 'none'; 
	document.getElementById("piedra1").style.display = 'none'; 
	document.getElementById("tijeras1").style.display = 'none'; 
	document.getElementById("spock1").style.display = 'none'; 
}

function blackMagic(){
	var valor = dondeSeObraLoInObrable();
	switch(parseInt(valor)){
		case 0: 
			valor = "piedra";
			break;
		case 2:
			valor = "papel";
			break;
		case 4:
			valor = "tijeras";
			break;
		case 3:
			valor = "lagarto";
			break;
		case 1:
			valor = "spock";
			break;
	}
	escuender();
	blanqueador();
	escuender2ElRetorno();
	document.getElementById(valor + "1").style.display = 'block'; 
}

function dondeSeObraLoInObrable(){
	var valor;
	var elem = document.getElementsByName('valor'); 
    for(i=0; i < elem.length; i++){
        if (elem[i].checked) { 
            valor = elem[i].value; 
        } 
	}
	return valor;
}

function blanqueador(){
	mostra("");
}