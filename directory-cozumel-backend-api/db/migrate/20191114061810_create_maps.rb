class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :maps do |t|
      t.string :map_coords

			t.references :business

      t.timestamps
    end
  end
end
