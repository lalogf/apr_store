class OrdersController < ApplicationController
	def show
		@user = User.find(params[:user_id])
		@order = Order.find(params[:id])
		culqi = Culqi.default_client
		datos_venta = {
			codigo_comercio: ENV['CULQI_CODIGO_COMERCIO'],
			numero_pedido: @order.order_number,
			moneda: 'PEN',
			monto: (@order.subtotal + @order.shipping).to_i*100,
			descripcion: "Case personalizado",
			correo_electronico: @user.email,
			cod_pais: 'PE',
			ciudad: @order.shippings.last.province,
			direccion: @order.shippings.last.address,
			num_tel: @order.shippings.last.phone,
			id_usuario_comercio: @user.id,
			nombres: @user.name,
			apellidos: @user.last_name
		}

		@venta = culqi.crear_venta(datos_venta)
		@informacion_venta = @venta['informacion_venta']
		
	end
end
