class MapsController < ApplicationController
	def attributes
		attributes = Map.column_names
		attributes.pop(2)
		render json: attributes
	end
end
