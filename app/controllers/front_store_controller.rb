class FrontStoreController < ApplicationController
	def index
		@banners = Banner.where("active=true AND type_of_banner='Portada'")
	end
	def iphone6
	@casesi6 = Product.where("phonetype_id=5 OR phonetype_id=6 OR phonetype_id=7")		
	end

	def iphone5
	@casesi5 = Product.where("phonetype_id=2 OR phonetype_id=3 OR phonetype_id=4")		
	end

	def motog
	@casesmg = Product.where("phonetype_id=10")		
	end
end
