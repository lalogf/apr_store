class FrontStoreController < ApplicationController
	def iphone6
	@casesi6 = Product.where("phonetype_id=5 OR phonetype_id=6 OR phonetype_id=7")		
	end

	def iphone5
	@casesi5 = Product.where("phonetype_id=2 OR phonetype_id=3 OR phonetype_id=4")		
	end
end
