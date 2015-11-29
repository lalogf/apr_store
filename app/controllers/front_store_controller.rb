class FrontStoreController < ApplicationController
	before_action :set_designer , only: [:artist_profile]

	def index
		@banners = Banner.where("active=true AND type_of_banner='Portada'")
		@designers = Designer.all
		@products = Product.all
	end
	def iphone6
		@casesi6 = Product.where("phonetype_id=4 OR phonetype_id=5")		
	end

	def iphone5
		@casesi5 = Product.where("phonetype_id=2 OR phonetype_id=3")		
	end

	def motog
		@casesmg = Product.where("phonetype_id=8")		
	end

	def designers
		@designers = Designer.all
	end
	def collections
		@collections = Collection.all
	end
	def artist_profile
	
	end

	def products_index
    	@products = Product.all
    	@order_item = current_order.order_items.new
  	end

	private
	def set_designer
		@designer = Designer.find(params[:id])
	end
end
