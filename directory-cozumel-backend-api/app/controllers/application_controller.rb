class ApplicationController < ActionController::Base
	# before_action :require_super
	include Knock::Authenticable

	def attributes
		attributes = Admin.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end

	def create
		@admin = Admin.new(admin_params)
		if @admin.save
			session[:admin_id] = @admin.id
			redirect_to '/'
			msg = 'New Admin Created Successfully'
		else
			msg = 'Authorized Admins Only!'
		end
		render json: msg
	end
end
