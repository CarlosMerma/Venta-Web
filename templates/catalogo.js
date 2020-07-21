var currentUserId = 0;

var currentClickedId = 0;



function usuario(){
        $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#cu_username').html(response['username'])
                var name = response['name']+" "+response['fullname'];
                currentUserId = response['id'];
                allcompras();
                allproductos();
            },
            error: function(response){
                alert("Ingrese primero");
                location.href= "/static/login.html";

            }
        });

    }


function allproductos(){
    $.ajax({
        url:'/productos',
        type:'GET',
        contentType: 'application/json',
        dataType:'json',
        success: function(response){
            //alert(JSON.stringify(response));
            var i = 0;
            $.each(response, function(){
                let card = '<div class="card col-12" "><div class="card-body"><h5 class="card-title">carname</h5><p class="card-text">precio , persona</p><button onclick()="comprar()">comprar</button></div></div>';
                card = card.replace(carname, response[i]['marca']);
                card = card.replace(precio, response[i]['precio']);
                card = card.replace(persona, response[i]['nombre']);
                i++;
                $('#sellers').append(card);
            });
        },
        error: function(response){
            alert(JSON.stringify(response));
        }
    });
}

function comprar(current, producto_id){
        $.ajax({
            url:'/compra',
            type:'POST',
            contentType: 'application/json',
            data : data,
            dataType:'json',
           success: function(response){
                location.href= "/static/catalogo.html"
            },
            error: function(response){
                location.href= "/static/catalogo.html"
            }
        });
}

function pagar(){
       alert("Gracias por su compra. \n Nos pondremos en Contacto para la entrega.");
       location.href="/static/index.html"
}