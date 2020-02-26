module adminHelpers
	def current_admin
		@current_admin || @current_admin = Admin.find(session[:id]) if session[:id]
	end

	def admin?
		self.role == 'admin' && self.status == 'active'|| self.role == 'super' && self.status == 'active'
	end

	def super?
		self.role == 'super' && self.status == 'active'
	end

	def require_admin
		redirect_to '/' unless current_admin.admin?
	end

	def require_super
		redirect_to '/' unless current_admin.super?
	end
end
