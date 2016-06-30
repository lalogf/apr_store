

checkout.codigo_comercio = "<%= ENV['CULQI_CODIGO_COMERCIO'] %>";
checkout.informacion_venta = "<%= @informacion_venta %>";


$('#btn_pago').on('click', function(e) {

// Abre el formulario de pago de Culqi.
checkout.abrir();

e.preventDefault();

});

//Esta función es llamada al terminar el proceso de pago.
//Debe de ser usada siempre, para poder obtener la respuesta.
function culqi (checkout) {

//Aquí recibes la respuesta del formulario de pago.
//Si el usuario cierra el formulario de pago
//checkout.respuesta tendrá en valor "checkout_cerrado"
//También puede tener el valor: "error", "parametro_invalido"
//Y si ha expirado, "venta_expirada"
$.ajax({
            url: '/users/'+ "<%= @case.user_id %>"+ '/charges/',
            type: 'POST',
            data: {
            	"charge": {
            		"response": checkout.respuesta,
            		"uuid": Math.random().toString(36).substring(20),
            		"user_id": "<%= @case.user_id %>"
            	}
            },
            success: function(data){
            	console.log(data);
            	window.location = "/users/"+ "<%= @case.user_id %>" +"/charges/" + data.uuid
                // var obj = data;
                // var tipo_respuesta_venta = obj['codigo_respuesta'];
                // if (tipo_respuesta_venta == "venta_exitosa") {
                //   checkout.cerrar();
                //   window.location = "/charges/4"
                // } 
                // // else if (tipo_respuesta_venta == "venta_expirada") {

                // } else if (tipo_respuesta_venta == "error") {

                // } else if (tipo_respuesta_venta == "parametro_invalido") {

                // } else {
                //     // Brindale un mensaje amigable al cliente
                //     // Puedes usar el mensaje que Culqi recomienda
                //     checkout.cerrar();
                // }
            },
            error:function(data){
            	console.log(data)
            	alert("Something went wrong");
            }
        });

// Cierra el formulario de pago de Culqi.
checkout.cerrar();

};
