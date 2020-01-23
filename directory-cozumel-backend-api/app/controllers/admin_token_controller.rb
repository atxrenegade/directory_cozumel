class AdminTokenController < Knock::AuthTokenController

	def create
		@admin = Admin.find_by_username(params[:session][:password])
		if @admin && @admin.authenticate(params[:session][:password])
			session[:admin_id] = @admin.id
			#obj = createToken
		else
			obj= 'Admin Login Failed'
		end
		render json: obj
	end
end
