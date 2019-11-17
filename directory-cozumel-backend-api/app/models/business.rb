class Business < ApplicationRecord
	has_many :business_categories
	has_many :categories, through: :business_categories
	has_one :listing #, dependent: :delete_all
	has_many :reviews#, dependent: :delete_all
	has_many :images#, dependent: :delete_all
	has_one :map#, dependent: :delete_all
	has_many :entries, through: :photos
	has_many :entries, through: :listings
	has_many :entries, through: :reviews

	def categories_names
    self.categories.pluck(:name)
  end

	def add_category(cat_name)
		new_cat = Category.find_by(name: cat_name)
		self.categories << new_cat
	end

	def remove_cat(cat_name)
		del_cat = Category.find_by(name: cat_name)
		self.categories.delete(del_cat)
	end
end


#:destroy causes all the associated objects to also be destroyed
#:delete_all causes all the associated objects to be deleted directly from the database (so callbacks will not execute)
