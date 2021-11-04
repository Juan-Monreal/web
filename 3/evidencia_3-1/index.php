<?php
$val = '';
$result = '';
$weight = 70;
$height = 171;
if (isset($_POST['start'])) {
	$height = $_POST['height'];
	$weight = $_POST['weight'];
	start($weight, $height);
}

function bmi($weight, $height)
{
	return $weight / (($height) / 100) ** 2;
}

function classification($bmi)
{
	if ($bmi < 18.50)
		return "Bajo peso";
	else if ($bmi < 25.00)
		return "Normal";
	else if ($bmi < 30.00)
		return "Sobrepeso";
	else
		return "Obeso";
}


function start($weight, $height)
{
	$val = bmi($weight, $height);
	$result = classification($val);
	$GLOBALS['val'] = strval(number_format($val, 5));
	$GLOBALS['result'] = $result;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Calculadora IMC</title>
	<link rel="stylesheet" type="text/css" href="../../2/evidencia_2-4/style.css">
</head>

<body>
	<header class="header">
		<h1>CALCULADORA IMC</h1>
	</header>
	<div class="container">
		<main class="main">
			<section class="card">
				<form method="POST">
					<h2>Datos</h2>
					<label>Peso Kg: </label>
					<input type="number" min="1" name="weight" id="weight" value="<?php echo (isset($weight)) ? $weight : 0 ?>">
					<label>Altura cm: </label>
					<input type="number" name="height" min="1" id="height" value="<?php echo (isset($height)) ? $height : 0 ?>">
					<input type="submit" name="start" id="start" value="Calcular">
				</form>
			</section>
			<section class="card">
				<h2>Resultados</h2>
				<label>IMC: </label>
				<p class="result" id="BMI"><?php echo (isset($val)) ? $val : '' ?></p>
				<label>Categoria: </label>
				<p class="result" id="category"><?php echo (isset($result)) ? $result : '' ?></p>
			</section>
		</main>

		<aside class="sidebar">
			<img src="../../2/evidencia_2-4/body.png" alt="body" class="image">
		</aside>
	</div>
</body>

</html>