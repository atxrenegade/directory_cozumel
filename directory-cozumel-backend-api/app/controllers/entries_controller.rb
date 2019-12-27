class EntriesController < ApplicationController
	def new
		entry = Entry.new.handle_record(params)
		render json: entry
	end

	def index
		entries = Entry.collect_pending
		render json: entries
	end
end
