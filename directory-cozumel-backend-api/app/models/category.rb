class Category < ApplicationRecord
	has_many :business_categories
	has_many :businesses, through: :business_categories

	def business_names
		self.businesses.pluck(:name)
	end

	def find_by_name_or_nombre(cat_name)
		if Category.find_by(name: cat_name).exists?
			cat = Category.find_by(name: cat_name)
		else
			cat = Category.find_by(nombre: cat_name)
		end
		return cat	
	end
end
