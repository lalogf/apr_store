class DesignsController < ApplicationController
	before_action :set_design, only: [:show, :edit, :update, :destroy]
	before_action :set_designer , only: [:new, :create]
	def index
		@designs = Design.all
	end
	def new
		@design = Design.new
		@collections = []
		Collection.all.each do |el|
			@collections << [el.name, el.id]
		end
	end
	def create
		@design = Design.create(design_params.merge(designer_id: (params[:designer_id])))
		respond_to do |format|
			if @design.save
				format.html {redirect_to "/", notice: "El diseño se ha creado con éxito" }
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
	def design_params
		params.require(:design).permit(:name,:picture,:collection_id)
	end
	def set_design
		@design = Design.find(params[:id])
	end
	def set_designer
		@designer = Designer.find(params[:designer_id])
	end
end
