function piramide(){
	var i = 1;
	while(i < 51){
		for(j = 1; j < (i+1) ; j++){
			document.write(j);		
		}			
		i++;	
		document.write("<br>");
	}	
}