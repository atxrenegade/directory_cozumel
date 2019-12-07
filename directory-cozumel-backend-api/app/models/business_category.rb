class BusinessCategory < ApplicationRecord
	belongs_to :business
	belongs_to :category

	def self.filter_by_category(category)
		category_id = Category.find_by(name: category)
		filtered_businesses =  BusinessCategory.select("business_id").where("category_id = ?", category_id).map{|el| el.business_id }
		results = Business.build_filtered_list_for_export(filtered_businesses)
    return results
	end
end
