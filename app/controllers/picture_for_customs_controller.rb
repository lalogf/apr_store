class PictureForCustomsController < ApplicationController

	def index
		@pictures = PictureForCustom.all
	end
	
	def new
		@picture = PictureForCustom.new
		@colors = FlatColor.all
	end


	def create
		@picture = PictureForCustom.create(user_id: current_user.id)
		@picture.picture_from_url(params[:picture_url])
		respond_to do |format| 
			if @picture.save
				flash[:success] = "La foto se guardó con éxito"
				format.html {redirect_to root_path}
			# else
			# 	pre_requisites
			# 	flash[:error] = "No se pudo guardar la colección" 
			# 	format.html {render 'adminHome'}

			end
		end
	end




end
