class AddAttachmentPictureToCustomProducts < ActiveRecord::Migration
  def self.up
    change_table :custom_products do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :custom_products, :picture
  end
end
