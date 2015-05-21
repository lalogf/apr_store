class CreateCaseInventories < ActiveRecord::Migration
  def change
    create_table :case_inventories do |t|
      t.string :finish
      t.integer :phonetype_id
      t.integer :stock
      t.timestamps null: false
    end
  end
end
