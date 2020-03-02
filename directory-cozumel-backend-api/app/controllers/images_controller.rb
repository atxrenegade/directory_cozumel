class ImagesController < ApplicationController
	# before_action :require_admin, only: [:create, :attributes]
	# before_action :require_super, only: [:update, :delete]
	def show
		image = Image.find_by_id(params['id'])
		render json: image
	end

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Image.attribute_names - columnsToExclude
		render json: attributes
	end

	def create
		instance = Image.create!(description: params['description'],  date: params['date'], url: params['url'], contributor: params['contributor'], contributor_email: params['contributor-email'], business_id: params['business-id'])
		render json: instance
	end

	def edit
	  image = Image.find(params['id'])
		render json: image
	end

	def destroy
		image = Image.find(params['id'])
		image.destroy
		response = {}
		if image.destroyed?
			response['msg'] = 'Image Deleted!'
		else
			response['msg'] = 'Image Failed to Delete!'
		end
		render json: response
	end

	def index_associated
		images = Image.where(business_id: params['business_id']).all
		render json: images
	end
end
