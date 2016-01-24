class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_order


  def current_order
    if !session[:order_id].nil?
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

  
  protected

  # def after_sign_in_path_for(admin)
  #   admin_path
  # end
  def after_sign_in_path_for(resource)
    if resource.instance_of? User
       request.env['omniauth.origin'] || stored_location_for(resource) || root_path
    elsif resource.instance_of? Admin
      admin_path     
    end
  end
  # layout :layout_by_resource

  # protected

  # def layout_by_resource
  #   if devise_controller?
  #     "admin"
  #   else
  #     "application"
  #   end
  # end
end
