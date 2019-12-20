class Entry < ApplicationRecord
	belongs_to :entryable, polymorphic: true
	belongs_to :category

	def build_record(type, bus_id, date, data_object_string, contributor='n/a', contributor_email='n/a', notes='n/a', )
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

	def resolveRecord(data)
		case RecordType if type[0]
			case1 'bus'
				newBusEntry(data)
				break
			case2 'image'
				newImageEntry(data)
				break
			case3 'review'
				newReviewEntry(data)
				break
			case4 'flag'
				newFlagEntry(data)
				break
			case5 'update'
				busUpdate(data)
				break
		end

		def newBusEntry(data)
			# format json data for record instance creation
			build_record(formatted_data)
		end

		def newImageEntry(data)
			# format json data for record instance creation
			build_record(formatted_data)
		end

		def newReviewEntry(data)
			# format json data for record instance creation
			build_record(formatted_data)
		end

		def newFlagEntry(data)
			# format json data for record instance creation
			build_record(formatted_data)
		end

		def newFlagEntry(data)
			# format json data for record instance creation
			build_record(formatted_data)
		end
end
