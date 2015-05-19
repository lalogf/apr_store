class Admin::DesignsController < ApplicationController
	layout "admin"
	before_action :authenticate_admin!
	before_action :set_design, only: [:show, :edit, :update, :destroy]
	before_action :set_designer , only: [:new, :create]
	def show	
	end
	def new
		pre_requisites
	end
	def create
		@design = Design.create(design_params.merge(designer_id: (params[:designer_id])))
		respond_to do |format|
			if @design.save
				flash[:success] = "El diseño " + @design.name + " se ha creado con éxito"
				format.html {redirect_to admin_designer_path(@design.designer_id) }
			else
				pre_requisites
				format.html {render :new, message: "El diseño no se pudo guardar"}
			end
		end
	end
	def edit
		
	end
	def update
		
	end
	def destroy
		
	end
	def adminDesigns
		@designs = Design.all.paginate(:page => params[:page], :per_page => 5)
	end

	private
	def pre_requisites
		@design = Design.new
		@collections = []
		Collection.all.each do |el|
			@collections << [el.name, el.id]
		end
	end
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
