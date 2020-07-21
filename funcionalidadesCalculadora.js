(()=>{
     
    //Variebles de numeros
    var numero1 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n1');
    var numero2 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n2');
    var numero3 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n3');
    var numero4 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n4');
    var numero5 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n5');
    var numero6 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n6');
    var numero7 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n7');
    var numero8 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n8');
    var numero9 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n9');
    var numero0 = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .n0');
  
    var resultado = document.querySelector('.cajaCalculadora .cajaResultado .resultado');
  

    //Variables de operaciones
    var suma = document.querySelector('.cajaCalculadora .cajaBotones .cajaOperaciones .suma');
    var resta = document.querySelector('.cajaCalculadora .cajaBotones .cajaOperaciones .resta');
    var multiplicacion = document.querySelector('.cajaCalculadora .cajaBotones .cajaOperaciones .multiplicacion');
    var division = document.querySelector('.cajaCalculadora .cajaBotones .cajaOperaciones .division');
    var limpiarPantalla = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .c');
    var coma = document.querySelector('.cajaCalculadora .cajaBotones .cajaNumeros .fila .coma');
	var igual = document.querySelector('.cajaCalculadora .cajaIgualdad .igual');
	var retencion = document.querySelector('.cajaCalculadora .cajaResultado .retencion');
    
    //Variables para conseguir valores
    var valor1 = "0";
    var valor2 = "0";
    var tipoOperacion = "";
    var usoAns = false;
    
	
    //Eventos sobre los numeros
	numero1.addEventListener('click',()=>{
		resultado.innerHTML=resultado.innerHTML+"1";
	})

	numero2.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"2";
	})

	numero3.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"3";
	})
	numero4.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"4";
	})
	numero5.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"5";
	})
	numero6.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"6";
	})
	numero7.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"7";
	})
	numero8.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"8";
	})
	numero9.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"9";
	})
	numero0.addEventListener('click',()=>{
		resultado.innerHTML= resultado.innerHTML+"0";
	})
     
    //Eventos de operaciones
	suma.addEventListener('click',()=>{
		valor1 = resultado.innerHTML;
		retencion.innerHTML = valor1 + "+";
		resultado.innerHTML = "";
	    tipoOperacion = "suma";

	});

	resta.addEventListener('click', ()=>{
		valor1 = resultado.innerHTML;
		retencion.innerHTML = valor1 + "-";
		resultado.innerHTML = "";
		tipoOperacion = "resta";
	});

	multiplicacion.addEventListener('click',()=>{
		valor1 = resultado.innerHTML;
		retencion.innerHTML = valor1 + "*";
		resultado.innerHTML = "";
		tipoOperacion = "multiplicacion";
	});

	division.addEventListener('click', ()=>{
		valor1 = resultado.innerHTML;
		retencion.innerHTML = valor1 + "/";
		resultado.innerHTML = "";
		tipoOperacion = "division";
	});


	igual.addEventListener('click',()=>{
		valor2 = resultado.innerHTML;
		retencion.innerHTML = retencion.innerHTML + valor2
        realizarOperacion(valor1,valor2);

        

	});

    coma.addEventListener('click',()=>{
		resultado.innerHTML = resultado.innerHTML + ".";
	});



	limpiarPantalla.addEventListener('click',()=>{
		resultado.innerHTML="";
		retencion.innerHTML ="";
	});

	
    
    //Funciones auxiliares para las operaciones

    function realizarOperacion(valor1,valor2){
		if(tipoOperacion == "suma"){
           resultado.innerHTML = sumar(valor1, valor2);}
        else if(tipoOperacion == "resta"){
        	    resultado.innerHTML = restar(valor1, valor2);}
        else if(tipoOperacion == "multiplicacion"){
        	    resultado.innerHTML = multiplicar(valor1, valor2);}
        else{
        resultado.innerHTML = dividir(valor1, valor2);}
    };

	function sumar(numero1, numero2){
		var resultado = parseFloat(numero1)+ parseFloat(numero2);
		return resultado;
	};

	function restar(numero1,numero2){
		var resultado = parseFloat(numero1) - parseFloat(numero2);
		return resultado;
	};

	function multiplicar(numero1,numero2){
		var resultado = parseFloat(numero1) * parseFloat(numero2);
		return resultado;
	};

	function dividir(numero1,numero2){
		var resultado = parseFloat(numero1) / parseFloat(numero2);
		return resultado;
	};

})();