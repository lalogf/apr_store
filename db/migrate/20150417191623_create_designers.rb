class CreateDesigners < ActiveRecord::Migration
  def change
    create_table :designers do |t|
      t.string :name
      t.string :lastname

      t.timestamps null: false
    end
  end
end
