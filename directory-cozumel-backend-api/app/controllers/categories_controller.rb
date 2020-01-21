class CategoriesController < ApplicationController
	# before_action :require_admin , only: [:attributes]
	# before_action :require_super , only: [:create, :update, :delete]
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
