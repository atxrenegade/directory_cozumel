class Image < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.collect_images(business_id)
		return Image.where(business_id: business_id)
	end
end
