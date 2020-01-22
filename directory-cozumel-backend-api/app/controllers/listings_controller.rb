class ListingsController < ApplicationController
	# before_action :require_admin, only: [:attributes, :create]
	# before_action :require_super, only: [:update, :delete]
	
	def attributes
		attributes = Listing.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end

	def index
		@listings = Listing.all
		render json: @listings
	end
end
