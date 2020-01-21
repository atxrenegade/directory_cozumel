class ReviewsController < ApplicationController
	# before_action :require_admin, only: [:attributes, :create]
	# before_action :require_super, only: [:update, :delete]
	def attributes
		attributes = Review.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end
end
