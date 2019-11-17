class AddColumnsToBusinessCategories < ActiveRecord::Migration[5.2]
  def change
		add_column :business_categories, :business_id, :integer
		add_column :business_categories, :category_id, :integer
  end
end
