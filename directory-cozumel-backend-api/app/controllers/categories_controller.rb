class CategoriesController < ApplicationController
	#validates :name, uniqueness: true

	def index
		categories = Category.all
		render json: categories, only: [:id, :name]
	end
end
