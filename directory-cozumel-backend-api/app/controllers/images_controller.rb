class ImagesController < ApplicationController
	def attributes
		attributes = Image.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end

	def create(instObj)
		instance = Instance.create!(instObj)
		render json: instance
	end
end
