class UsersController < ApplicationController

	def show
		if current_user.id.to_s == params[:id]
			@user = User.find(params[:id])
			@orders = Order.where("user_id = ?", params[:id]).order(created_at: :desc)
		else
			flash[:notice] = "No tienes acceso a la información de ese usuario"
			redirect_to root_path
		end
	end



end
