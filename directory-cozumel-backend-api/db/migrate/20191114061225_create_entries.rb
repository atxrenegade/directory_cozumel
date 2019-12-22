class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|

      t.string :type
			t.integer :integer
      t.string :date
      t.string :contributor
      t.string :contributor_email
      t.string :data_array
			t.string :status
      t.string :resolved_date
			t.integer :admin_id
			t.string :notes

			t.references :entryable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
