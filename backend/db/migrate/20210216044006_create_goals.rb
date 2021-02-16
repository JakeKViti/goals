class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :title
      t.boolean :completed
      t.belongs_to :user
      t.timestamps
    end
  end
end
