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
		file_name = "nuevo_case_" + current_user.id.to_s + "_" + Phonetype.first.modelName.split(" ").join("_")
		base_64_string = params[:picture_url].split('data:image/png;base64,')[1]
		File.open(file_name, 'wb') do |f|
			f.write(Base64.decode64(base_64_string))
		end
		new_file = File.open(file_name)
		@picture = PictureForCustom.create(user_id: current_user.id, picture: new_file)
		respond_to do |format| 
			if @picture.save
				flash[:success] = "La foto se guardó con éxito"
			format.html {redirect_to root_path}
			end
		end
	end
end
