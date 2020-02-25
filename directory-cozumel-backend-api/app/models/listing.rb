class Listing < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_listing(business_id)
		listing = {}
		listObj = Listing.find_by(business_id: business_id)
		if listing
			listing[:overall_rating] = listObj.overall_rating
		else
			listing[:overall_rating] = 'Not Yet Rated'
		end
		listing[:address] = listObj.address
		listing[:phone_number] = listObj.phone_number
		listing[:website] = listObj.website
		return listing
	end

	def self.update_listing_rating(business_id, overall_rating)
		bus = Listing.find(business_id)
		bus.update!(overall_rating: overall_rating)
	end
end
