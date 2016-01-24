class AddUuidToPictureForCustoms < ActiveRecord::Migration
  def change
    add_column :picture_for_customs, :uuid, :string
  end
end
