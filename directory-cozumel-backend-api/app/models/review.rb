class Review < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_reviews(unformatted_collection)
		formatted_collection  = unformatted_collection.map do |x|
			review = {}
			review["id"] = x.id
			review["rating"] = x.rating
			review["content"] = x.content
			review["contributor"] = x.contributor
			review["contributor_email"] = x.contributor_email
			review['business_id'] = x.business_id
			review
		end
		return formatted_collection
	end

	def self.collect_reviews(bus_id)
		return Review.where(business_id: bus_id)
	end

	def self.collect_and_format_reviews(bus_id)
		unformatted_collection = self.collect_reviews(bus_id)
		unformatted_collection == nil ? formatted_collection = nil : formatted_collection = self.format_reviews(unformatted_collection)
		return formatted_collection
	end
end
