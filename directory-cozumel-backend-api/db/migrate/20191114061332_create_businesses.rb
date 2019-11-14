class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name
			t.references :category #does this work for has_and_belongs_to_many relationships?

      t.timestamps
    end
  end
end
