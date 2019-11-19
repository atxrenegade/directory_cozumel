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

	def build_business_object
		bus_obj = {}
		bus_id = self.id
		bus_obj["id"] = bus_id
		bus_obj["name"] = self.name.to_s
		bus_obj["categories"] = self.category_names.flatten
		bus_obj["listing"] = Listing.format_listing(bus_id)
		bus_obj["map"] = Map.format_map(bus_id)
		bus_obj["reviews"] = Review.format_reviews(bus_id)
		bus_obj["images"] = Image.format_images(bus_id)
		return bus_obj
	end

	def self.build_filtered_list_for_export(bus_list)
		export_list = bus_list.map do | bus_id |
			bus = Business.find_by(id: bus_id)
			bus.build_business_object
		end
		return export_list
	end
end


#:destroy causes all the associated objects to also be destroyed
#:delete_all causes all the associated objects to be deleted directly from the database (so callbacks will not execute)
