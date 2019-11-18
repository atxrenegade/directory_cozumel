class Business < ApplicationRecord
	validates :name, uniqueness: true

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

	def add_category_to_business(cat_name)
		new_cat = Category.find_by(name: cat_name)
		self.categories << new_cat
	end

	def remove_category_from_business(cat_name)
		del_cat = Category.find_by(name: cat_name)
		self.categories.delete(del_cat)
	end

	def self.build_new_business(name, cat_name)
		biz = Business.create!(name:name)
		biz.add_category_to_business(cat_name)
	end

	def build_business_object(business)
		bus_obj = {}
		bus_id = business.id
		bus_name = business.name
		bus_listing = format_listings(bus_id)
		bus_map = format_maps(bus_id)
		bus_reviews = format_reviews(bus_id)
		bus_images = format_images(bus_id)
		bus_obj << bus_name + bus_listing + bus_map + bus_reviews + bus_images
	end
end


#:destroy causes all the associated objects to also be destroyed
#:delete_all causes all the associated objects to be deleted directly from the database (so callbacks will not execute)
