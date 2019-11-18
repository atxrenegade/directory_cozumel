class AddColumnToImages < ActiveRecord::Migration[5.2]
  def change
		add_column :images, :contributor_email, :string
  end
end
