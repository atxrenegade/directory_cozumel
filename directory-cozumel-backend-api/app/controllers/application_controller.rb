class ApplicationController < ActionController::API
	helper_method :current_admin, :require_admin

	def current_admin
		@current_admin || Admin.find(session[:admin_id]) if session[:admin_id]
	end

	def require_admin
		redirect_to '/' unless current_admin
	end
end
