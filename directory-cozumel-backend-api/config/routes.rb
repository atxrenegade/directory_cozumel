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

	resources :businesses, only: [:create, :update, :delete]
	resources :listings, only: [:create, :update, :delete]
	resources :maps, only: [:create, :update, :delete]
	resources :reviews, only: [:create, :update, :delete]
	resources :images, only: [:create, :update, :delete]
	resources :categories, only: [:index, :create, :update, :delete]
	resources :admins, only: [:create, :update, :delete]
end
