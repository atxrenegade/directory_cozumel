class ListingsController < ApplicationController
	# before_action :require_admin, only: [:attributes, :create]
	# before_action :require_super, only: [:update, :delete]
	def show
		listing = Listing.find_by_id(params['id'])
		render json: listing
	end

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Listing.attribute_names - columnsToExclude
		render json: attributes
	end

	def index
		@listings = Listing.all
		render json: @listings
	end

	def edit
	  listing = Listing.find(params[:id])
		render json: listing
	end
end
