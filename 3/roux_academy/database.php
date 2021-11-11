<?php

    $bd = 'roux_academy';
    $server = 'localhost';
    $user = 'roux_user';
    $pass = '';

    $conexion=mysqli_connect($server, $user, $pass, $bd);

    if(!$conexion){
        die("Fallo la conexion  la base de datos $bd ". mysqli_connect_error());
    }

    function validar_usuario($usuario, $contrasena, $conexion){
        $query = "SELECT 1 AS user_valido FROM users WHERE name = '$usuario' AND pass = MD5('$contrasena')";
        $record = mysqli_query($conexion, $query) or die("Error al ejecutar la consulta");

        if(mysqli_num_rows($record)==0){
            return false;
        }else{
            return true;
        }
    }

?>