class CategoriesController < ApplicationController
	#validates :name, uniqueness: true

	def index
		categories = Category.all
		render json: categories, only: [:id, :name]
	end

	def index_by_category
		category = params[:name]
		if category
			filtered_results = BusinessCategory.filter_by_category(category)
			render json: filtered_results
		else
			render json: {message: 'ERROR: Category not found' }
		end
	end
end
