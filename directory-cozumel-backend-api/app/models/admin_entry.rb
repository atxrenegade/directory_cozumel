class AdminEntry < ApplicationRecord
	#polymorphic belongs to photo, listing, or review
	#polymorphic has_many businesses through, photos, listings, and reviews
	has_many :businesses, through: :listings
	has_many :businesses, through: :reviews
	has_many :businesses, through: :photos
	belongs_to :category
end
