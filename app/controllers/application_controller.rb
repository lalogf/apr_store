class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  helper_method :current_order
  before_filter :store_current_location, :unless => :devise_controller?


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

  def store_current_location
    store_location_for(:user, request.url)
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
