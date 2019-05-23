validarCamposObli();
validarCedula();
validarSoloLetras();
validarSoloLetras1();
validarSoloNumero();
validarCorreo();

function validarCamposObli(formulario01){
	var verdad = false;

	if(validarCedula()==false){
			window.document.getElementById("cedula").innerHTML = "<p>Cedula Incorrecta</p>"
			console.info("mal echo");
		 
			
	}
	else{
			 window.document.getElementById("cedula").innerHTML = "<p></p>"
			
	}
	if(validarSoloLetras()==false){
			window.document.getElementById("nombre").innerHTML = "<p>Nombres mal Ingresados</p>"
			console.info("mal echo");
		 
			
	}
	else{
			 window.document.getElementById("nombre").innerHTML = "<p></p>"
		 
	}
	if(validarSoloLetras1()==false){
			window.document.getElementById("apellido").innerHTML = "<p>Apellidos mal  Ingresados</p>"
			console.info("mal echo");
			 
			
	}
	else{
			 window.document.getElementById("apellido").innerHTML = "<p></p>"
			
			
	}

	if(validarSoloNumero() ==false){
			window.document.getElementById("telefono").innerHTML = "<p>Telefono mal ingresada</p>"
			console.info("mal echo");
			
			
	}
	else{
window.document.getElementById("telefono").innerHTML = "<p></p>"

	}
	
	if(validarCorreo()==false){
			windows.document.getElementById('correo').innerHTML="<p>Correo  incorrecta</p>"
			console.info("mal echo");

	}else{
			window.document.getElementById('correo').innerHTML="<p></p>"
	}
	
}

/*function validarCamposObli(formulario){
	var cont = 0;
	for (var i =0; i < formulario.length-1; i++){
		var elemento = formulario.elements[i];
		
		if(elemento.value == null || elemento.value == ''){
			cont++
			elemento.style.border = "2px solid red";
			
		}
	}
	

		if(validarCedula()  == true){
			cont++
		}else {
			return false;
		}
		
		if(validarSoloLetras1()  == true){
			cont++
		}else {
			return false;
		}
			
			
		if(validarSoloLetras()  == true){
			cont++
		}else {
			return false;
		}
		
		if(validarSoloNumero()  == true){
			cont++
		}else {
			return false;
		}
		if(validarCorreo()  == true){
			cont++
		}else {
			return false;
		}
		//alert (cont)
		if (cont == 5){
			return true; 
		}else{return false }
		
		
		return false;
	
	
}*/

function isDate(ExpiryDate) { 
	var objDate,  // date object initialized from the ExpiryDate string 
			mSeconds, // ExpiryDate in milliseconds 
			day,      // day 
			month,    // month 
			year;     // year 
	// date length should be 10 characters (no more no less) 
	if (ExpiryDate.length !== 10) { 
		 fech=false;
			return false;
	 
	} 
	// third and sixth character should be '/' 
	if (ExpiryDate.substring(2, 3) !== '/' || ExpiryDate.substring(5, 6) !== '/') { 
			fech=false;
			return false; 
	} 
	// extract month, day and year from the ExpiryDate (expected format is mm/dd/yyyy) 
	// subtraction will cast variables to integer implicitly (needed 
	// for !== comparing) 
	month = ExpiryDate.substring(0, 2) - 1; // because months in JS start from 0 
	day = ExpiryDate.substring(3, 5) - 0; 
	year = ExpiryDate.substring(6, 10) - 0; 
	// test year range 
	if (year < 1000 || year > 3000) { 
			fech=false;
			return false; 
	} 
	// convert ExpiryDate to milliseconds 
	mSeconds = (new Date(year, month, day)).getTime(); 
	// initialize Date() object from calculated milliseconds 
	objDate = new Date(); 
	objDate.setTime(mSeconds); 
	// compare input date and parts from Date() object 
	// if difference exists then date isn't valid 
	if (objDate.getFullYear() !== year || 
			objDate.getMonth() !== month || 
			objDate.getDate() !== day) { 
					fech=false;
			return false; 
	} 
	// otherwise return true 
	fech=true;
	return true; 
}
 



