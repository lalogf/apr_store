class AddOrderToPictureForCustom < ActiveRecord::Migration
  def change
    add_reference :picture_for_customs, :order, index: true
    add_foreign_key :picture_for_customs, :orders
  end
end
