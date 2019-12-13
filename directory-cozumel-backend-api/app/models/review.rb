class Review < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
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
