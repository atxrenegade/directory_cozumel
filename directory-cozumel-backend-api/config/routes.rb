Rails.application.routes.draw do
	post '/index_by_category', to: 'businesses#index_by_category'
	post '/index_by_name', to: 'businesses#index_by_name'
	post '/business', to: 'businesses#show'

	get  '/entries/attributes', to: 'entries#attributes'
	post '/entries/new_object', to: 'entries#new_object'
	post '/entries/new'
	post '/entries/update'
	post '/entries/search', to: 'entries#index_search'
	post '/entries', to: 'entries#index'

	get '/businesses/attributes', to: 'businesses#attributes'
	resources :businesses, only: [:create, :update, :delete]

	get '/listings/attributes', to: 'listings#attributes'
	resources :listings, only: [:create, :update, :delete]

	get '/maps/attributes', to: 'maps#attributes'
	resources :maps, only: [:create, :update, :delete]

	get '/reviews/attributes', to: 'reviews#attributes'
	resources :reviews, only: [:create, :update, :delete]

	get '/images/attributes', to: 'images#attributes'
	resources :images, only: [:create, :update, :delete]

	get '/categories/attributes', to: 'categories#attributes'
	resources :categories, only: [:index, :create, :update, :delete]

	get '/admins/attributes', to: 'admins#attributes'
	resources :admins, only: [:create, :update, :delete]
end
