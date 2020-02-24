Rails.application.routes.draw do
  post '/admin_token', to: 'admin_token#create'
	post '/index_by_category', to: 'businesses#index_by_category'
	post '/index_by_name', to: 'businesses#index_by_name'
	post '/business', to: 'businesses#show'

	get  '/entries/attributes', to: 'entries#attributes'
	post '/entries/build_object', to: 'entries#build_object_from_entry'
	post '/entries/update'
	post '/entries/index', to: 'entries#index'
	post '/entries/search', to: 'entries#search'
	get '/entries/:id', to: 'entries#show'
	post '/entries', to: 'entries#create'


	get '/businesses/attributes', to: 'businesses#attributes'
	post '/businesses/index_by_name', to: 'businesses#index_by_name'
	resources :businesses, only: [:edit, :create, :update, :destroy, :show]

	get '/listings/attributes', to: 'listings#attributes'
	resources :listings, only: [:edit, :create, :update, :destroy, :show]
	post '/listings/index_associated', to: 'listings#index_associated'

	get '/maps/attributes', to: 'maps#attributes'
	resources :maps, only: [:edit, :create, :update, :destroy, :show]
	post '/maps/index_associated', to: 'maps#index_associated'


	get '/reviews/attributes', to: 'reviews#attributes'
	resources :reviews, only: [:edit, :create, :update, :destroy, :show]
	post '/reviews/index_associated', to: 'reviews#index_associated'


	get '/images/attributes', to: 'images#attributes'
	resources :images, only: [:edit, :create, :update, :destroy, :show]
	post '/images/index_associated', to: 'images#index_associated'


	get '/categories/attributes', to: 'categories#attributes'
	resources :categories, only: [:edit, :index, :create, :update, :destroy, :show]

	get '/admins/attributes', to: 'admins#attributes'
	resources :admins, only: [:edit, :create, :update, :destroy, :show]

	post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
end
