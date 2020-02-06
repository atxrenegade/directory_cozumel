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
		data_array[6]['business_name'] = data[1][1]
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
		data_array[1] = get_business_id(data[6][1])
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
		data_array[6]['business_id'] = data_array[1]
		build_record(data_array)
	end

	def new_image_entry(data)
		data_array = []
		data_array[0] = 'new image'
		data_array[1] = get_business_id(data[7][1])
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
		data_array[6]['business_id'] = data_array[1]
		build_record(data_array)
	end

	def new_update_entry(data)
		data_array = []
		data_array[0] = 'update business'
		data_array[1] = get_business_id(data[5][1])
		data_array[2] = data[5][1]
		data_array[3] = Time.now.strftime('%Y-%m-%d %H:%M:%S') #date of update request
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
		data_array[1] = get_business_name(data[5][1])
		data_array[2] = data[5][1]
		data_array[3] = Time.now.strftime('%Y-%m-%d %H:%M:%S') #date of update request
		data_array[4] = data[2][1] #contributor
		data_array[5] = data[3][1] #contributor_email
		#data_array[6] should include business_id and content
		data_array[6] = {}
		data_array[6]['business_id'] = data_array[1]
		data_array[6]['content'] = data[1][1]
		build_record(data_array)
	end

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
			Review.update_rating(attributes["business_id"])
			return review
		when 'new image'
			return Image.create!(attributes)
		else
			return 'This object is not recognized'
		end
	end

	def parse_entry_data
		binding.pry
		attributes = self.data_object.tr('"', '').tr('>', '').tr('=', ': ').tr('{', '').tr('}', '').split(',')
		attrHash = {}
		attributes.map do |el|
			attribute = el.split(':')
			k = attribute[0].tr(' ', '')
			attribute.length > 2 ? val = attribute[1] + ':' + attribute[2] : val = attribute[1]
			attrHash[k] = val
		end
		return attrHash
	end

	def convert_to_business(attributes)
		business = Business.create!(name: attributes['business_name'])
		listing_attributes = {overall_rating: attributes['overall_rating'], address: attributes['address'], phone_number: attributes['phone_number'], website: attributes['website'], business_id: business.id}
		Business.build_new_associated(business, attributes['categories'], listing_attributes)
	end

	def self.search_entries(property_param, search_param)
		if property_param == 'id' ||  property_param == 'business_id' ||  property_param =='admin_id' ||  property_param == 'date'
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
