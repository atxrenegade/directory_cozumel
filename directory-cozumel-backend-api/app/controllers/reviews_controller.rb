class ReviewsController < ApplicationController
	def attributes
		attributes = Review.column_names
		render json: attributes
	end
end
