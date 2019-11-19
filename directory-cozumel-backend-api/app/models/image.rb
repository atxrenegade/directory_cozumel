class Image < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_images(bus_id)
		unformatted_collection = Image.where(business_id: bus_id)
		if unformatted_collection == nil
			formatted_collection = nil
		else
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
		end
		return formatted_collection
	end
end
