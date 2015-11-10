function lanzarConfirm(){
	try{

		var roto = rom + pido;
	}catch(unaVezRoto){
		var valorConfirm = confirm("Pueden hacer clicen Aceptar para continuar viendo la pagina o en cancelar para volver a la pagina principal");
		if (!valorConfirm) {
   			document.write("Estas siendo redirigido");
		}
	}
}