var socket = io.connect('http://localhost:8000');
        socket.on('chat',function(data){
          document.getElementById('chat').innerHTML += '<p><b>' + data.title + '</b> : ' + data.content + '</p>';
        });
        
        var submitChat = function(form){
           socket.emit('chat', {text: form.chat.value});
           return false;
        };