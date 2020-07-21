function login() {
    console.log("LOGIN USER");
    var username = $('#username').val();//getting username by id
    var password = $('#password').val();
    console.log ("DATA>",username,password)
    var credentials = {'username':username, 'password':password}
    $.ajax({
        url: '/authenticate',
        type : 'post',
        dataType:'json',
        contentType:'application/json',
        async:false,
        success: function (data) {
            if (data['respuesta']== "Logueado"){
                console.log("Authenticated!");
                alert("Authenticated!!!");
                location.href='/static/catalogo.html';
            }
        },
        data:JSON.stringify(credentials)
    });
}

    function redirigir(){
           location.href= "/static/register.html";
    }
