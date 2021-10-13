# Evidencia formativa 2.4 Calculador IMC con JS

Copia, ejecuta y analiza el siguiente código de ejemplo:


```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ejercicio javascript</title>
</head>
<body>
	<div>
		<label>Nombre: </label>
		<input type="text" name="" id="nombre">
	</div>

	<div>
		<label>Escuela: </label>
		<input type="text" name="" id="escuela">
	</div>

	<div>
		<input type="button" onclick="saludame();" name="" value="saludo">	
	</div>

	<h1 id="mensaje"> AQUI DEBE IR EL SALUDO</h1>

	<script type="text/javascript">
		
		function saludame(){
			let nombre = document.getElementById("nombre");
			let escuela = document.getElementById("escuela");
			let mensaje = document.getElementById("mensaje");
			mensaje.innerText = "Hola" + nombre.value + " como te va en " + escuela.value + "?";
		}
	</script>
</body>
</html>
```

Con base en el ejemplo anterior ealiza una página que calcule el IMC  empleando JavaScript.
¿Como se calcula el IMC?

https://www.clinicavespucio.cl/calculo-del-imc/

Ademas del IMC tu página debe interpretar para el paciente su estado (en que grupo se encuentra, cual es su situación)