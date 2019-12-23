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
				new_update_entry(data)
			else
				return 'Entry type error'
		end
	end

	def new_bus_entry(data)
		data_array = []
		data_array[0] = "new bus"
		data_array[1] = 0
		data_array[2] = Time.now.strftime("%Y-%m-%d %H:%M:%S")
		data_array[3] = "unspecified"
		data_array[4] = "unspecified"
		#data_array[5] should include name, categories, overall rating, address, phone number, website
		#add categories to from for user to select values to be included in data_array
		data_array[5] = [data[1][1], "hardcoded categories for testing", 'not yet rated', data[2][1], data[3][1], data[4][1]]
		build_record(data_array)
	end

	def new_review_entry(data)
		data_array = []
		data_array[0] = "new review"
		data_array[1] = 0 #get business_id through post request
		data_array[2] = Time.now.strftime("%Y-%m-%d %H:%M:%S")
		data_array[3] = data[3][1] #contributor
		data_array[4] = data[4][1] #contributor_email
		#data_array[5] content, contributor, contributor_email, rating, business_id
		data_array[5] = [data[2][1], data[3][1], data[4][1],  data[1][1]]
		build_record(data_array)
	end

	def new_image_entry(data)
		data_array = []
		data_array[0] = "new image"
		data_array[1] = 0 #get business_id through post request
		data_array[2] = data[3][1] #date of image
		data_array[3] = data[4][1] #contributor
		data_array[4] = data[5][1] #contributor_email
		#data_array[5] should include description, date, url, contributor, contributor_email, business_id
		data_array[5] = [data[2][1], data_array[2], data[1][2], data_array[3], data_array[4], data_array[1]]
		build_record(data_array)
	end

	def new_update_entry(data)
		data_array = []
		data_array[0] = "update business"
		data_array[1] = 0 #get business_id through post request
		data_array[2] = Time.now.strftime("%Y-%m-%d %H:%M:%S") #date of update request
		data_array[3] = data[2][1] #contributor
		data_array[4] = data[3][1] #contributor_email
		#data_array[5] should include business_id and content
		data_array[5] = [data_array[1], data[1][1]]
		build_record(data_array)
	end

	def new_flag_entry(data)
		data_array = []
		data_array[0] = "flag business"
		data_array[1] = 0 #get business_id through post request
		data_array[2] = Time.now.strftime("%Y-%m-%d %H:%M:%S") #date of update request
		data_array[3] = data[2][1] #contributor
		data_array[4] = data[3][1] #contributor_email
		#data_array[5] should include business_id and content
		data_array[5] = [data_array[1], data[1][1]]
		build_record(data_array)
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
