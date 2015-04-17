class CollectionsController < ApplicationController
	before_action :set_collection, only: [:show, :edit, :update, :destroy]
	
	def index
		@wholeCollections = Collection.all
		@collection = Collection.new
	end

	def show
	end

	def create
		@collection = Collection.create(collection_params) 
		if(@collection.save)
			redirect_to "/"
		end
	end

	def new

	end

	def edit
	end

	def update
		@collection.update(collection_params)
		redirect_to "/"
	end

	def destroy
	end

	private

	def set_collection
		@collection = Collection.find(params[:id])
	end
	def collection_params
		params.require(:collection).permit(:name)
	end

end
