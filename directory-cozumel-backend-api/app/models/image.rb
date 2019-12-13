class Image < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.collect_images(bus_id)
		return Image.where(business_id: bus_id)
	end
end
