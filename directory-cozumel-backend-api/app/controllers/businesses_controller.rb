class BusinessesController < ApplicationController
	def show
		id = params[:id]
		if id
			business = Business.find(id)
			busObj = business.buildDetails
			render json: busObj
		else
			render json: {message: 'ERROR: Input Error' }
		end
	end

	def index_by_name
		name = params[:name]
		if name
			filtered_results = Business.filter_by_name(name)
			render json: filtered_results
		else
			render json: {message: 'ERROR: Input Error' }
		end
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
