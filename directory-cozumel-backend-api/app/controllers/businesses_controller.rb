class BusinessesController < ApplicationController


	def index_all
		@businesses = Business.build_all_for_export
		render json: @businesses
	end

	def index_by_name
	end

	def index_by_category
	end


	def show_by_name
	end

	def show_by_category
	end
end
