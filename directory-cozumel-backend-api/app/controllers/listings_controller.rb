class ListingsController < ApplicationController
	# before_action :require_admin, only: [:attributes, :create]
	# before_action :require_super, only: [:update, :delete]

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Listing.attribute_names - columnsToExclude
		render json: attributes
	end

	def index
		@listings = Listing.all
		render json: @listings
	end
end
