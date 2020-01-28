class CategoriesController < ApplicationController
	#validates :name, uniqueness: true
	# before_action :require_admin , only: [:attributes]
	# before_action :require_super , only: [:create, :update, :delete]

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Category.attribute_names - columnsToExclude
		render json: attributes
	end

	def index
		categories = Category.all
		render json: categories, only: [:id, :name]
	end

	def create
		category = Category.create!(name: params['name'].downcase)
		render json: category
	end

	def edit
	  category = Category.find(params[:id])
		render json: category
	end
end
