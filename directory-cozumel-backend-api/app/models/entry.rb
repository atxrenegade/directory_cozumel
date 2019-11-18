class Entry < ApplicationRecord
	belongs_to :entryable, polymorphic: true
	belongs_to :category
end
