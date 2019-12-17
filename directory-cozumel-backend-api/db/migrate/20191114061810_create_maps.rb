class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :maps do |t|
      t.float :lat, precision: 13, scale: 9
			t.float :lng, precision: 13, scale: 9
			t.references :business

      t.timestamps
    end
  end
end
