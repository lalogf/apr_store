class CreatePhonetypes < ActiveRecord::Migration
  def change
    create_table :phonetypes do |t|
      t.string :model
      t.string :finish

      t.timestamps null: false
    end
  end
end
