require('./app/controllers/application_controller.rb')

class AdminTokenController < Knock::AuthTokenController
	def create
		@admin = Admin.find_by('username': params[:session][:username])
		if @admin && @admin.authenticate(params[:session][:password])
			session[:admin_id] = @admin.id
			#obj = createToken
		else
			obj= 'Admin Login Failed'
		end
		render json: obj
	end


    private def admin_token_params

				params.require(:admin_token).permit(:username, :password)
    end
end
