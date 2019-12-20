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
			dataArray = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {name, overall_rating, address, phone_number, website}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			dataArray.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(dataArray)
		end

		def newImageEntry(data)
			dataArray = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {description, date, url, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			dataArray.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(dataArray)
		end

		def newReviewEntry(data)
			dataArray = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {description, date, url, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			dataArray.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(dataArray)
		end

		def newFlagEntry(data)
			dataArray = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {content, date, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			dataArray.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(dataArray)
		end

		def newFlagEntry(data)
			dataArray = []
			type = data['type']
			bus_id = data[""]
			date = data[]
			data_object_string = {content, date, contributor, contributor_email}
			contributor = data[""]
			contributor_email = data[""]
			notes = data[""]
			dataArray.push(type, bus_id, date, data_object_string, contributor, contributor_email)
			build_record(dataArray)
		end

		def resolveNewBusiness
			#create new business and persist to database
			resolveEntry();
		end

		def resolveNewReview
			#create new business and persist to database
			resolveEntry();
		end

		def resolveNewImage
			#create new image and persist to database
			resolveEntry();
		end

		def rejectEntry
			#save admin_id change to status to rejected with date
			resolveEntry();
		end

		def searchRecords(query_type, query_param)
			#create search by business, date, admin, contributor, status, contributor_email
		end

		def updateBusiness

		end

		def deleteBusiness

		end

		def editMap

		end

		def deleteMap

		end

		def deleteImage

		end

		def deleteReview

		end
end
