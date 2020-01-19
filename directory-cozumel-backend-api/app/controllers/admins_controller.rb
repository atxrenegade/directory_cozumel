class AdminsController < ApplicationController
	def attributes
		attributes = Admin.column_names
		attributes.pop(2)
		render json: attributes
	end
end
