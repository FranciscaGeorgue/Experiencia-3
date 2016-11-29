<?php

// Función para evitar inyecciones
function Filtro($texto) {
  return htmlspecialchars(trim($texto), ENT_QUOTES | ENT_HTML5);
}

// Variables
$enviado = isset($_POST['enviado']) ? (int) $_POST['enviado'] : 0;
$titulo = isset($_POST['titulo']) ? Filtro($_POST['titulo']) : '';
$unidades = isset($_POST['unidades']) ? (int) $_POST['unidades'] : 0;
$instrucciones = isset($_POST['instrucciones']) ? Filtro($_POST['instrucciones']) : '';

$error = '';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Encuesta candidatos Valparaiso">
  <meta name="keywords" content="html, bootstrap, php, formulario, desarrollo, web">
  <meta name="author" content="Alfonso Prado  y Francisca Georgue">
  <title>Formulario enviado</title>
  <!-- Bootstrap Core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom CSS -->
  <link href="css/simple-sidebar.css" rel="stylesheet">
</head>
<body>
<div class="container">
  <span style="padding-top: 10px;"></span>
<?php
// Mostrar contenido
    
if($enviado == 0) {
?>
<div class="alert alert-info">
  <i class="glyphicon glyphicon-info-sign"></i>
  <?php echo "No tiene permiso para abrir resultados." ?>
</div>
<a href="./" class="btn btn-warning">
  <i class="glyphicon glyphicon-chevron-left"></i>
  Volver
</a>
<?php 
} else {
    if(empty($titulo)) {
        $error = $error . 'Por favor, ingrese nombre de pelicula. <br />';
    } else if (!(strtolower($titulo) == "matrix" || strtolower ($titulo) == "psicosis")) {
        $error = $error . 'Solo contamos con la pelicula matrix y psicosis. <br />';
    }
    if(empty($unidades)) {
        $error = $error . 'Por favor, ingrese una cantidad de peliculas a arrendar. <br />';
    } else if (strtolower($titulo) == "matrix" && $unidades > 2) {
        $error = $error . 'Lo sentimos solo contamos con 2 peliculas Matrix. <br />';
    } else if (strtolower($titulo) == "psicosis" && $unidades > 3) {
        $error = $error . 'Lo sentimos solo contamos con 3 peliculas Psicosis. <br />';
    }
    if(empty($instrucciones)) {
        $error = $error . 'Por favor, instrucciones de despacho. <br />';
    } 

    // Vista de error
    if(!empty($error)) {
    ?>
    <div class="alert alert-info">
      <i class="glyphicon glyphicon-info-sign"></i> <b>No a ingresado los campos obligatorios.</b><br />
      <?php echo $error; ?>
    </div>
    <a href="./" class="btn btn-warning">
      <i class="glyphicon glyphicon-chevron-left"></i>
      Volver
    </a>
    <?php
    }
    else {
    ?>
    <br>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Datos enviados</h3>
    </div>
    <div class="panel-body">
      <p>¡Muchas gracias!</p>
      <p>Usted a registrado un arriendo con la siguiente información:</p>
      <ul>
          <li>Título de película: <?php echo $titulo; ?></li>
          <li>Unidades: <?php echo $unidades; ?></li>
          <li>Instrucciones: <?php echo $instrucciones; ?></li>
      </ul>
    </div>
    <div class="panel-footer">
      <div class="text-right">
        <a href="formulario.html" class="btn btn-primary">
          <i class="glyphicon glyphicon-chevron-left"></i>
          Volver
        </a>
      </div>
    </div>
  </div>
    <?php
    }
}
?>
  <!-- Pie de página -->
  <footer>
    <div class="text-center">
      <i class="glyphicon glyphicon-leaf"></i>
      Desarrollado por Alfonso Prado y Francisca Georgue
    </div>
  </footer>
</div>
   
<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>
</body>
</html>