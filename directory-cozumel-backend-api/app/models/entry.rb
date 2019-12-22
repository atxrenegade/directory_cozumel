class Entry < ApplicationRecord
	belongs_to :entryable, polymorphic: true
	belongs_to :category

	def build_record(formattedData)
		# combine formatted data with recordObj for new recordObj with spread operator
		recordObj = {}
		recordObj.status = "pending"
		recordObj.resolved_date = 'n/a'
		recordObj.admin_id = 1;
		recordObj.save
	end

	def handle_record(params)
		data = params["_json"]
		record_type = data[0]
		case record_type
		when 'new-bus'
				new_bus_entry(data)
			when 'new-review'
				new_review_entry(data)
			when 'new-image'
				new_image_entry(data)
			when 'bus-flag'
				new_flag_entry(data)
			when 'bus-edit'
				busUpdate(data)
			else
				return 'Entry type error'
		end
	end

	def new_bus_entry(data)
		data_obj = {}
		data_obj['type'] = "new bus"
		data_obj['date'] = ""
		data_obj['contributor_email'] = ""
		data_obj['bus_id'] = 'not yet assigned'
		data_obj['data_array'] = [data[1][1], 'not yet rated', data[2][1], data[3][1], data[4][1]]
		build_record(data_obj)
	end

	def new_image_entry(data)
		data_obj = {}
		data_obj.type = "new img"
		data_obj.bus_id = data[""]
		data_obj.date = data[""]
		data_obj.data_array = [data['description'], data['date'], data['image-url'], data['image-contributor'], data['email']]
		data_obj.contributor = data[""]
		data_obj.contributor_email = data[""]
		data_obj.notes = data[""]
		build_record(data_obj)
	end

	def new_review_entry(data)
		data_obj = {}
		data_obj.type = "new review"
		data_obj.bus_id = data[""]
		data_obj.date = data[""]
		data_obj.data_array = [description, date, url, contributor, contributor_email]
		data_obj.contributor = data[""]
		data_obj.contributor_email = data[" "]
		data_obj.notes = data[""]
		build_record(data_obj)
	end

	def new_update_entry(data)
		data_obj = {}
		data_obj.type = "flag bus"
		data_obj.bus_id = data[""]
		data_obj.date = data[""]
		data_obj.data_array = [content, date, contributor, contributor_email]
		data_obj.contributor = data[""]
		data_obj.contributor_email = data[" "]
		data_obj.notes = data[""]
		build_record(data_obj)
	end

	def new_flag_entry(data)
		data_obj = {}
		data_obj.type = "flag bus"
		data_obj.bus_id = data[""]
		data_obj.date = data[""]
		data_obj.data_array = [content, date, contributor, contributor_email]
		data_obj.contributor = data[""]
		data_obj.contributor_email = data[" "]
		data_obj.notes = data[""]
		build_record(data_obj)
	end

	def resolve_new_business
		#create new business and persist to database
		resolve_entry()
	end

	def resolve_new_review
		#create new business and persist to database
		resolve_entry()
	end

	def resolve_new_image
		#create new image and persist to database
		resolve_entry();
	end

	def resolve_entry
		#update admin_id
		#save admin_id change to status to resolved with date
	end

	def reject_entry
		#update admin_id
		#save admin_id change to status to rejected
	end

	def search_records(query_type, query_param)
		#create search by business, date, admin, contributor, status, contributor_email
	end

	def update_business

	end

	def delete_business

	end

	def edit_map

	end

	def delete_map

	end

	def delete_review

	end
end
