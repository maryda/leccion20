// tu codigo va aca
function callbackPromedio(callback) {
	// funcion se llama a si misma con la funcion callback, a la cual se le entregan 3 parametros
	// los cuales son las notas a promediar
   callback(2, 7, 4);
}

callbackPromedio(function(a, b, c){
	// esta funcion fue llamada a si misma con callback, la cual saca el promedio de notas,
	//con los parametros ya entregados anteriormente
	var promedio = 0;
	promedio = parseFloat((parseFloat(a) + parseFloat(b) + parseFloat(c))) / 3;
	console.log("El promedio es = " + promedio);
});

function segundero(segundo) {
   segundo();
}

segundero(function(){

	setInterval(sumaSegundo(), 1000);
});

var segu = 0;

function sumaSegundo(){
	segu = parseInt(segu) + 1;
	document.getElementById("titulo").innerHTML = segu;
}

