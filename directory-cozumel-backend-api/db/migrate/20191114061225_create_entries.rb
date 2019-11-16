class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|

      t.string :type
      t.string :date
      t.string :contributor
      t.string :contributor_email
      t.string :data_object_string
      t.string :notes
      t.string :resolved_date
			t.integer :admin_id

			t.references :entryable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
