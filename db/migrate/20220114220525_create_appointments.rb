class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :title
      t.datetime :session
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
