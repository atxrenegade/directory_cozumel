class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :entry_type
			t.integer :bus_id
			t.string :bus_name
      t.string :date
      t.string :contributor
      t.string :contributor_email
      t.string :data_object
			t.string :status
      t.string :resolved_date
			t.integer :admin_id
			t.string :notes

      t.timestamps
    end
  end
end
