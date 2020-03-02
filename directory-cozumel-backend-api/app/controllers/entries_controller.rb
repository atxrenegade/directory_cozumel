class EntriesController < ApplicationController
	# before_action :require_admin, except: [:create]
	def show
		entry = Entry.find_by_id(params['id'])
		render json: entry
	end

	def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Entry.attribute_names - columnsToExclude
		render json: attributes
	end

	def build_object_from_entry
		entry = Entry.find_by_id(params['id'])
		entry.convert_to_object()
		entry.persisted? ? response = { msg: 'Object Saved'} : response = { msg: 'Object Failed to Save to Database!'}
		render json: response
	end

	def create
		entry = Entry.new.handle_record(params)
		render json: entry
	end

	def index
		entries = Entry.collect(params['search_type'], params['auth_type'])
		render json: entries
	end

	def search
		property_param = params[:property][0].gsub('-', '_')
		entries = Entry.search_entries(property_param, params['search_val'])
		render json: entries
	end

	def update
		entry = Entry.find(params['id'])
		update_vals = {}
		update_vals['status'] = params['status'] if params['status'].present?
		update_vals['admin_id']  = params[:admin_id] if params['admin_id'].present?
		update_vals['data_object'] = params[:data_object] if params['data_object'].present?
		update_vals['resolved_date'] = params[:resolved_date] if params['resolved_date'].present?
		update_vals['notes'] = params['notes'] if params['notes'].present?

		entry.update!(update_vals) ? response = { msg: 'Entry Successfully Updated'} : response = { msg: 'Entry Failed to Update'}
		render json: response
	end
end