function validarCedula(){
	
		var numero = document.getElementById('cedula').value.trim();
        var total = 0;
        var longitud = numero.length;
        var checkLongitud = longitud - 1;
		
				if (numero != '' && longitud == 10){
          for(var i = 0; i < checkLongitud; i++){
			  
            if (i%2 == 0) {
				
              var aux = numero.charAt(i) * 2;
			   
              if (aux > 9)
				aux -= 9;
				total += aux;
				
            } else {
              total += parseInt(numero.charAt(i));
            
			}
          }

          total = total % 10 ? 10 - total % 10 : 0;
		  
          if (numero.charAt(longitud-1) == total && total!=0) {
						cedula.style.borderColor="green";
						//document.getElementById('salida').innerHTML = 'Cedula Válida';
			return true;
          }else{
						cedula.style.borderColor="red";
			 // document.getElementById('salida').innerHTML = 'Cedula Inválida';
			return false;
          }
        }else{
					cedula.style.borderColor="red";
			//document.getElementById('salida').innerHTML = 'debe ingresar 10 numeros ';
			return false;
			
		  }

	
}

function validarSoloLetras(){


	var valor2 = document.getElementById('nombre').value;


	var contar=0;
	var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	
	for( var a=0; a<mayusculas.length; a++){
		for (var b=0; b<valor2.length; b++){
			if (valor2[b]==mayusculas[a]){
				contar+=1;
			}
		}
	}
			
			 if(contar==1){
				nombre.style.borderColor="red";
				//document.getElementById('salida2').innerHTML = 'Nombre incorrecto';
				return true;
	
			}else if (contar==2){
				nombre.style.borderColor="green";
			//	document.getElementById('salida2').innerHTML = 'nombre correcto';
				return false;
			}else if(contar >=3){
				apellido.style.borderColor="red";
			//	document.getElementById('salida2').innerHTML = 'nombre incorrecto';
				return false;
			}
	
	}

function validarSoloLetras1(){
	
	var valor2 = document.getElementById('apellido').value;


	var contar=0;
	var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	
	for( var a=0; a<mayusculas.length; a++){
		for (var b=0; b<valor2.length; b++){
			if (valor2[b]==mayusculas[a]){
				contar+=1;
			}
		}
	}
			
			 if(contar==1){
				apellido.style.borderColor="red";
				//document.getElementById('salida2').innerHTML = 'Nombre incorrecto';
				return true;
	
			}else if (contar==2){
				apellido.style.borderColor="green";
			//	document.getElementById('salida2').innerHTML = 'nombre correcto';
				return false;
			}else if(contar >=3){
				apellido.style.borderColor="red";
			//	document.getElementById('salida2').innerHTML = 'nombre incorrecto';
				return false;
			}
	
}

function validarSoloNumero(){
	
	var valor = document.getElementById('telefono').value;
	var texto = valor / valor;
	
	if (texto == 1 && valor.length < 11 && valor.length >9 ){
		telefono.style.borderColor="green";
		//document.getElementById('salida3').innerHTML = 'Edad correcta';
		return true;
		
		
	}else {
		telefono.style.borderColor="red";
		//document.getElementById('salida3').innerHTML = 'Edad incorrecta';
		return false;
	}
	
}

function validarCorreo(){
	var cadena = document.getElementById('correo').value;


	if (cadena.indexOf("@est.ups.edu.ec", 0) <0)
	{
		correo.style.borderColor="red";
		//document.getElementById('salida4').innerHTML = ' correo incorrecto';
		return false;
	}else{
		correo.style.borderColor="green";
		//document.getElementById('salida4').innerHTML = 'correo correcto';
		return true;
	}


}

