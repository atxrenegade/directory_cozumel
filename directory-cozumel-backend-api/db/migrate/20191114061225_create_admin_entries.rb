class CreateAdminEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :admin_entries do |t|
			#polymorhphic belongs to
      t.string :type
      t.string :date
      t.string :contributor
      t.string :contributor_email
      t.string :data_object_string
      t.string :notes
      t.string :resolved_date

      t.timestamps
    end
  end
end
