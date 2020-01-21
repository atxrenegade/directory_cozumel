class ApplicationController < ActionController::API
	helper_method :current_admin, :require_admin, :admin?, :require_super, :super?

	def current_admin
		@current_admin || Admin.find(session[:admin_id]) if session[:admin_id]
	end

	def admin?
		self.role == 'admin' || self.role == 'super'
	end

	def super?
		self.role == 'super'
	end

	def require_admin
		redirect_to '/' unless current_user.admin?
	end

	def require_super
		redirect_to '/' unless current_user.super?
	end
end
