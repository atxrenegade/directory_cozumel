class DeleteColumnFromAdmins < ActiveRecord::Migration[5.2]
	def change
	 remove_column :admins, :admin_id
 	end
end
