class ChargesController < ApplicationController

def create
  # Amount in cents
  @amount = 9000

  customer = Stripe::Customer.create(
    :email => params[:stripeEmail],
    :source  => params[:stripeToken]
  )

  charge = Stripe::Charge.create(
    :customer    => customer.id,
    :amount      => params[:amount],
    :description => 'Case personalizado Arte Aparte',
    :currency    => 'pen'
  )

rescue Stripe::CardError => e
  flash[:error] = e.message
  redirect_to new_charge_path
end

end