class MapsController < ApplicationController
	# before_action :require_admin, only: [:attributes]
	# before_action :require_super, only: [:create, :update, :delete]

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Map.attribute_names - columnsToExclude
		render json: attributes
	end
end
