class SessionsController < ApplicationController
	def create
		admin = Admin.find_by_username(params[:session][:username])
		if admin && admin.authenticate(params[:session][:password])
			session[:id] = admin.id
			response[:msg] = 'Admin Login Successful'
		else
			response[:msg] = 'Admin Login Failed'
		end
		render json: response
	end

	def destroy
		session[:id] = nil
		redirect_to '/'
	end
end
