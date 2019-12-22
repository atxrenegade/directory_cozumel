class Entry < ApplicationRecord

	def build_record(formatted_data)
		record = Entry.new
		record['entry_type'] = formatted_data[0]
		record['bus_id'] = formatted_data[1]
		record['date'] = formatted_data[2]
		record['contributor'] = formatted_data[3]
		record['contributor_email'] = formatted_data[4]
		record['data_array'] = formatted_data[5]
		record['status'] = "pending"
		record['resolved_date'] = 'n/a'
		record['admin_id'] = 1
		record['notes'] = ''
		record.save!
	end

	def handle_record(params)
		data = params["_json"]
		record_type = data[0][0]
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
		data_array = []
		data_array[0] = "new bus"
		data_array[1] = 99
		data_array[2] = Time.now.strftime("%Y-%m-%d %H:%M:%S")
		data_array[3] = "unspecified"
		data_array[4] = "unspecified"
		#data array should include name, categories, overall rating, address, phone number, website
		#add categories to from for user to select values to be included in data_array
		data_array[5] = [data[1][1], "hardcoded categories for testing", 'not yet rated', data[2][1], data[3][1], data[4][1]]
		build_record(data_array)
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
