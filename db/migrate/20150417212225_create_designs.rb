class CreateDesigns < ActiveRecord::Migration
  def change
    create_table :designs do |t|
      t.string :name
      t.string :picture
      t.integer :collection_id
      t.integer :designer_id

      t.timestamps null: false
    end
  end
end
