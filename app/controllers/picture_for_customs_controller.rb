class PictureForCustomsController < ApplicationController
	before_action :authenticate_user! , only: [:show]

	def index
		@pictures = PictureForCustom.all
	end
	
	def new
		@picture = PictureForCustom.new
		@colors = FlatColor.all
		@custom_product = CustomProduct.new
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
	     	if current_user
	     		@picture.user_id = current_user.id	
	     	end
	     	respond_to do |format| 
	     		if @picture.save
					# TODO cambiar posición de mail de confirmación 
					# UserMailer.purchase_confirmation(current_user, @picture).deliver
					# flash[:success] = "Mira el case que creaste"
					format.html {redirect_to picture_for_custom_path(@picture.uuid)}
				end
			end

	end
	def show

		@case = PictureForCustom.find_by_uuid(params[:id])
		@order = current_order
		@order.subtotal = @case.phonetype.base_price.to_f
		@order.order_number = SecureRandom.hex(4)
		@order.user_id = current_user.id
		@order.save
    	session[:order_id] = @order.id
		if !@case.user_id
				@case.user_id = current_user.id
			@case.save
		end
		UserMailer.purchase_confirmation(current_user, @case).deliver
	end

	def shipping
		@order = current_order
		@order.shipping = params[:envio]
		@order.save
		if !current_user.last_name
			current_user.last_name = params[:apellido]
			current_user.save
		end
		@shipping = Shipping.create(order_id: @order.id, address: params[:address], department: params[:departamento],province: params[:provincia],district: params[:distrito], country: params[:country], phone: params[:celular])
		redirect_to user_order_path(current_user,@order)		
	end

	private
end
