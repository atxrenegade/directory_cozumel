class SessionsController < ApplicationController
	def create
		admin = Admin.find_by_username(params[:session][:username])
		if admin && admin.authenticate(params[:session][:password])
			session[:id] = admin.id
			render json: { id: admin.id, role: admin.role }
		else
			render json: response[:msg] = 'Admin Login Failed';
		end
	end

	def destroy
		session[:id] = nil
		redirect_to '/'
	end
end
