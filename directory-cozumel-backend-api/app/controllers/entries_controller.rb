class EntriesController < ApplicationController
	def new
		entry = Entry.new.handle_record(params)
		render json: entry
	end

	def index_pending
		entries = Entry.collect('pending')
		render json: entries
	end

	def index_resolved
		entries = Entry.collect('resolved')
		render json: entries
	end

	def index_search
		query_type = params['query_type']
		(params['property']).is_a? String ? property_param = params['property'].gsub('-', '_') : property_param = params['property']
		search_val = params['search_val']
		entries = Entry.search_entries(query_type, property_param, search_val)
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

		if entry.update!(update_vals)
			render json: { message: "Update Successful!"}
		end
	end
end
