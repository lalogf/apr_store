class ChargesController < ApplicationController

before_action :set_charge, only: [:show]

def create
  @charge = Charge.new(charge_params)
  respond_to do |format|
    if @charge.save
      format.json { render json: @charge, status: :created, location: @charge, id:@charge.id }
    else
      format.json { render json: @charge.errors, status: :unprocessable_entity }
    end
  end




#   # Amount in cents
#   @amount = 9000

#   customer = Stripe::Customer.create(
#     :email => params[:stripeEmail],
#     :source  => params[:stripeToken]
#   )

#   charge = Stripe::Charge.create(
#     :customer    => customer.id,
#     :amount      => params[:amount],
#     :description => 'Case personalizado Arte Aparte',
#     :currency    => 'pen'
#   )

# rescue Stripe::CardError => e
#   flash[:error] = e.message
#   redirect_to new_charge_path
# end

end

def show
  encryptor = Culqi::Encryptor.new
  if @charge.response.length >= 30
      @response = JSON.parse(encryptor.decrypt(@charge.response))
  end


end

private
    def set_charge
      @charge = Charge.find(params[:id])
    end
    def charge_params
      params.require(:charge).permit(:response)
    end
  end
