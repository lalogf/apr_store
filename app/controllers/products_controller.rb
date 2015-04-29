class ProductsController < ApplicationController
	before_action :set_product, only: [:show, :edit, :update, :destroy]
	before_action :set_design , only: [:new, :create]

	def index
		
	end
	def show
		
	end
	def new
		pre_requisites
		# @product = Product.new
		# @phonetypes = []
		# Phonetype.all.each do |el, index|
		# 	@phonetypes << [el.name + el.finish , el.id]
		# end
	end
	def create
		
		upc = SecureRandom.hex(4)
	
		@product = Product.create(product_params.merge(design_id: params[:design_id], upc: upc))
		
		respond_to do |format|
			if @product.save
				format.html {redirect_to "/", notice: "El producto fue creado con éxito"}
			else
				pre_requisites
				format.html {render :new, error: "El producto no se guardó"}
			end
		end
	end


# file_name = SecureRandom.hex

# 		base_64_string = params[:newcaseimage].split('data:image/png;base64,')[1]

# 		File.open(file_name + '.png', 'wb') do |f|
# 			f.write(Base64.decode64(base_64_string))
# 		end

# 		new_file = File.open(file_name + '.png')

# 		Product.create(model: params[:model], case_image: new_file, user_id: current_user.id)
# 		redirect_to "/users/"+ current_user.id.to_s + "/preview"




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
