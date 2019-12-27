Rails.application.routes.draw do
	post '/index_by_category', to: 'businesses#index_by_category'
	post '/index_by_name', to: 'businesses#index_by_name'
	post '/business', to: 'businesses#show'
	resources :businesses, only: [:create]

	post '/entries/new'
	get '/entries', to: 'entries#index'

  resources :reviews, only: [:new, :create, :show, :update, :delete]
  resources :maps, only: [:show]
  resources :listings, only: [:new, :create, :show, :update, :delete]
  resources :images, only: [:new, :create, :show, :update, :delete]
  resources :categories, only: [:index]
  resources :listings, only: [:new, :create, :show, :update, :delete, :index]
  resources :admin_entries, only: [:new, :create, :update, :index]
  resources :admins, only: [:login, :admin]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
