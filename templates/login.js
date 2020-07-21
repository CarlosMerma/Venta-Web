function getData(){
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //$('#action').html(response['statusText']);
                alert("usuario logueado")
                location.href="/static/catalogo.html"
            },
            error: function(response){
                if(response['status']===401){
                    alert("Usuario no registrado");
                     document.getElementById("username").value="";
                     document.getElementById("password").value="";
                }else{
                    location.href= "/static/register.html";
                }
            }
        });
    }


    function redirigir(){
           location.href= "/static/register.html";
    }
