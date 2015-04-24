class CollectionsController < ApplicationController
	before_action :set_collection, only: [:show, :edit, :update, :destroy]
	
	def index
		pre_requisites
		@collection = Collection.new
	end

	def show
	end

	def create
		@collection = Collection.create(collection_params)
		respond_to do |format| 
			if(@collection.save)
				format.html {redirect_to "/", notice: "La colección " + @collection.name + " se ha creado con éxito"}
			else
				@wholeCollections = Collection.all.order('id ASC')
				@wholeDesigners = Designer.all.order('lastname ASC')
				@designer = Designer.new 
				format.html {render 'index', alert: "No se pudo guardar la colección" }

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
				format.html {redirect_to "/", notice: "La colección " + @collection.name + " se ha actualizado con éxito" }
		else
			pre_requisites
			format.html{render 'index', alert: "something went wrong"}

		end
	end
end

def destroy
end

def pre_requisites
	@wholeCollections = Collection.all.order('id ASC')
	@wholeDesigners = Designer.all.order('lastname ASC')
	@designer = Designer.new 
end

private

def set_collection
	@collection = Collection.find(params[:id])
end
def collection_params
	params.require(:collection).permit(:name)
end

end
