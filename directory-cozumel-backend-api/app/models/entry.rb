class Entry < ApplicationRecord
	def build_record(formatted_data)
		record = Entry.new
		record['entry_type'] = formatted_data[0]
		record['bus_id'] = formatted_data[1]
		record['bus_name'] = formatted_data[2]
		record['date'] = formatted_data[3]
		record['contributor'] = formatted_data[4]
		record['contributor_email'] = formatted_data[5]
		record['data_object'] = formatted_data[6]
		record['status'] = 'pending'
		record['resolved_date'] = 'n/a'
		record['admin_id'] = 1
		record['notes'] = ''
		record.save!
	end

	def handle_record(params)
		data = params['_json']
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
		data_array[0] = 'new bus'
		data_array[1] = 0
		data_array[2] = data[1][1]
		data_array[3] = Time.now.strftime('%Y-%m-%d %H:%M:%S')
		data_array[4] = 'unspecified'
		data_array[5] = 'unspecified'
		#data_array[6] should include name, categories, overall rating, address, phone number, website
		#add categories to from for user to select values to be included in data_array
		data_array[6] = {}
		data_array[6]['bus_name'] = data[1][1]
		data_array[6]['categories'] = data[5][1]
		data_array[6]['overall_rating'] = 'not yet rated'
		data_array[6]['address'] = data[2][1]
		data_array[6]['phone_number'] = data[3][1]
		data_array[6]['website'] = data[4][1]
		build_record(data_array)
	end

	def new_review_entry(data)
		data_array = []
		data_array[0] = 'new review'
		data_array[1] = getBusId(data[6])
		data_array[2] = data[6][1]
		data_array[3] = Time.now.strftime('%Y-%m-%d %H:%M:%S')
		data_array[4] = data[3][1] #contributor
		data_array[5] = data[4][1] #contributor_email
		#data_array[6] content, contributor, contributor_email, rating, business_id
		data_array[6] = {}
		data_array[6]['content'] = data[2][1]
		data_array[6]['contributor'] = data[3][1]
		data_array[6]['contributor_email'] = data[4][1]
		data_array[6]['rating'] = data[1][1]
		data_array[6]['bus_id'] = data_array[1]
		build_record(data_array)
	end

	def new_image_entry(data)
		data_array = []
		data_array[0] = 'new image'
		data_array[1] = getBusId(data[7])
		data_array[2] = data[7][1]
		data_array[3] = data[3][1] #date of image
		data_array[4] = data[4][1] #contributor
		data_array[5] = data[5][1] #contributor_email
		data_array[6] = {}
		data_array[6]['description'] = data[2][1]
		data_array[6]['date'] = data_array[2]
		data_array[6]['url'] = data[1][1]
		data_array[6]['contributor'] = data_array[3]
		data_array[6]['contributor_email'] = data_array[4]
		data_array[6]['bus_id'] = data_array[1]
		build_record(data_array)
	end

	def new_update_entry(data)
		data_array = []
		data_array[0] = 'update business'
		data_array[1] = getBusId(data[5])
		data_array[2] = data[5][1]
		data_array[3] = Time.now.strftime('%Y-%m-%d %H:%M:%S') #date of update request
		data_array[4] = data[2][1] #contributor
		data_array[5] = data[3][1] #contributor_email
		#data_array[6] should include business_id and content
		data_array[6] = {}
		data_array[6]['bus_id'] = data_array[1]
		data_array[6]['content'] = data[1][1]
		build_record(data_array)
	end

	def new_flag_entry(data)
		data_array = []
		data_array[0] = 'flag business'
		data_array[1] = getBusId(data[5])
		data_array[2] = data[5][1]
		data_array[3] = Time.now.strftime('%Y-%m-%d %H:%M:%S') #date of update request
		data_array[4] = data[2][1] #contributor
		data_array[5] = data[3][1] #contributor_email
		#data_array[6] should include business_id and content
		data_array[6] = {}
		data_array[6]['bus_id'] = data_array[1]
		data_array[6]['content'] = data[1][1]
		build_record(data_array)
	end

	def getBusId(name)
		return Business.find_by_name(name).id
	end

	def getBusName(id)
		return Business.find_by_id(id).name
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

	def self.search_entries(query_type, property_param, search_param)
		if query_type == 'resolved'
			wildcard_search = '%#{search_param.downcase}%'
			filtered = Entry.where.not(status: 'pending').where("lower(#{property_param}) LIKE ?", wildcard_search)
		else
			wildcard_search = '%#{search_param.downcase}%'
			filtered = Entry.where.(status: 'pending').where("lower(#{property_param}) LIKE ?", wildcard_search)
		end
		return filtered
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

	def self.collect(status)
		if status == 'resolved'
			entries =  Entry.where.not(status: "pending")
		else
			entries = Entry.where(status: status)
		end
		return entries
	end
end
