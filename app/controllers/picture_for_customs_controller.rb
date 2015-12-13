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

	def create_custom_product
		
		file_name = "app/assets/cases/" + params[:product][:title]+'.png'

		# base_64_string = params[:newcaseimage].split('data:image/png;base64,')[1]

		# File.open(file_name, 'wb') do |f|
		# 	f.write(Base64.decode64(base_64_string))
		# end

		# new_file = File.open(file_name)
	
		# @product = Product.create(product_params.merge(design_id: params[:design_id], upc: upc, picture: new_file))
	end

	def create
		# @picture = PictureForCustom.create(user_id: current_user.id)
		# @picture.picture_from_url(params[:picture_url])
		# respond_to do |format| 
		# 	if @picture.save
		# 		flash[:success] = "La foto se guardó con éxito"
		# 		format.html {redirect_to root_path}
		# 	# else
		# 	# 	pre_requisites
		# 	# 	flash[:error] = "No se pudo guardar la colección" 
		# 	# 	format.html {render 'adminHome'}

		# 	end
		# end
		file_name = "nuevo_case_" + current_user.id.to_s  
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
