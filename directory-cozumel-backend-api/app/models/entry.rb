class Entry < ApplicationRecord
	belongs_to :entryable, polymorphic: true
	belongs_to :category

	def build_record(type, bus_id, date, data_object_string, contributor='n/a', contributor_email='n/a', notes='n/a')
		recordObj = {}
		recordObj.type = data["type"]
		recordObj.bus_id = data['bus_id']
		recordObj.date = formatted_data["date"]
		recordObj.contributor = data["contributor"]
		recordObj.contributor_email = data["contributor_email"]
		recordObj.data_object_string = data["data_object_string"]
		recordObj.notes = data["notes"]
		recordObj.status = "pending"
		recordObj.resolved_date = 'n/a'
		recordObj.admin_id = 1;
		recordObj.save
	end

	def resolve_record(data)
		case record_type if type[0]
			case1 'bus'
				new_bus_entry(data)
				break
			case2 'image'
				new_image_entry(data)
				break
			case3 'review'
				new_review_entry(data)
				break
			case4 'flag'
				new_flag_entry(data)
				break
			case5 'update'
				busUpdate(data)
				break
		end

		def new_bus_entry(data)
			# format json data for record instance creation
			data_array = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {name, overall_rating, address, phone_number, website}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			data_array.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(data_array)
		end

		def new_image_entry(data)
			data_array = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {description, date, url, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			data_array.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(dataArray)
		end

		def new_review_entry(data)
			data_array = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {description, date, url, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			data_array.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(data_array)
		end

		def new_flag_entry(data)
			data_array = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {content, date, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			data_array.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(data_array)
		end

		def new_flag_entry(data)
			data_array = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {content, date, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			data_array.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(data_array)
		end

		def resolve_new_business
			#create new business and persist to database
			resolve_entry();
		end

		def resolve_new_review
			#create new business and persist to database
			resolve_entry();
		end

		def resolve_new_image
			#create new image and persist to database
			resolve_entry();
		end

		def reject_entry
			#save admin_id change to status to rejected with date
			resolve_entry();
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
