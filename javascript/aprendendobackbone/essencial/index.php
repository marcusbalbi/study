<html>
    <head>
        
    </head>
    
    <body>
        <script id="pessoaTemplate" type="text/template">
            <strong><%= nome %></strong> (<%= idade %>) - <%= ocupacao %>
        </script>
        
        <script src="../bower_components/underscore/underscore.js"></script>
        <script src="../bower_components/jquery/dist/jquery.js"></script>
        <script src="../bower_components/backbone/backbone.js"></script>
        
        <script src="models/pessoas.js"></script>
        <script src="Consultas/Consultas.js"></script>
        <script src="Consultas/Models/MarcacaoConsulta.js"></script>
        
    
        <script>
        
        var marcacaoConsulta = new Consultas.Models.MarcacaoConsulta({ data : new Date() });
        
        </script>    
    </body>
    
    
</html>