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

	def category_names
    self.categories.pluck(:name)
	end

	def address
		self.listing.address
	end

	def rating
		self.listing.overall_rating
	end

	def phone_number
		self.listing.phone_number
	end

	def website
		self.listing.website
	end

	def add_category(cat_name)
		new_cat = Category.find_by(name: cat_name)
		self.categories << new_cat
	end

	def remove_category(cat_name)
		del_cat = Category.find_by(name: cat_name)
		self.categories.delete(del_cat)
	end

	def self.build_new_business(name, cat_name)
		biz = Business.create(name:name)
		biz.add_category(cat_name)
	end

	def build_business_object(biz_name)
		#find biz object by name
		#create biz hash for api export
		#include business, name, categories, listings, reviews, map
	end
end


#:destroy causes all the associated objects to also be destroyed
#:delete_all causes all the associated objects to be deleted directly from the database (so callbacks will not execute)
