class CreateCustomProducts < ActiveRecord::Migration
  def change
    create_table :custom_products do |t|
      t.references :user, index: true
      t.references :phonetype, index: true

      t.timestamps null: false
    end
    add_foreign_key :custom_products, :users
    add_foreign_key :custom_products, :phonetypes
  end
end
