class BusinessesController < ApplicationController
	# before_action :require_admin , only: [:create]
	# before_action :require_super , only: [:update, :delete]
	def show
		business = Business.find_by_id(params[:id])
		render json: business
	end

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Business.attribute_names - columnsToExclude
		render json: attributes
	end

	def show
		business = Business.find_by_name(params[:name])
		if business.present?
			render json: business.to_json(:include => {
				:listing => {:except => [:id, :created_at, :updated_at, :business_id]},
				:categories => {:only => [:name, :nombre]},
				:map => {:only => [:lat, :lng]},
				:images => {:except => [:id, :contributor_email, :business_id, :created_at, :updated_at]},
				:reviews => {:except => [:id, :contributor_email, :business_id, :updated_at]},
			})
		else
			render json: {msg: 'No Record of that Business!' }
		end
	end

	def index_by_category
		businesses = BusinessCategory.filter_by_category(params[:lang], params[:category_name])
		if businesses.present?
			render json: businesses, except: [:created_at, :updated_at]
		else
			render json: {msg: 'There are no businesses listed in that category yet!', 'msg-esp': '¡No hay negocios listados en esa categoría todavía!'}
		end
	end

	def index_by_name
		businesses = Business.filter_by_name(params[:name])
		if businesses.present?
			render json: businesses, except: [:created_at, :updated_at]
		else
			render json: {msg: 'No business in our directory match that name!', 'msg-esp': '¡Ningún negocio en nuestro directorio coincide con ese nombre!'}
		end
	end

	def edit
	  business = Business.find(params['id'])
		render json: business
	end

	def destroy
		#make sure businesses deletes all reviews, images, listing, and, map
		business = Business.find(params['id'])
		business.destroy
		response = {}
		if business.destroyed?
			response['msg'] = 'Business Deleted!'
		else
			response['msg'] = 'Business Failed to Delete!'
		end
		render json: response
	end
end
