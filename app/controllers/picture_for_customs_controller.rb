class PictureForCustomsController < ApplicationController
	# before_action :authenticate_user! , only: [:show]
	def index
		@pictures = PictureForCustom.all
	end
	
	def new
		@picture = PictureForCustom.new
		@colors = FlatColor.all
		@custom_product = CustomProduct.new

		# @user = current_user
		@phonetype = Phonetype.find(3)
	end


	def create

		case_random_code = SecureRandom.hex(4)
		@trial = Phonetype.find(params[:phone_type_name])
		file_name = "case_" + case_random_code + "_" + Phonetype.find(params[:phone_type_name]).modelName.delete(' ') + Phonetype.find(params[:phone_type_name]).type_of_case
		file_name_to_print = "imagen_para_imprimir_" + case_random_code
		base_64_string = params[:picture_url].split('data:image/png;base64,')[1]
		base_64_string_for_printing = params[:image_to_print].split('data:image/png;base64,')[1]
		File.open(file_name, 'wb') do |f|
			f.write(Base64.decode64(base_64_string))
		end
		File.open(file_name_to_print, 'wb') do |f|
			f.write(Base64.decode64(base_64_string_for_printing))
		end
		new_file = File.open(file_name)
		new_file_for_printing = File.open(file_name_to_print)
		@picture = PictureForCustom.create(picture: new_file, uuid: case_random_code,phonetype_id: @trial.id )
		@image_to_print = CustomProduct.create(picture: new_file_for_printing, picture_for_customs_id: @picture.id)
		respond_to do |format| 
			if @picture.save
				# TODO cambiar posición de mail de confirmación 
				#UserMailer.purchase_confirmation(current_user, @picture).deliver
				flash[:success] = "Mira el case que creaste"
				format.html {redirect_to picture_for_custom_path(@picture.uuid)}
			end
		end
	end
	def show
		@case = PictureForCustom.find_by_uuid(params[:id])
		if !@case.user_id
			@case.user_id = current_user.id
			@case.save
		end
		
		culqi = Culqi.default_client
		datos_venta = {
			codigo_comercio: ENV['CULQI_CODIGO_COMERCIO'],
			numero_pedido: SecureRandom.hex(4),
			moneda: 'PEN',
			monto: @case.phonetype.base_price*100,
			descripcion: "Case personalizado para " + @case.phonetype.modelName + " en acabado " + @case.phonetype.type_of_case,
			correo_electronico: current_user.email,
			cod_pais: 'PE',
			ciudad: 'Lima',
			direccion: 'Av Javier Prado 2320, San Borja',
			num_tel: '986976309',
			id_usuario_comercio: current_user.id,
			nombres: current_user.name,
			apellidos: current_user.name
		}

		@venta = culqi.crear_venta(datos_venta)
		@informacion_venta = @venta['informacion_venta']

	end


	private
end
