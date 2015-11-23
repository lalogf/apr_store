class Admin::DesignersController < ApplicationController
	layout "admin"
	before_action :authenticate_admin!
	before_action :set_designer, only: [:show, :edit, :update, :destroy]
	
	def index
		pre_requisite
	end

	def show
	end

	def create
		@designer = Designer.create(designer_params) 
		respond_to do |format|
			if @designer.save
				flash[:success] = "El diseñador " + @designer.name + " " + @designer.lastname + " se ha creado con éxito"
				format.html { redirect_to admin_designers_path}
			else
				pre_requisite
				flash[:error] = "No se pudo guardar Diseñador"
				format.html{render 'admin/collections/adminHome'} 
			end
		end
	end

	def new

	end

	def edit
	end

	def update
		respond_to do |format|
			if @designer.update(designer_params)
				flash[:success] = "El diseñador " + @designer.name + " " + @designer.lastname + " se ha actualizado con éxito" 
				format.html {redirect_to admin_designers_path}
			else
				flash[:error] = "Por favor corregir los siguientes errores:"
				format.html {render 'edit'}
			end
		end

	end

	def destroy
	end

	private
	def pre_requisite
		@wholeDesigners = Designer.all.paginate(:page => params[:page], :per_page => 5).order('lastname ASC')
		@collection = Collection.new
		@products = Product.all
	end

	def set_designer
		@designer = Designer.find(params[:id])
	end
	def designer_params
		params.require(:designer).permit(:name,:lastname,:avatar,:type_Of_Artist)
	end

end

