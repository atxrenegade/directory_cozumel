class AddStatusColumnToAdmins < ActiveRecord::Migration[5.2]
  def change
		add_column :admins, :status, :string 
  end
end
