class Map < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable

	def business_name
		self.business.name
	end

	def self.format_map(bus_id)
		formatted_map = {}
		to_convert = Map.find_by(business_id: bus_id)
		if to_convert == nil
			formatted_map = nil
		else
			formatted_map["map_coords"] = to_convert.map_coords
		end
		return formatted_map
	end
end
