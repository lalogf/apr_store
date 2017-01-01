class ShippingsController < ApplicationController

def new
end

def create
	@order = current_order
	@order.save
	@shipping = Shipping.create(shipping_params.merge(order_id: @order.id))
	respond_to do |format|
		if @shipping.save 
			format.html{ redirect_to user_order_path(current_user,@order)}
		else
			@case = @order.picture_for_custom
			flash[:error] = 'Hubo un error'
			format.html { render template: 'picture_for_customs/show'}
		end
	end	
end

def show
end

def edit
end

def update
end

private
def shipping_params
	params.require(:shipping).permit(:address, :department, :province, :district, :country, :phone,:cost,:terms)	
end

end
