<?php
session_start();
if (isset($_SESSION['usuario'])) {
    include("layouts/admin.php");
} else {
    include("layouts/header.php");
}
?>
<div style="margin-top: 20px;"></div>
<article id="registrationform">
    <form action="contrller.php" method="post">
        <fieldset>
            <legend>Login</legend>
            <ol>
                <li>
                    <label for="usuario">User:</label>
                    <input type="text" name="usuario" placeholder="user" required autofocus>
                </li>
                <li>
                    <label for="contrasena">Password:</label>
                    <input type="password" name="contrasena" placeholder="password" required>
                </li>
            </ol>
            <input type="submit" value="Login" name="aceptar">
        </fieldset>
        <?php
        if (!$valido && isset($_POST['aceptar'])) {
            echo '<p>Usuario y/o contraseñas no valido</p>';
        }
        ?>
    </form>
</article>
<div style="margin-top: 20px;"></div>
<?php include("layouts/footer.php") ?>