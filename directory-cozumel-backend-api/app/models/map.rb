class Map < ApplicationRecord
	belongs_to :business
	has_many :admin_entries, as: :admin_entryable
end
