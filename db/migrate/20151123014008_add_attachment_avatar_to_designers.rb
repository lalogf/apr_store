class AddAttachmentAvatarToDesigners < ActiveRecord::Migration
  def self.up
    change_table :designers do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :designers, :avatar
  end
end
