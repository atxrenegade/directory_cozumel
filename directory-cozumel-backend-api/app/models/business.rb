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

	def overall_rating
		self.listing.overall_rating
	end

	def phone_number
		self.listing.phone_number
	end

	def website
		self.listing.website
	end

	def add_category_to_business(cat_name)
		self.categories << (Category.find_by(name: cat_name))
	end

	def remove_category_from_business(cat_name)

		self.categories.delete(Category.find_by(name: cat_name))
	end

	def self.build_new_business(name, cat_name)
		bus = Business.create!(name:name)
		bus.add_category_to_business(cat_name)
	end

	def build_business_object
		bus_obj = {}
		bus_id = self.id
		bus_obj["id"] = bus_id
		bus_obj["name"] = self.name.to_s
		bus_obj["categories"] = self.category_names.flatten
		bus_obj["listing"] = Listing.format_listing(bus_id)
		bus_obj["map"] = Map.format_map(bus_id)
		bus_obj["reviews"] = Review.collect_and_format_reviews(bus_id)
		bus_obj["images"] = Image.collect_and_format_images(bus_id)
		return bus_obj
	end

	def self.build_filtered_list_for_export(bus_list)
		return bus_list.map {|id| Business.find(id)}
	end

	def self.filter_by_name(name)
		filtered_businesses =  Business.select("id").where("lower(name) = ?", name.downcase).map{|el| el.id }
		return Business.build_filtered_list_for_export(filtered_businesses)
	end
end


#:destroy causes all the associated objects to also be destroyed
#:delete_all causes all the associated objects to be deleted directly from the database (so callbacks will not execute)
