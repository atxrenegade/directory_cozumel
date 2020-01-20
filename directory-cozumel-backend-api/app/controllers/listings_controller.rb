class ListingsController < ApplicationController
	def attributes
		attributes = Listing.column_names
		render json: attributes, except: [:id, :created_at, :updated_at] 
	end

	def index
		@listings = Listing.all
		render json: @listings
	end
end
