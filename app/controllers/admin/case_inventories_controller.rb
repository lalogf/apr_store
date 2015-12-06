class Admin::CaseInventoriesController < ApplicationController
	layout "admin"
	before_action :authenticate_admin!
	# include SmartListing::Helper::ControllerExtensions
	# helper  SmartListing::Helper


	def index
		@inventory = CaseInventory.all
		 # @case_inventories = smart_listing_create(:case_inventories, CaseInventory.all, partial: "case_inventories/listing")
	end

	# def show

	# end
	# def new
	# 	@inventory = CaseInventory.new
	# end
	# def create
	# 	@inventory = CaseInventory.create(inventory_params)

	# 	respond_to do |format|

	# 		if @banner.save
	# 			flash[:success] = "Banner "+ @banner.caption + " creado con éxito"
	# 			format.html {redirect_to "/admin" }
	# 		else
	# 			flash[:error] = "No se pudo guardar el inventario"
	# 			format.html {render :new }
	# 		end
	# 	end

	# end

	# private
	# def inventory_params
	# 	params.require(:inventory).permit(:finish, :phonetype_id, :stock)
	# end
	# def set_inventory
	# 	@inventory = CaseInventory.find(params[:id])
	# end
end
