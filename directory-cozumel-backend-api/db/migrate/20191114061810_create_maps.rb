class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :maps do |t|
      t.integer :lat
			t.integer :lng
			t.references :business
			
      t.timestamps
    end
  end
end
