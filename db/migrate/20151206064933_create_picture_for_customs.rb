class CreatePictureForCustoms < ActiveRecord::Migration
  def change
    create_table :picture_for_customs do |t|
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :picture_for_customs, :users
  end
end
