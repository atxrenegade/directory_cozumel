class MapsController < ApplicationController
	# before_action :require_admin, only: [:attributes]
	# before_action :require_super, only: [:create, :update, :delete]
	def show
		map = Map.find_by_id(params[:id])
		render json: map
	end

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Map.attribute_names - columnsToExclude
		render json: attributes
	end

	def create
		map = Map.find(params['business-id'])
		if map.present?
			response[:msg] = 'Map creation denied. This business is already associated with a map, please update the existing one!'
		else
			response[:msg] = Map.create!(lat: params[:lat], lng: params[:lng], business_id: params['business-id'])
		end
		render json: response
	end

	def edit
	  map = Map.find(params[:id])
		render json: map
	end

	def destroy
		map = Map.find(params[:id])
		map.destroy
		response = {}
		if map.destroyed?
			response[:msg] = 'Map Deleted!'
		else
			response[:msg] = 'Map Failed to Delete!'
		end
		render json: response
	end

	def index_associated
		maps = Map.where(business_id: params['business_id']).all
		render json: maps
	end
end
