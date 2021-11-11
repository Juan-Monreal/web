<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="/Web/3/roux_academy/css/style.css">

<title>Roux Conference</title>
</head>
<body id="page_home">
<div class="wrapper">
  <header id="cabecera" style="padding-top: 60px;">
    
    <div id="sesion">
      <label for=""><?php echo $_SESSION['usuario'];?></label><br>
      <button onclick="cerrar();">Cerrar sesion</button>
    </div>  

    <div class="branding brandAdmin cabeza"> <img src="/Web/3/roux_academy/images/ralogo_monogram.png" alt="Logo">
      <p>Roux Academy<br>
        Art • Media • Design</p>
    </div>
    <div class="description cabeza">
      <h1>Roux Academy 2016 Art Conference</h1>
      <p>Join over 500 hundred of the most creative and brilliant minds of art colleges all around the world for five days of lectures by world-renowned art scholars and artists, and seven days and nights of gallery exhibits featuring the best in contemporary art, including painting, sculpture, and more, in the beautiful halls of Hotel Contempo in the heart of Seattle.</p>
    </div>
    <nav>
      <ol>
        <li><a href="/Web/3/roux_academy/index.php">HOME</a></li>
        <li><a href="/Web/3/roux_academy/artists.php">ARTISTS</a></li>
        <li><a href="/Web/3/roux_academy/schedule/index.php">SCHEDULE</a></li>
        <li><a href="/Web/3/roux_academy/venue.php">VENUE/TRAVEL</a></li>
        <li><a href="/Web/3/roux_academy/register/index.php">REGISTER</a></li>
        <li><a href="/Web/3/roux_academy/asistentes.php">ASISTENTES</a></li>
      </ol>
    </nav>
  </header>

  <div id="rotator"><img src="/Web/3/roux_academy/images/art01.jpg" width="1000" height="320" alt="Artwork from show"></div>


  <script type="text/javascript">
    let cabecera = document.getElementById("cabecera");
    let confirmacion = document.createElement("div");

    function cerrar(){  
      confirmacion.innerHTML = "";
      let texto = document.createElement("h1");
      let opciones = document.createElement("div");
      opciones.innerHTML = "<form  method='post'>"+
                     "<input type='submit' name='logout' id='salir' value='Cerrar sesión' />"+
                     "<input type='button' value='cancelar' id='no' onclick='cancelar();' />"+
                      "</form>";

      texto.textContent = "¿Seguro que quieres cerrar sesión?";

      confirmacion.appendChild(texto);
      confirmacion.appendChild(opciones);
      confirmacion.setAttribute("id", "confirmacion");
      cabecera.appendChild(confirmacion);    
      
    }

    function cancelar(){
      confirmacion.innerHTML = "";
      cabecera.removeChild(confirmacion);
    }
    
  </script>


  <?php
    if(array_key_exists('logout',$_POST)){
      session_start();
      $_SESSION = array();
      session_destroy();
      header('Location: /Web/3/roux_academy/index.php');
    }
  ?>