class ListingsController < ApplicationController
	def attributes
		attributes = Listing.column_names
		attributes.pop(2)
		render json: attributes
	end

	def index
		@listings = Listing.all
		render json: @listings
	end
end
