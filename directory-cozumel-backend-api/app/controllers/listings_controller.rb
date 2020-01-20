class ListingsController < ApplicationController
	def attributes
		attributes = Listing.column_names
		render json: attributes
	end

	def index
		@listings = Listing.all
		render json: @listings
	end
end
