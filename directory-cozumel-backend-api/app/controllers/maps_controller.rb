class MapsController < ApplicationController
	def attributes
		attributes = Map.column_names
		render json: attributes, except: [:id, :created_at, :updated_at] 
	end
end
