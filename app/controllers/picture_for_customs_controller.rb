class PictureForCustomsController < ApplicationController
	before_action :authenticate_user! , only: [:show]
	def index
		@pictures = PictureForCustom.all
	end
	
	def new
		@picture = PictureForCustom.new
		@colors = FlatColor.all
		@custom_product = CustomProduct.new

		# @user = current_user
		# @phonetype = Phonetype.find(3)
	end


	def create

		case_random_code = SecureRandom.hex(4)
		file_name = "case_" + case_random_code + "_" + Phonetype.find(params[:phone_type_name]).modelName.delete(' ') + Phonetype.find(params[:phone_type_name]).type_of_case
		file_name_to_print = "imagen_para_imprimir" + case_random_code
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
		@picture = PictureForCustom.create(picture: new_file, uuid: case_random_code,phonetype_id:Phonetype.find(params[:phone_type_name]).id )
		@image_to_print = CustomProduct.create(picture: new_file_for_printing, picture_for_customs_id: @picture.id)
		respond_to do |format| 
			if @picture.save
				# TODO cambiar posición de mail de confirmación 
				UserMailer.purchase_confirmation(current_user, @picture).deliver
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
	end
	private
end
