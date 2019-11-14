class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :rating
      t.string :address
      t.string :phone_number
      t.string :website

			t.references :business

      t.timestamps
    end
  end
end
