class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price, precision: 4, scale: 2
      t.string :upc
      t.decimal :stock, precision: 4
      t.string :picture
      t.integer :design_id
      t.integer :phonetype_id

      t.timestamps null: false
    end
  end
end
