@extends('app')

@section('content')
<div class="container">
    <h1>BackBOne Tarefas</h1>
</div>
@endsection

@section('js')
<script>
    
    (function(){
        
        window.App = {
            
            Models : {},
            Views : {},
            Collections : {}
            
        };
        
        App.Models.Tarefa = Backbone.Model.extend({
            
            defaults : {
                'id' : 0,
                'title' : '',
                'completed' : '',
                'created_at' : '',
                'updated_at' : ''
            },
            
            urlRoot : 'tarefas'
            
        });
        
    })();
    
</script>
@endsection
