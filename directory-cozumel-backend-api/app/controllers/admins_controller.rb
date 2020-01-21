class AdminsController < ApplicationController
	def attributes
		attributes = Admin.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end

	def create
		@admin = Admin.new(admin_params)

		if @admin.save
			session[:admin_id] = @admin.id
			redirect_to '/'
			msg = 'New Admin Created Successfully'
		else
			msg = 'Authorized Admins Only!'
		end
		render json: msg
	end

	private
	def admin_params
		params.require(:admin).permit(:username, :password, :role)
	end
end
