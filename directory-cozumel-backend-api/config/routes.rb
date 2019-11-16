Rails.application.routes.draw do
  resources :reviews, only: [:new, :create, :show, :update, :delete]
  resources :maps, only: [:show]
  resources :listings, only: [:new, :create, :show, :update, :delete]
  resources :images, only: [:new, :create, :show, :update, :delete]
  resources :categories, only: [:index]
  resources :businesses, only: [:new, :create, :show, :update, :delete]
  resources :admin_entries, only: [:new, :create, :update, :index]
  resources :admins, only: [:login, :admin]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
