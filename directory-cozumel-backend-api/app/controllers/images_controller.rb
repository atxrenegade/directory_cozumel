class ImagesController < ApplicationController
	def attributes
		attributes = Image.column_names
		render json: attributes
	end
end
