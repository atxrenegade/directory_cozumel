class ReviewsController < ApplicationController
	# before_action :require_admin, only: [:attributes, :create]
	# before_action :require_super, only: [:update, :delete]

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Review.attribute_names - columnsToExclude
		render json: attributes
	end

	def create
		binding.pry
		instance = Review.create!(content: params['content'],  contributor: params['contributor'], contributor_email: params['contributor-email'], rating: params['rating'], business_id: params['business-id'])
		Review.update_rating(params["business-id"])
		render json: instance
	end

	def edit
	  review = Review.find(params[:id])
		render json: review
	end
end
