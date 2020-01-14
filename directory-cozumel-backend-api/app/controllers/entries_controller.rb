class EntriesController < ApplicationController
	def new_object
		entry = Entry.find_by_id(params['id'])
		entry.convert_to_object()
		msg = { msg: 'Entry approval successful!'}

		render json: msg
	end

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
		property_param = params['property'].gsub('-', '_')
		entries = Entry.search_entries(params['query_type'], property_param, params['search_val'])
		render json: entries
	end

	def update
		entry = Entry.find(params[:id])
		update_vals = {}
		update_vals["status"] = params[:status] if params[:status].present?

		update_vals["admin_id"]  = params[:admin_id] if params[:admin_id].present?

		update_vals["data_object"] = params[:data_object] if params[:data_object].present?

		update_vals["resolved_date"] = params["resolved_date"] if params["resolved_date"].present?

		update_vals["notes"] = params[:notes] if params[:notes].present?

		if entry.update!(update_vals)
			render json: { message: "Update Successful!"}
		end
	end
end
