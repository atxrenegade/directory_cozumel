class MapsController < ApplicationController
	# before_action :require_admin, only: [:attributes]
	# before_action :require_super, only: [:create, :update, :delete]
	
	def attributes
		attributes = Map.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end
end
