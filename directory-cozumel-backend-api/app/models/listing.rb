class Listing < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable
end
