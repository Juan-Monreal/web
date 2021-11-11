<?php
    require 'database.php';

    session_start();

    $valido = false;

    if(isset($_POST['aceptar'])){
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];

        if (!validar_usuario($usuario, $contrasena, $conexion)) {
            $valido = false;
            $_SESSION = array();
            
            header('Location: /Web/3/roux_academy/login.php');
        }else{

            $valido = true;
            $_SESSION['usuario'] = $usuario;

            header('Location: /Web/3/roux_academy/index.php');
        }
    }
?>