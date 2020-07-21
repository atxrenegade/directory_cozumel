class Business < ApplicationRecord
	validates :name, uniqueness: true

	has_many :business_categories, dependent: :destroy
	has_many :categories, through: :business_categories, dependent: :destroy
	has_one :listing, dependent: :destroy
	has_many :reviews, dependent: :destroy
	has_many :images, dependent: :destroy
	has_one :map, dependent: :destroy
	has_one :operation, dependent: :destroy

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
		cat = Category.find_by_name_or_nombre(cat_name)
		self.categories << cat
	end

	def remove_category_from_business(cat_name)
		cat = Category.find_by_name_or_nombre(cat_name)
		self.categories.delete(cat)
	end

	def self.build_new_business(name, cat_name)
		bus = Business.create!(name: name)
		bus.add_category_to_business(cat_name)
	end

	def self.build_new_associated(business, cat_name, listing_attributes)
		business.add_category_to_business(cat_name)
		Listing.create!(listing_attributes)
	end

	def build_business_object
		bus_obj = {}
		business_id = self.id
		bus_obj['id'] = business_id
		bus_obj['name'] = self.name.to_s
		bus_obj['categories'] = self.category_names.flatten
		bus_obj['listing'] = Listing.format_listing(business_id)
		return bus_obj
	end

	def self.build_filtered_list_for_export(bus_list)
		return bus_list.map {|id| Business.find(id)}
	end

	def self.filter_by_name(name)
		wildcard_search = "%#{name.downcase}%"
 		filtered = Business.select('id').where('lower(name) LIKE ?', wildcard_search).map{|el| el.id }
		return Business.build_filtered_list_for_export(filtered)
	end
end
