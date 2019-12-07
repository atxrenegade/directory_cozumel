class CategoriesController < ApplicationController
	#validates :name, uniqueness: true

	def index
		categories = Category.all
		render json: categories, only: [:id, :name]
	end

	def index_by_category
		category = 'gas station'
		filtered_results = Business.filter_by_category(category)
		render json: filtered_results
	end
end
