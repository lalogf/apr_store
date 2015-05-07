class Admin::ProductsController < ApplicationController
	layout "admin"
	before_action :authenticate_admin!
	before_action :set_product, only: [:show, :edit, :update, :destroy]
	before_action :set_design , only: [:new, :create]

	def index
		
	end
	def show
		
	end
	def new
		pre_requisites
	end
	def create
		
		upc = SecureRandom.hex(4)

		file_name = "app/assets/cases/" + params[:product][:title]+'.png'

		base_64_string = params[:newcaseimage].split('data:image/png;base64,')[1]

		File.open(file_name, 'wb') do |f|
			f.write(Base64.decode64(base_64_string))
		end

		new_file = File.open(file_name)
	
		@product = Product.create(product_params.merge(design_id: params[:design_id], upc: upc, picture: new_file))
		
		respond_to do |format|
			if @product.save
				format.html {redirect_to admin_collections_path, notice: "El producto " + @product.title +  " fue creado con éxito"}
			else
				pre_requisites
				format.html {render :new, error: "El producto no se guardó"}
			end
		end
	end



	def edit
		
	end
	def update
		
	end
	def destroy
		
	end
	def pre_requisites
		@product = Product.new
		@phonetypes = []
		Phonetype.all.each do |el, index|
			@phonetypes << [el.model + " " +el.finish , el.id]
		end
	end
	private
	def product_params
		params.require(:product).permit(:title,:price,:stock,:picture,:phonetype_id)
	end
	def set_product
		@product = Product.find(params[:id])
	end
	def set_design
		@design = Design.find(params[:design_id])
	end
end
