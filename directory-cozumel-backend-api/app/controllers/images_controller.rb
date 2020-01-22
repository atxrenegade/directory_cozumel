class ImagesController < ApplicationController
	def attributes
		attributes = Image.column_names
		render json: attributes, except: [:id, :created_at, :updated_at]
	end

	def create
		instance = Image.create!(description: params['description'],  date: params['date'], url: params['url'], contributor: params['contributor'], contributor_email: params['contributor email'], business_id: params['business id'])
		render json: instance
	end
end
