class Review < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_reviews(bus_id)
		unformatted_collection = Review.where(business_id: bus_id)
		formatted_collection  = unformatted_collection.map do |x|
			review = {}
			review["id"] = x.id
			review["rating"] = x.rating
			review["content"] = x.content
			review["contributor"] = x.contributor
			review["contributor_email"] = x.contributor_email
			return review
		end
	end
end
