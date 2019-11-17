class Category < ApplicationRecord
	has_many :business_categories
	has_many :businesses, through: :business_categories

	def business_names
		self.businesses.pluck(:name)
	end	
end
