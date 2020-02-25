class CategoriesController < ApplicationController
	#validates :name, uniqueness: true
	# before_action :require_admin , only: [:attributes]
	# before_action :require_super , only: [:create, :update, :delete]
	def show
		category = Category.find_by_id(params[:id])
		render json: category
	end

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
		category = Category.create!(name: params[:name].downcase)
		render json: category
	end

	def edit
	  category = Category.find(params[:id])
		render json: category
	end

	def destroy
		category = Category.find(params[:id])
		#check for businesses with this category id
		#block delete if associated records present
		category.destroy
		response = {}
		if category.destroyed?
			response['msg'] = 'Category Deleted!'
		else
			response['msg'] = 'Category Failed to Delete!'
		end
		render json: response
	end
end
