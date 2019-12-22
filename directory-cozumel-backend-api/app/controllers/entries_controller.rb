class EntriesController < ApplicationController
	def new
		entry = Entry.new.handle_record(params)
		render json: entry
	end
end
