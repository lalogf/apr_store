class Admin::BannersController < ApplicationController
	def index
		
	end
	def show
		
	end
	def new
		@banner = Banner.new
	end
	def create
		@banner = Banner.create(banner_params)

		respond_to do |format|

			if @banner.save
				format.html {redirect_to "/admin", notice: "Banner "+ @banner.caption + " creado con éxito"}
			else
				flash[:error] = "No se pudo guardar el banner"
				format.html {render :new }
			end
		end
		
	end
	def edit
		
	end
	def update
		
	end
	def destroy
		
	end

	private
	def banner_params
		params.require(:banner).permit(:caption,:type_of_banner,:image)
		
	end

end
