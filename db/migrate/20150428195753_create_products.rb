class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price
      t.string :upc
      t.decimal :stock
      t.integer :design_id
      t.integer :phonetype_id

      t.timestamps null: false
    end
  end
end
