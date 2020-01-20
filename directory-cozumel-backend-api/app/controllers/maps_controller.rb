class MapsController < ApplicationController
	def attributes
		attributes = Map.column_names
		render json: attributes
	end
end
