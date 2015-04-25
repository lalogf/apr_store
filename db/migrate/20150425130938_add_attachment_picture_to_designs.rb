class AddAttachmentPictureToDesigns < ActiveRecord::Migration
  def self.up
    change_table :designs do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :designs, :picture
  end
end
