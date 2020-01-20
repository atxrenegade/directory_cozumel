class AdminsController < ApplicationController
	def attributes
		attributes = Admin.column_names
		render json: attributes, except: [:id, :created_at, :updated_at] 
	end
end
