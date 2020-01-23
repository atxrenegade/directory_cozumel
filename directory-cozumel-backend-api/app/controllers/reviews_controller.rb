class ReviewsController < ApplicationController
	# before_action :require_admin, only: [:attributes, :create]
	# before_action :require_super, only: [:update, :delete]

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Review.attribute_names - columnsToExclude
		render json: attributes
	end
end
