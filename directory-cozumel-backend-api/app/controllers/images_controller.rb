class ImagesController < ApplicationController
	def attributes
		attributes = Image.column_names
		attributes.pop(2)
		render json: attributes
	end
end
