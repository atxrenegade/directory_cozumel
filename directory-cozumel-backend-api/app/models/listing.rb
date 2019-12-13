class Listing < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_listing(bus_id)
		listing = {}
		listObj = Listing.find_by(business_id: bus_id)
		if listing
			listing["overall_rating"] = listObj.overall_rating
		else
			listing["overall_rating"] = "not yet rated"
		end
		listing["address"] = listObj.address
		listing["phone_number"] = listObj.phone_number
		listing["website"] = listObj.website
		return listing
	end
end
