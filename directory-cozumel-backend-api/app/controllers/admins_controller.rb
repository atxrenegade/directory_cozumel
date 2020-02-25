require('.app/controllers/application_controller.rb')
class AdminsController < ApplicationController
	include ActionController::Helpers
	helper_method :current_admin, :require_admin, :admin?, :require_super, :super?

	def show
		admin = Admin.find_by_id(params['id'])
		render json: admin
	end

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Admin.attribute_names - columnsToExclude
		render json: attributes
	end

	def create
		instance = Admin.create!(username: params['username'], password_digest: params['password_digest'], role: params['role'], status: params['status'])
		render json: instance
	end

	def edit
	  admin = Admin.find(params[:id])
		render json: admin
	end


	##def current_admin
	##	@current_admin || ##Admin.find(session[:admin_id]) if ##session[:admin_id]
	##end

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

	def destroy
		admin = Admin.find(params[:id])
		admin.destroy
		response = {}
		if admin.destroyed?
			response['msg'] = 'Admin Deleted!'
		else
			response['msg'] = 'Admin Failed to Delete!'
		end
		render json: response
	end

	private
	def admin_params
		params.require(:admin).permit(:username, :password, :role)
	end
end
