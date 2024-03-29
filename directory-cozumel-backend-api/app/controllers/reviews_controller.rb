class ReviewsController < ApplicationController
	# before_action :require_admin, only: [:attributes, :create]
	# before_action :require_super, only: [:update, :delete]
	def show
		review = Review.find_by_id(params['id'])
		render json: review
	end

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Review.attribute_names - columnsToExclude
		render json: attributes
	end

	def create
		instance = Review.create!(content: params['content'],  contributor: params['contributor'], contributor_email: params['contributor-email'], rating: params['rating'], business_id: params['business-id'])
		Review.update_rating(params['business-id'])
		render json: instance
	end

	def edit
	  review = Review.find(params['id'])
		render json: review
	end

	def destroy
		#make sure to update overall rating after removing review
		review = Review.find(params['id'])
		review.destroy
		response = {}
		if review.destroyed?
			response['msg'] = 'Review Deleted!'
		else
			response['msg'] = 'Review Failed to Delete!'
		end
		render json: response
	end

	def index_associated
		reviews = Review.where(business_id: params['business_id']).all
		render json: reviews
	end
end
