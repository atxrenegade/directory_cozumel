class CreateOperations < ActiveRecord::Migration[5.2]
  def change
    create_table :operations do |t|
      t.boolean :current_status
      t.string :weekday_hours
      t.string :weekend_hours
      t.date :opening_date
      t.integer :occupancy_rate
      t.boolean :reservation_required
      t.string :notes

			t.references :business

      t.timestamps
    end
  end
end
