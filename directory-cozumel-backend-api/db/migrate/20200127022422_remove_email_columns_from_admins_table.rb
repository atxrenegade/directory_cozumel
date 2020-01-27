class RemoveEmailColumnsFromAdminsTable < ActiveRecord::Migration[5.2]
  def change
		remove_column :admins, :email
		remove_column :admins, :index_admins_on_email
  end
end
