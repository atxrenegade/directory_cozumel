class CategoriesController < ApplicationController
	#validates :name, uniqueness: true
	def index
		categories = Category.all
		render json: categories, only: [:id, :name]
	end

	def create
		category = Category.create!(name: params['name'].downcase)
		render json: category
	end
end
