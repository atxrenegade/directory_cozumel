class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :overall_rating
      t.string :address
      t.string :phone_number
      t.string :website
      t.boolean :sustainable_business, :null => true
      t.boolean :verified, :null => true
      t.string :verfied_date, :null => true


			t.references :business

      t.timestamps
    end
  end
end
