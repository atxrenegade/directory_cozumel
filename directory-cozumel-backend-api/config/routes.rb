Rails.application.routes.draw do
	post '/index_by_category', to: 'businesses#index_by_category'
	post '/index_by_name', to: 'businesses#index_by_name'
	post '/business', to: 'businesses#show'

	post '/entries/new_object', to: 'entries#new_object'
	post '/entries/new'
	post '/entries/update'
	get '/entries/pending', to: 'entries#index_pending'
	get '/entries/resolved', to: 'entries#index_resolved'
	post '/entries/search', to: 'entries#index_search'

	resources :businesses, only: [:create, :update, :delete]
	resources :listings, only: [:create, :update, :delete]
	resources :maps, only: [:create, :update, :delete]
	resources :reviews, only: [:create, :update, :delete]
	resources :images, only: [:create, :update, :delete]
	resources :categories, only: [:index, :create, :update, :delete]
	resources :admins, only: [:create, :update, :delete]
end
