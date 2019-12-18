class EntriesController < ApplicationController
	def new
		obj = params
		render json: obj
	end
end
