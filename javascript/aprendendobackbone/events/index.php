<html>
    <head>
         <link rel="stylesheet"  href="../bower_components/twitter/dist/css/bootstrap.css">
    </head>
    
    <body>
        
        <h1>Minhas Tarefas</h1>
        <form id="inserirTarefa" class="form-inline" action="">
             <div class="form-group">
            <input type="text" class="form-control" name="tarefa" id="tarefa"/>
          <button type="submit" class="btn btn-success" >Adicionar Tarefa!</button>
             </div>
              
        </form>
        <div class="tarefas">
            <script id="tarefaTemplate" type="text/template">
              <span><%= title %></span>
             <button class="edit btn btn-small"> <span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button>
             <button class="delete btn btn-small" > <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
            </script>
        </div>
        
        <script src="../bower_components/underscore/underscore.js"></script>
        <script src="../bower_components/jquery/dist/jquery.js"></script>
        <script src="../bower_components/backbone/backbone.js"></script>
       
        
        <script src="main.js"></script>
        
        
        
    

    </body>
    
    
</html>