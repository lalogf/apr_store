class Admin::CollectionsController < ApplicationController
	layout "admin"
	before_action :authenticate_admin!
	before_action :set_collection, only: [:show, :edit, :update, :destroy]
	
	def index
		@wholeCollections = Collection.all.paginate(:page => params[:page], :per_page => 8).order('id ASC')
	end

	def adminHome
		@collection = Collection.new
		pre_requisites
	end

	def show
	end

	def create
		@collection = Collection.create(collection_params)
		respond_to do |format| 
			if @collection.save
				flash[:success] = "La colección " + @collection.name + " se ha creado con éxito"
				format.html {redirect_to admin_collections_path}
			else
				pre_requisites
				flash[:error] = "No se pudo guardar la colección" 
				format.html {render 'adminHome'}

			end
		end
	end

	def new
	end

	def edit
	end

	def update
		respond_to do |format|	
			if @collection.update(collection_params)
				flash[:success] = "La colección " + @collection.name + " se ha actualizado con éxito"
				format.html {redirect_to admin_collections_path }
			else
				flash[:error] = "Por favor corregir los siguientes errores:"
				format.html{render 'edit'}
			end
		end
	end

	def destroy
	end

	def pre_requisites
		@designer = Designer.new 
		@products = Product.all.paginate(:page => params[:page], :per_page => 5)
		@inventory = CaseInventory.all
		@orders = Order.all
	end

	private

	def set_collection
		@collection = Collection.find(params[:id])
	end
	def collection_params
		params.require(:collection).permit(:name)
	end

end
