class BusinessesController < ApplicationController
	def show
		business = Business.find_by(id: params[:id])
		if business
			busObj = business.build_business_object
			render json: busObj
		else
			render json: {message: 'No Record of that Business!' }
		end
	end

	def index_by_category
		businesses = BusinessCategory.filter_by_category(params[:category_name])
		if businesses
			render json: businesses, except: [:created_at, :updated_at]
		else
			render json: {message: 'No businesses match that category'}
		end
	end

	def index_by_name
		businesses = Business.filter_by_name(params[:name])
		if businesses
			render json: businesses, except: [:created_at, :updated_at]
		else
			render json: {message: 'No Business by that name on record'}
		end
	end
end
