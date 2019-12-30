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
		update_vals = {}
		update_vals["status"] = params[:status] if params[:status].present?

		update_vals["admin_id"]  = params[:admin_id] if params[:admin_id].present?

		update_vals["data_object"] = params[:data_object] if params[:data_object].present?

		update_vals["date_resolved"] = params[:date_resolved] if params[:date_resolved].present?

		update_vals["notes"] = params[:notes] if params[:notes].present?

		entry.update!(update_vals)
	end
end
