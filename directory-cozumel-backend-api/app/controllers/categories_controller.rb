class CategoriesController < ApplicationController
	#validates :name, uniqueness: true
	def attributes
		attributes = Category.column_names
		render json: attributes, except: [:id, :created_at, :updated_at] 
	end

	def index
		categories = Category.all
		render json: categories, only: [:id, :name]
	end

	def create
		category = Category.create!(name: params['name'].downcase)
		render json: category
	end
end
