class RemoveUserIdAndPhonetypeIdFromCustomProduct < ActiveRecord::Migration
  def change
    remove_column :custom_products, :user_id
    remove_column :custom_products, :phonetype_id
  end
end
