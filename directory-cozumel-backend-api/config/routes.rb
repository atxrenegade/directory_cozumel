Rails.application.routes.draw do
  post '/admin_token', to: 'admin_token#create'
	post '/index_by_category', to: 'businesses#index_by_category'
	post '/index_by_name', to: 'businesses#index_by_name'
	post '/business', to: 'businesses#show'

	get  '/entries/attributes', to: 'entries#attributes'
	post '/entries/build_object', to: 'entries#build_object_from_entry'
	post '/entries', to: 'entries#create'
	post '/entries/update'
	post '/entries/search', to: 'entries#index_search'
	post '/entries', to: 'entries#index'

	get '/businesses/attributes', to: 'businesses#attributes'
	resources :businesses, only: [:edit, :create, :update, :delete]

	get '/listings/attributes', to: 'listings#attributes'
	resources :listings, only: [:edit, :create, :update, :delete]

	get '/maps/attributes', to: 'maps#attributes'
	resources :maps, only: [:edit, :create, :update, :delete]

	get '/reviews/attributes', to: 'reviews#attributes'
	resources :reviews, only: [:edit, :create, :update, :delete]

	get '/images/attributes', to: 'images#attributes'
	resources :images, only: [:edit, :create, :update, :delete]

	get '/categories/attributes', to: 'categories#attributes'
	resources :categories, only: [:edit, :index, :create, :update, :delete]

	get '/admins/attributes', to: 'admins#attributes'
	resources :admins, only: [:edit, :create, :update, :delete]

	post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
end
