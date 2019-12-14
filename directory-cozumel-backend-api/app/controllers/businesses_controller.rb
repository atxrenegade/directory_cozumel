class BusinessesController < ApplicationController
	def show
		business = Business.find_by_name(params[:name]);
		if business.present?
			render json: business.to_json(:include => {
				:listing => {:except => [:id, :created_at, :updated_at, :business_id]},
				:categories => {:only => [:name]},
				:map => {:only => [:lat, :lng]},
				:images => {:except => [:id, :contributor_email, :business_id, :created_at, :updated_at]},
				:reviews => {:except => [:id, :contributor_email, :business_id, :updated_at]},
			})
		else
			render json: {message: 'No Record of that Business!' }
		end
	end

	def index_by_category
		businesses = BusinessCategory.filter_by_category(params[:category_name])
		if businesses.present?
			render json: businesses, except: [:created_at, :updated_at]
		else
			render json: {message: 'No businesses match that category'}
		end
	end

	def index_by_name
		businesses = Business.filter_by_name(params[:name])
		if businesses.present?
			render json: businesses, except: [:created_at, :updated_at]
		else
			render json: {message: 'No Business by that name on record'}
		end
	end
end
