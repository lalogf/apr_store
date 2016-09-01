Rails.application.routes.draw do

  # resource :cart, only: [:show]
  # resources :order_items, only: [:create, :update, :destroy]

  # get 'order_items/create'

  # get 'order_items/update'

  # get 'order_items/destroy'

  # get 'carts/show'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  devise_for :admins

  # devise_scope :user do
  #   delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  # end
  # devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }


  as :admin do
    get 'admins/edit' => 'devise/registrations#edit', :as => 'edit_admin_registration'    
    put 'admins/:id' => 'devise/registrations#update', :as => 'admin_registration'            
  end

  root 'front_store#index'

  namespace :admin do
    get "/" => "collections#adminHome"
    resources :collections, except: [:destroy]
    resources :designers, except: [:destroy] do
      resources :designs, except: [:destroy]
    end
    resources :case_inventories
  end

  namespace :admin do
    resources :designs, except:[:new,:create,:show,:edit,:update,:destroy,:index] do
      resources :products, only:[:new, :create, :edit, :update]
    end
    resources :products, only:[:show]
  end

  resources :picture_for_customs, only:[:new, :create, :show],:path => "crea-tu-case"

  resources :users do
    resources :orders, only:[:show, :new] 
    resources :charges, only:[:new, :create, :show]
  end

resources :orders do
  resources :shippings, only: [:new, :create, :show]
end

  post "/crea-tu-case/:uuid" => "picture_for_customs#shipping"


  get 'iphone6' => 'front_store#iphone6'
  get 'iphone5' => 'front_store#iphone5'
  get 'motog' => 'front_store#motog'
  # get 'artistas' => 'front_store#designers'
  # get 'colecciones' => 'front_store#collections'
  get 'productos' => 'front_store#products_index'
  get 'terminos-y-condiciones' => 'front_store#terminos'
  get 'crea' => 'users#creatucase'
  get '/:id' => 'front_store#artist_profile'
  get 'admin/designs' => 'admin/designs#adminDesigns'

  resources :users do 
    resources :charges, only: [:create,:show]
  end


end
