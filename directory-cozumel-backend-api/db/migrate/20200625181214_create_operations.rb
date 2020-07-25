class CreateOperations < ActiveRecord::Migration[5.2]
  def change
    create_table :operations do |t|
      t.boolean :current_status, :null => true
      t.string :business_hours
      t.date :opening_date, :null => true
      t.integer :occupancy_rate
      t.boolean :reservation_required, :null => true
      t.string :notes
      t.string :notas_en_espanol, :null => true 
			t.date :user_updated

			t.references :business

      t.timestamps
    end
  end
end
