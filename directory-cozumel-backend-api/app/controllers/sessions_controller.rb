class SessionsController < ApplicationController

	def create
		@admin = Admin.find_by_username(params[:session][:password])
		if @admin && @admin.authenticate(params[:session][:password])
			session[:admin_id] = @admin.id
			msg = 'Admin Login Successful'
		else
			msg = 'Admin Login Failed'
		end
		render json: msg
	end
end
