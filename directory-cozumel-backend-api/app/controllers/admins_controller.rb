class AdminsController < ApplicationController
	def attributes
		attributes = Admin.column_names
		render json: attributes
	end
end
