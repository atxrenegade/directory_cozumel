class BusinessesController < ApplicationController
	def index
		@businesses = Business.build_all_for_export
		render json: @businesses
	end

	def index
		name = params[:name]
		if name
			filtered_results = Business.filter_by_name(name)
			render json: filtered_results
		else
			render json: {message: 'ERROR: Input Error' }
		end
	end


	def show
	end
end
