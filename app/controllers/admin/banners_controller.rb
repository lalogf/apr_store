class Admin::BannersController < ApplicationController
	layout "admin"
	before_action :authenticate_admin!
	before_action :set_banner, only:[:edit,:update,:destroy,:show]
	def index
		@banners = Banner.all
		if Banner.where(principal: true).count > 1
			flash[:alert] = "Hay más de un banner principal, por favor corregir"
		elsif Banner.where(principal: true).count < 1 	
			flash[:alert] = "No hay ningún banner principal, por favor seleccionar uno"
		end 	
			
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
				flash[:success] = "Banner "+ @banner.caption + " creado con éxito"
				format.html {redirect_to "/admin" }
			else
				flash[:error] = "No se pudo guardar el banner"
				format.html {render :new }
			end
		end
		
	end
	def edit
		
	end
	def update
		respond_to do |format|
			if @banner.update(banner_params)
				flash[:success] = "Banner "+ @banner.caption + " actualizado con éxito"
				format.html{ redirect_to admin_banners_path}
			else
				flash[:error] = "No se pudo actualizar el banner"
				format.html{ render :edit}
				
			end
		end
		
	end
	def destroy
		
	end

	private
	def banner_params
		params.require(:banner).permit(:caption,:type_of_banner,:image,:active,:principal)
	end
	def set_banner
		@banner = Banner.find(params[:id])
	end

end
