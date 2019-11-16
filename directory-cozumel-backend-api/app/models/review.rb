class Review <
	belongs_to :business
	has_many :entries, as: :entryable
end
