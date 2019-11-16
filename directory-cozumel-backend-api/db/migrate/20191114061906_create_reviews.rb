class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :content
      t.string :contributor
      t.string :contributor_email
      t.integer :rating

			t.references :business

      t.timestamps
    end
  end
end
