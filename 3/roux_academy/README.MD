# Evidencia de producto u3

Complementa el proyecto Roux Academy que has venido ya trabajando.  en los parciales anteriores agregando lo siguiente:


Con base en las opciones del menú completa el registro (Register) guardando en una base de datos la información de las personas interesadas en acudir al evento.
Agrega una nueva página al sitio llamada "Asistentes". En ella deben aparecer una tabla con la lista de todos los asistentes registrados (en el punto 1) para acudir al evento. Muestra la misma información que fue capturada por los campos del formulario.  Esta página solo debe verla el administrador(es) del sistema . No olvides agregarla al menú
Agrega al menu una opción para logearse o acceder que te lleve a una página de login para usuarios administradores. Asegurate de colocar en tu base de datos una tabla de usuarios. En ella coloca(al menos) un usuario "admin" con la contraseña "superadmin". Encripta las contraseñas (Usa función MD5*. Ejemplo Insert into users(nombre,contrasena) values('Juan Perez',MD5('Micontrasena')).
Asegurate que solo usuarios administradores puedan visualizar la nueva página "Asistentes".
Si un administrador ha accedido, coloca su nombre y una opción para cerrar sesión en alguna parte del encabezado o menú
Coloca algún mensaje o página de confirmación del cierre de la sesión
Modifica la página "Artists". Crea en la BD una tabla llamada artistas con al menos los siguientes campos: nombre, descripción y foto. Guarda en cada uno de ellos la información correspondiente. En el campo de foto guarda la url(ruta) donde se localiza la foto. Asegurate de que toda la información de los artistas no esté fija en tu página sino sea leída de la base de datos. Demuestra esto agregando un nuevo registro a la tabla de la base de datos para un nuevo artista, el cual se debe desplegar en la página. Obviamente las imágenes deben estar localizadas y tener el nombre conforme la ruta que se guarde en el campo foto de la base de datos
A cada nueva página que agregues al sitio reutiliza los mismos encabezados, pie de página, menú, etc empleados en las páginas originales.

### ENTREGABLES: 
Archivo ZIP con carpeta del proyecto incluyendo el script de la base de datos generada
Publicación del sitio en tu portafolio web
### NOTA: 
*la función MD5 siempre genera una clave de 32 caracteres, por lo que la columna en la tabla al menos debe de ser de esa longitud
Adjunto encontrarán dos videotutoriales sobre el uso de las sesiones en PHP