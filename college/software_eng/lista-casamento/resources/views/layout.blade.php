<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
<script
  src="http://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
 <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        <title>Lista de Casamento</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Lista de Casamento</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/casais">Casais</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/sair">Sair</a></li>
            </ul>
            </div>
        </nav>
    <div class="container">
        @yield('content')
    </div>
    </body>
</html>
