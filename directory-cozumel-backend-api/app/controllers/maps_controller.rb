class MapsController < ApplicationController
	# before_action :require_admin, only: [:attributes]
	# before_action :require_super, only: [:create, :update, :delete]
	def show
		map = Map.find_by_id(params['id'])
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
			resp = 'Map creation denied. This business is already associated with a map, please update the existing one!'
		else
			resp = Map.create!(lat: params['lat'], lng: params['lng'], business_id: params['business-id'])
		end
		render json: {resp: resp}
	end

	def edit
	  map = Map.find(params[:id])
		render json: map
	end
end
