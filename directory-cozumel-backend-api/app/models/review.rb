class Review < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.collect_reviews(business_id)
		return Review.where(business_id: business_id)
	end

	def self.collect_and_format_reviews(business_id)
		unformatted_collection = self.collect_reviews(business_id)
		unformatted_collection == nil ? formatted_collection = nil : formatted_collection = self.format_reviews(unformatted_collection)
		return formatted_collection
	end

	def self.collect_ratings(business_id)
		reviews = Review.collect_reviews(business_id)
		reviews.map {|e| e.rating}
	end

	def self.update_rating(business_id)
		ratings = self.collect_ratings(business_id)
		total = ratings.count
		overall_rating = ratings.sum()/total
		Listing.update_listing_rating(business_id, overall_rating)
	end
end
