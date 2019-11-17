class BusinessCategories < ActiveRecord::Migration[5.2]
  def change
		create_table :businesses_categories, id:false do |t|
      t.integer :business_id
      t.integer :category_id
		end
  end
end
