require('.app/controllers/application_controller.rb')
class AdminsController < ApplicationController
	include ActionController::Helpers
	helper_method :current_admin, :require_admin, :admin?, :require_super, :super?

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Admin.attribute_names - columnsToExclude
		render json: attributes
	end

	def show
		admin = Admin.find_by_id(params['id'])
		render json: admin
	end

	def create
		require_super
		instance = Admin.create!(username: params['username'], password_digest: params['password_digest'], role: params['role'], status: params['status'])
		render json: instance
	end

	def update
		require_super
		admin = Admin.find(params[:id])
		update_vals = {}
		update_vals[:username] = params[:username] if params[:username].present?
		update_vals[:password]  = params[:password] if params[:password].present?
		update_vals[:role] = params[:role] if params[:role].present?
		update_vals[:status] = params[:status] if params[:status].present?

		admin.update!(update_vals) ? response = { msg: 'Admin Successfully Updated'} : response = { msg: 'Admin Failed to Update'}
		render json: response
	end

	def destroy
		require_super()
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

	helpers
	def current_admin
		@current_admin || Admin.find(session[:admin_id]) if session[:admin_id]
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

	private
	def admin_params
		params.require(:admin).permit(:username, :password, :role, :status)
	end
end
