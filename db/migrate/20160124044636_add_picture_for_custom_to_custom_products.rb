class AddPictureForCustomToCustomProducts < ActiveRecord::Migration
  def self.up
    change_table :custom_products do |t|
      t.references :picture_for_customs
    end
  end
end
