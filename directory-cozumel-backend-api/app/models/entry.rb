class Entry < ApplicationRecord
	require 'json'

	def build_record(formatted_data)
		record = Entry.new
		record['entry_type'] = formatted_data[0]
		record['business_id'] = formatted_data[1]
		record['business_name'] = formatted_data[2]
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
				if data[0][1] ==  true  # check if operation data is present
					new_operation_entry(data)
				end
		when 'new-review'
			new_review_entry(data)
		when 'new-image'
			new_image_entry(data)
		when 'bus-flag'
			new_flag_entry(data)
		when 'bus-edit'
			new_update_entry(data)
		when 'new-operation'
			new_operation_entry(data)
		else
			return 'Entry type error'
		end
	end

	def new_bus_entry(data)
		data_array = []
		data_array[0] = 'new bus'
		data_array[1] = 0
		data_array[2] = data[1][1]
		data_array[3] = Time.now.strftime("%a %b %d %Y %I:%M:%S %p")
		data_array[4] = 'unspecified'
		data_array[5] = 'unspecified'
		#data_array[6] should include name, categories, overall rating, address, phone number, website
		#add categories to from for user to select values to be included in data_array
		data_array[6] = {}
		data_array[6]['business_name'] = data[1][1]
		data_array[6]['categories'] = data[5][1]
		data_array[6]['overall_rating'] = 'not yet rated'
		data_array[6]['address'] = data[2][1]
		data_array[6]['phone_number'] = data[3][1]
		data_array[6]['website'] = data[4][1]
		data_array[6]['sustainable_business'] = data[6][1]
		build_record(data_array)
	end

	def new_review_entry(data)
		data_array = []
		data_array[0] = 'new review'
		data_array[1] = get_business_id(data[5][1])
		data_array[2] = data[5][1]
		data_array[3] = Time.now.strftime("%a %b %d %Y %I:%M:%S %p")
		data_array[4] = data[3][1] #contributor
		data_array[5] = data[4][1] #contributor_email
		#data_array[6] content, contributor, contributor_email, rating, business_id
		data_array[6] = {}
		data_array[6]['content'] = data[2][1]
		data_array[6]['contributor'] = data[3][1]
		data_array[6]['contributor_email'] = data[4][1]
		data_array[6]['rating'] = data[1][1]
		data_array[6]['business_id'] = data_array[1]
		build_record(data_array)
	end

	def new_image_entry(data)
		data_array = []
		data_array[0] = 'new image'
		data_array[1] = get_business_id(data[6][1]) #bus name
		data_array[2] = data[6][1] 
		data_array[3] = data[3][1] #date of image
		data_array[4] = data[4][1] #contributor
		data_array[5] = data[5][1] #contributor_email
		data_array[6] = {}
		data_array[6]['description'] = data[2][1]
		data_array[6]['date'] = data_array[2]
		data_array[6]['url'] = data[1][1]
		data_array[6]['contributor'] = data_array[3]
		data_array[6]['contributor_email'] = data_array[4]
		data_array[6]['business_id'] = data_array[1]
		build_record(data_array)
	end

	def new_update_entry(data)
		data_array = []
		data_array[0] = 'update business'
		data_array[1] = get_business_id(data[3][1])
		data_array[2] = data[3][1]
		data_array[3] = Time.now.strftime("%a %b %d %Y %I:%M:%S %p") #date of update request
		data_array[4] = data[2][1] #contributor
		data_array[5] = data[3][1] #contributor_email
		#data_array[6] should include business_id and content
		data_array[6] = {}
		data_array[6]['business_id'] = data_array[1]
		data_array[6]['content'] = data[1][1]
		build_record(data_array)
	end

	def new_flag_entry(data)
		data_array = []
		data_array[0] = 'flag business'
		data_array[1] = get_business_id(data[4][1])
		data_array[2] = data[4][1]
		data_array[3] = Time.now.strftime("%a %b %d %Y %I:%M:%S %p") #date of update request
		data_array[4] = data[2][1] #contributor
		data_array[5] = data[3][1] #contributor_email
		#data_array[6] should include business_id and content
		data_array[6] = {}
		data_array[6]['business_id'] = data_array[1]
		data_array[6]['content'] = data[1][1]
		build_record(data_array)
	end

	def new_operation_entry(data)
		data_array = []
		data_array[0] = 'new operation'
		data_array[1] = 0
		data_array[2] = data[1][1];
		data_array[3] = Time.now.strftime("%a %b %d %Y %I:%M:%S %p")
		data_array[4] = 'unspecified'
		data_array[5] = 'unspecified'
		#data_array[6] should include business id, current status, weekend hours, weekday hours, occupancy rate, opening date, notes and updated at
		#add categories to from for user to select values to be included in data_array
		data_array[6] = {}
		data_array[6]['business_id'] = 0
		data_array[6]['business_name'] = data[1][1]
		data_array[6]['current_status'] = data[6][1] 
		data_array[6]['reservation_required'] = data[9][1] 
		data_array[6]['business_hours'] = data[10][1] 
		data_array[6]['occupancy_rate'] = data[8][1] 
		data_array[6]['opening_date'] = data[7][1] 
		data_array[6]['notes'] = data[11][1] 
		data_array[6]['updated_at'] = data[12][1]
		build_record(data_array)
	end

	{"business_id"=>0, "business_name"=>"Banana Cake", "current_status"=>"", "reservation_required"=>"90%", "business_hours"=>true, "occupancy_rate"=>"", "opening_date"=>true, "notes"=>"3pm - 4pm", "updated_at"=>"Here is my message to the world"}

	def get_business_id(name)
		return Business.find_by_name(name).id
	end

	def get_business_name(id)
		return Business.find_by_id(id).name
	end

	def convert_to_object
		attributes = parse_entry_data();
		entry_type = self.entry_type
		case entry_type
		when 'new bus'
			convert_to_business(attributes)
		when 'new review'
			review = Review.create!(attributes)
			Review.update_rating(attributes['business_id'])
			return review
		when 'new image'
			return Image.create!(attributes)
		when 'new operation'
			attributes['business_id'] = Business.find_by_name(attributes['business_name']).id
			attributes.delete('business_name')
			binding.pry
			return Operation.create!(attributes)
		else
			return false
		end
	end

	def parse_entry_data
		data_attributes = self.data_object.tr('"', '').tr('>', '').tr('=', ': ').tr('{', '').tr('}', '').split(',')
		attrHash = {}
		data_attributes.map do |el|
			data_attribute = el.strip.split(':')
			k = data_attribute[0]
			val = data_attribute[1]
			attrHash[k] = val
		end
		return attrHash
	end

	def convert_to_business(attributes)
		if Business.find_by_name(attributes['business_name']).nil?
			business = Business.create!(name: attributes['business_name'])
			listing_attributes = {overall_rating: attributes['overall_rating'], address: attributes['address'], phone_number: attributes['phone_number'], website: attributes['website'], business_id: business.id}
			Business.build_new_associated(business, attributes['categories'], listing_attributes)
		else
			return { msg: 'This business already exists in the database!' }
		end
	end

	def self.search_entries(property_param, search_param)
		if property_param == 'id' ||  property_param == 'business_id' ||  property_param == 'admin_id' ||  property_param == 'date'
			results = Entry.where("#{property_param} = ?", search_param)
		else
			wildcard_search = "%#{search_param.downcase}%"
			results = Entry.where("lower(#{property_param}) LIKE ?", wildcard_search)
		end
		return results
	end

	def self.collect(status, auth_type)
		if status == 'resolved' && auth_type == 'super'
			entries =  Entry.where.not(status: 'pending')
		elsif status == 'pending' && auth_type == 'super'
			entries =  Entry.where(status: 'pending')
		elsif status == 'pending' && auth_type == 'jr'
			entries = Entry.where(status: 'pending').where.not(entry_type: 'flag business' ).where.not(entry_type: 'update business').where.not(entry_type: 'flag business')
		else
			entries =  Entry.where.not(status: 'pending').where.not(entry_type: 'flag business' ).where.not(entry_type: 'update business').where.not(entry_type: 'flag business')
		end
		return entries
	end
end
