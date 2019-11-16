class Image < ApplicationRecord
	belongs_to :business
	has_many :entries, as: :entryable
end
