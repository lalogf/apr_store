Rails.application.routes.draw do

  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]

  get 'order_items/create'

  get 'order_items/update'

  get 'order_items/destroy'

  get 'carts/show'

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
    resources :banners
    resources :case_inventories
  end

  namespace :admin do
    resources :designs, except:[:new,:create,:show,:edit,:update,:destroy,:index] do
      resources :products, only:[:new, :create, :edit, :update]
    end
    resources :products, only:[:show]
  end

  resources :picture_for_customs, only:[:new, :create, :show]
  resources :custom_products



  get 'iphone6' => 'front_store#iphone6'
  get 'iphone5' => 'front_store#iphone5'
  get 'motog' => 'front_store#motog'
  get 'artistas' => 'front_store#designers'
  get 'colecciones' => 'front_store#collections'
  get 'productos' => 'front_store#products_index'
  # get 'crea' => 'users#creatucase'
  get '/:id' => 'front_store#artist_profile'
  get 'admin/designs' => 'admin/designs#adminDesigns'

  #Suppor stripe payments through charges
  resources :charges


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
