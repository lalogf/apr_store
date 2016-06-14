class AddUserIdToCharges < ActiveRecord::Migration
  def change
    add_reference :charges, :user, index: true
    add_foreign_key :charges, :users
  end
end
