class SessionsController < ApplicationController

	def create

		@admin = Admin.find_by_username(params[:session][:password])
		if @admin && @admin.authenticate(params[:session][:password])
			session[:admin_id] = @admin.id
			msg = 'Admin Successfully Created'
		else
			msg = 'New Admin Creation Failed'
		end
		render json: msg
	end		
end
