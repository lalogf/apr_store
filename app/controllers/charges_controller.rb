class ChargesController < ApplicationController
before_action :authenticate_user! , only: [:show]
before_action :set_charge, only: [:show]


def create
  @charge = Charge.new(charge_params)
  respond_to do |format|
    if @charge.save
      format.json { render json: @charge, status: :created, location: user_charge_path(current_user.id, @charge.uuid)}
    else
      format.json { render json: @charge.errors, status: :unprocessable_entity }
    end
  end
end

def show
  @user = current_user
  @order = current_order
  encryptor = Culqi::Encryptor.new
  if @charge.response.length >= 30
      @response = JSON.parse(encryptor.decrypt(@charge.response))
      @order.order_status_id = 2
      @order.save
      UserMailer.success_payment(@user, @order).deliver
  end
 
end

private
    def set_charge
      @charge = Charge.find_by_uuid(params[:id])
    end
    def charge_params
      params.require(:charge).permit(:response,:uuid,:user_id)
    end
  end
