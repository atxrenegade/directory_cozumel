class ReviewsController < ApplicationController
	def attributes
		attributes = Review.column_names
		render json: attributes, except: [:id, :created_at, :updated_at] 
	end
end
