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

	def destroy
		# make sure listing and business delete in conjunction with each other
		listing = Listing.find(params[:id])
		listing.destroy
		response = {}
		if listing.destroyed?
			response['msg'] = 'Listing Deleted!'
		else
			response['msg'] = 'Listing Failed to Delete!'
		end
		render json: response
	end

	def index_associated
		listings = Listing.where(business_id: params['business_id']).all
		render json: listings
	end
end
