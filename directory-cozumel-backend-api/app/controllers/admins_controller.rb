require('.app/controllers/application_controller.rb')
class AdminsController < ApplicationController
	helper adminHelpers

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
		current_admin.require_super
		instance = Admin.create!(username: params['username'], password_digest: params['password_digest'], role: params['role'], status: params['status'])
		render json: instance
	end

	def update
		current_admin.require_super
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
		current_admin.require_super
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
		params.require(:admin).permit(:username, :password, :role, :status)
	end
end
