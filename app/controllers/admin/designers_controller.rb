class Admin::DesignersController < ApplicationController
	layout "admin"
	before_action :authenticate_admin!
	before_action :set_designer, only: [:show, :edit, :update, :destroy]
	
	def index
	end

	def show
	end

	def create
		@designer = Designer.create(designer_params) 
		respond_to do |format|
			if @designer.save
				format.html { redirect_to admin_collections_path, notice: "El diseñador " + @designer.name + " " + @designer.lastname + " se ha creado con éxito"}
			else
				pre_requisite
				flash[:error] = "No se pudo guardar Diseñador"
				format.html{render 'admin/collections/index'} 
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
				format.html {redirect_to "/", notice: "El diseñador " + @designer.name + " " + @designer.lastname + " se ha actualizado con éxito" }
			else
				format.html {render 'edit', alert:"something went wrong"}
			end
		end

	end

	def destroy
	end

	private
	def pre_requisite
		@wholeCollections = Collection.all.order('id ASC')
		@wholeDesigners = Designer.all.order('lastname ASC')
		@collection = Collection.new
		@designs = Design.all  
	end

	def set_designer
		@designer = Designer.find(params[:id])
	end
	def designer_params
		params.require(:designer).permit(:name,:lastname)
	end

end

