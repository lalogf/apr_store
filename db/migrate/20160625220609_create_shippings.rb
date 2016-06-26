class CreateShippings < ActiveRecord::Migration
  def change
    create_table :shippings do |t|
      t.references :order, index: true
      t.string :address
      t.string :district
      t.string :province
      t.string :department
      t.string :country
      t.string :phone

      t.timestamps null: false
    end
    add_foreign_key :shippings, :orders
  end
end
