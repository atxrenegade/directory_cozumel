class BusinessCategory < ApplicationRecord
	belongs_to :business
	belongs_to :category

	def self.filter_by_category(lang, category)
		if lang == 'eng'
			category_id = Category.find_by_name(category).id
		else
			category_id = Category.find_by(nombre: category).id
		end 
		filtered = BusinessCategory.select('business_id').where('category_id = ?', category_id).to_a.map{|bus| bus['business_id']}
		return Business.build_filtered_list_for_export(filtered)
	end
end
