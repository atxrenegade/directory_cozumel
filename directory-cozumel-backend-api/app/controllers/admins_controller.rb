class AdminsController < ApplicationController
	include ActionController::Helpers
	helper_method :current_admin, :require_admin, :admin?, :require_super, :super?

	def attributes
		attributes = Admin.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end

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

	private
	def admin_params
		params.require(:admin).permit(:username, :password, :role)
	end
end
