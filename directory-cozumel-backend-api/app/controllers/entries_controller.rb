class EntriesController < ApplicationController
	def new
		entry = Entry.new.handle_record(params)
		render json: entry
	end

	def index
		entries = Entry.collect_pending
		render json: entries
	end

	def update
		entry = Entry.find(params[:id])
		status = params[:status]
		admin_id = params[:admin_id]
		date_resolved = params[:date_resolved]
		entry.update(status, admin_id, date_resolved)
	end
end
