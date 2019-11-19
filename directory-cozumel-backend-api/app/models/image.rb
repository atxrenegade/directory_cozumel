class Image < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_images(unformatted_collection)
		formatted_collection  = unformatted_collection.map do |x|
			image = {}
			image["id"] = x.id
			image["date"] = x.date
			image["description"] = x.description
			image["url"] = x.url
			image["contributor"] = x.contributor
			image["contributor_email"] = x.contributor_email
			image
		end
		return formatted_collection
	end

	def self.collect_images(bus_id)
		return Image.where(business_id: bus_id)
	end

	def self.collect_and_format_images(bus_id)
		unformatted_collection = self.collect_images(bus_id)
		unformatted_collection == nil ? formatted_collection = nil : formatted_collection = self.format_images(unformatted_collection)
		return formatted_collection
	end
end
