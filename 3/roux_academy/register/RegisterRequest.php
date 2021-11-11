<?php
    include("../database.php"); 
    $name = $_POST['myname'];
    $company = $_POST['companyname'];
    $email = $_POST['myemail'];
    $comment = $_POST['mycomments'];
    $subscription = $_POST['subscribe'];
    $reference = $_POST['reference'];


    
    $record = "INSERT INTO assistances VALUES(NULL, '$name', '$company', '$email', '$comment', '$subscription', '$reference')"; 

    $validated = mysqli_query($conn, $record); 

    header("location: /Web/3/roux_academy/index.php"); 