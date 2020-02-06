class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :description
      t.string :date
      t.string :url
      t.string :contributor
			t.string :contributor_email

			t.references :business

      t.timestamps
    end
  end
end
