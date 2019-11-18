class Listing < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_listing(bus_id)
		formatted_listing = {}
		to_convert = Listing.find_by(business_id: bus_id)
		formatted_listing["rating"] = to_convert.overall_rating
		formatted_listing["address"] = to_convert.address
		formatted_listing["phone_number"] = to_convert.phone_number
		formatted_listing["website"] = to_convert.website
		return formatted_listing
	end
end
