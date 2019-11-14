class Business < ApplicationRecord
	has_and_belongs_to_many :categories
	has_one :listing
	has_many :reviews
	has_many :images
	has_one :map
	has_many :admin_entries, through: :photos
	has_many :admin_entries, through: :listings
	has_many :admin_entries, through: :reviews
end
