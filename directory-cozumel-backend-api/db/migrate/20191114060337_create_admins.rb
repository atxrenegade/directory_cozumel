class CreateAdmins < ActiveRecord::Migration[5.2]
  def change
    create_table :admins do |t|
      t.string :username
      t.string :password_digest
			t.string :role
			t.string :status

      t.timestamps
    end
  end
end
