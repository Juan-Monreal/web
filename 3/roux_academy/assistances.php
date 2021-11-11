<?php
    include("database.php");

    session_start();
    if(isset($_SESSION['usuario'])){
    include("layouts/admin.php");
?>
        <body>
            <h1>Lista asistentes</h1>
            <table class="asistentes">
                <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Comment</th>
                    <th>Subscription</th>
                    <th>Reference</th>
                </tr>
                <?php
                    $consulta = "SELECT * FROM assitances";
                    $validacion = mysqli_query($conexion, $consulta);
                    while($record = mysqli_fetch_array($validacion)){
                ?>

                    <tr>
                        <td> <?php echo $record['name']?></td>
                        <td> <?php echo $record['company']?></td>
                        <td> <?php echo $record['email']?></td>
                        <td> <?php echo $record['comment']?></td>
                        <td> <?php echo $record['subscription']?></td>
                        <td> <?php echo $record['reference']?></td>
                    </tr>
                <?php
                    }
                ?>

            </table>

<?php } else{ ?>
            <?php include("layouts/header.php")?>
            <h1>Acceso restringido, solo administradores</h1>
<?php } 

    include("layouts/footer.php")
?>