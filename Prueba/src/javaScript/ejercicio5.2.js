
function conparar(a,b){
	if(ignoreCase){		
		a = a.toLowerCase();
		b = b.toLowerCase();
	}if(isNaN(a) || isNaN(a)){
		return (a == b ? 0:(a < b ? -1 : 1));
	}else{
		return a - b;
	}
}