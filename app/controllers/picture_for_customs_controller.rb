class PictureForCustomsController < ApplicationController

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
		base_64_string = params[:picture_url].split('data:image/png;base64,')[1]
		File.open(file_name, 'wb') do |f|
			f.write(Base64.decode64(base_64_string))
		end
		new_file = File.open(file_name)
		@picture = PictureForCustom.create(user_id: current_user.id, picture: new_file)
		respond_to do |format| 
			if @picture.save
				flash[:success] = "La foto se guardó con éxito"
			format.html {redirect_to picture_for_customs_path}
			end
		end
	end
end
