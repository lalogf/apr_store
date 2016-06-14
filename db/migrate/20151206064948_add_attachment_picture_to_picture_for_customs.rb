class AddAttachmentPictureToPictureForCustoms < ActiveRecord::Migration
  def self.up
    change_table :picture_for_customs do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :picture_for_customs, :picture
  end
end
