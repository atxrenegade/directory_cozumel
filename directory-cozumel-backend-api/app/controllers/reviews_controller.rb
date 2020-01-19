class ReviewsController < ApplicationController
	def attributes
		attributes = Review.column_names
		attributes.pop(2)
		render json: attributes
	end
end
