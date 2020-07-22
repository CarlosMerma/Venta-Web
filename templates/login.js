function getData(){
         console.log("LOGIN USER");
    var username = $('#username').val();//getting username by id
    var password = $('#password').val();
    console.log ("DATA>",username,password)
    var credentials = {'username':username, 'password':password}
    $.ajax({
        url: '/authenticate',
        type : 'POST',
        dataType:'json',
        contentType:'application/json',
        async:false,
        success: function (data) {
            if (data['respuesta']=== "Logueado"){
                console.log("Authenticated!");
                alert("Authenticated!!!");
                window.location.href='/static/index.html';
            }
        },
        error: function(data){
            if(data['respuesta']==="Sorry"){
                console.log("No se puedo loguear")
                alert("No se pudo loguear!")
            }
        },
        data:JSON.stringify(credentials)
    });
    }

    function redirigir(){
           location.href= "/static/register.html";
    }