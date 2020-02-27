class SessionsController < ApplicationController
	def create
		if params[:session][:username].present?
			admin = Admin.find_by_username(params[:session][:username])
			if admin && admin.authenticate(params[:session][:password])
				session[:id] = admin.id
				response = { id: admin.id, username: admin.username, role: admin.role }
			else
				response = { msg: 'Admin Login Failed' }
			end
		else
				response = { msg: 'Admin Login Failed' }
		end
		render json: response
	end

	def destroy
		session[:id] = nil
		redirect_to '/'
	end
end
